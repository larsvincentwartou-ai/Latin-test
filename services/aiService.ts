import { GoogleGenAI, Type, Schema } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface CorrectionAnalysis {
  isValid: boolean;
  correctedSuffix: string | null;
  explanation: string;
}

export const analyzeCorrection = async (
  questionText: string,
  originalAnswer: string,
  userSuggestion: string
): Promise<CorrectionAnalysis> => {
  try {
    const schema: Schema = {
      type: Type.OBJECT,
      properties: {
        isValid: {
          type: Type.BOOLEAN,
          description: "Whether the user's suggestion is factually correct regarding Latin morphology.",
        },
        correctedSuffix: {
          type: Type.STRING,
          description: "The cleaned, standardized suffix if valid (e.g., '-mus'). Null if invalid.",
          nullable: true,
        },
        explanation: {
          type: Type.STRING,
          description: "A short explanation in Danish about why it is valid or invalid.",
        },
      },
      required: ["isValid", "explanation"],
    };

    const prompt = `
      Context: Latin Grammar, specifically verbal morphology (Artes Mundi standard).
      
      Task: The user claims the current answer to a quiz question is wrong and has provided a correction.
      Evaluate if the user's suggestion is actually the correct grammatical form/suffix.
      
      Question: "${questionText}"
      Current System Answer: "${originalAnswer}"
      User's Suggested Answer: "${userSuggestion}"
      
      Determine if the User's Suggested Answer is correct for the given Question. 
      If it is correct, return isValid: true and the standardized suffix.
      If the System Answer was actually correct, or the User's suggestion is wrong, return isValid: false.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as CorrectionAnalysis;

  } catch (error) {
    console.error("AI Analysis failed:", error);
    return {
      isValid: false,
      correctedSuffix: null,
      explanation: "Kunne ikke forbinde til AI for analyse. Prøv igen senere.",
    };
  }
};