import { MorphologyItem } from './types';

// Data strictly based on the provided images:
// 1. SUBSTANTIVERNES bøjninger - den lange AM §2
// 2. VERBERNES terminologi AM §6 / Personendelser AM §6.4 / Mærker AM §6.8

export const MORPHOLOGY_DATA: MorphologyItem[] = [
  // ============================================================
  // VERBER: TERMINOLOGI (AM §6)
  // ============================================================
  { id: 'vt1', suffix: 'Synsvinkel', description: 'Betydning af "Aspekt"', category: 'Verber: Terminologi', explanation: 'Aspekt betegner synsvinklen (perfektiv/afsluttet eller imperfektiv/uafsluttet).' },
  { id: 'vt2', suffix: 'Tid', description: 'Betydning af "Tempus"', category: 'Verber: Terminologi', explanation: 'Tempus betyder tid (f.eks. nutid, datid, fremtid).' },
  { id: 'vt3', suffix: 'Måde', description: 'Betydning af "Modus"', category: 'Verber: Terminologi', explanation: 'Modus betyder måde (f.eks. konstaterende, bydende, ønskende).' },
  { id: 'vt4', suffix: 'Person', description: 'Betydning af "Persona"', category: 'Verber: Terminologi', explanation: 'Persona angiver hvem der handler (jeg, du, han/hun...).' },
  { id: 'vt5', suffix: 'Tal', description: 'Betydning af "Numerus"', category: 'Verber: Terminologi', explanation: 'Numerus angiver tal (ental/singularis eller flertal/pluralis).' },
  { id: 'vt6', suffix: 'Art', description: 'Betydning af "Diatese"', category: 'Verber: Terminologi', explanation: 'Diatese angiver "art" - dvs. om det er Aktiv eller Passiv.' },
  { id: 'vt7', suffix: 'Indikativ', description: 'Latinsk betegnelse for "Konstaterende" måde', category: 'Verber: Terminologi', explanation: 'Indikativ er den almindelige "konstaterende" form.' },
  { id: 'vt8', suffix: 'Konjunktiv', description: 'Latinsk betegnelse for "Tvivlende, opfordrende, ønskende" måde', category: 'Verber: Terminologi', explanation: 'Konjunktiv bruges bl.a. om ønsker og hypotetiske situationer.' },
  { id: 'vt9', suffix: 'Imperativ', description: 'Latinsk betegnelse for "Bydende" måde', category: 'Verber: Terminologi', explanation: 'Imperativ er bydeform (f.eks. "Løb!").' },

  // ============================================================
  // VERBER: PERSONENDELSER (AM §6.4)
  // ============================================================
  // Aktiv (Præsensstammen)
  { id: 'vp_a1', suffix: '-o / -m', description: '1. person singularis (Aktiv)', category: 'Verber: Personendelser', explanation: 'Jeg-formen i aktiv præsensstammen.' },
  { id: 'vp_a2', suffix: '-s', description: '2. person singularis (Aktiv)', category: 'Verber: Personendelser', explanation: 'Du-formen i aktiv.' },
  { id: 'vp_a3', suffix: '-t', description: '3. person singularis (Aktiv)', category: 'Verber: Personendelser', explanation: 'Han/hun-formen i aktiv.' },
  { id: 'vp_a4', suffix: '-mus', description: '1. person pluralis (Aktiv)', category: 'Verber: Personendelser', explanation: 'Vi-formen i aktiv.' },
  { id: 'vp_a5', suffix: '-tis', description: '2. person pluralis (Aktiv)', category: 'Verber: Personendelser', explanation: 'I-formen i aktiv.' },
  { id: 'vp_a6', suffix: '-nt', description: '3. person pluralis (Aktiv)', category: 'Verber: Personendelser', explanation: 'De-formen i aktiv.' },

  // Passiv (Præsensstammen)
  { id: 'vp_p1', suffix: '-or / -r', description: '1. person singularis (Passiv)', category: 'Verber: Personendelser', explanation: 'Jeg-formen i passiv.' },
  { id: 'vp_p2', suffix: '-ris / -re', description: '2. person singularis (Passiv)', category: 'Verber: Personendelser', explanation: 'Du-formen i passiv.' },
  { id: 'vp_p3', suffix: '-tur', description: '3. person singularis (Passiv)', category: 'Verber: Personendelser', explanation: 'Han/hun-formen i passiv.' },
  { id: 'vp_p4', suffix: '-mur', description: '1. person pluralis (Passiv)', category: 'Verber: Personendelser', explanation: 'Vi-formen i passiv.' },
  { id: 'vp_p5', suffix: '-mini', description: '2. person pluralis (Passiv)', category: 'Verber: Personendelser', explanation: 'I-formen i passiv.' },
  { id: 'vp_p6', suffix: '-ntur', description: '3. person pluralis (Passiv)', category: 'Verber: Personendelser', explanation: 'De-formen i passiv.' },

  // Perfektivstammen Aktiv (Nu inkluderet ifølge arket)
  { id: 'vp_pf1', suffix: '-ī', description: '1. person singularis (Perfektum Aktiv)', category: 'Verber: Personendelser', explanation: 'Jeg-formen i perfektum aktiv (f.eks. amav-i).' },
  { id: 'vp_pf2', suffix: '-istī', description: '2. person singularis (Perfektum Aktiv)', category: 'Verber: Personendelser', explanation: 'Du-formen i perfektum aktiv.' },
  { id: 'vp_pf3', suffix: '-it', description: '3. person singularis (Perfektum Aktiv)', category: 'Verber: Personendelser', explanation: 'Han/hun-formen i perfektum aktiv.' },
  { id: 'vp_pf4', suffix: '-imus', description: '1. person pluralis (Perfektum Aktiv)', category: 'Verber: Personendelser', explanation: 'Vi-formen i perfektum aktiv.' },
  { id: 'vp_pf5', suffix: '-istis', description: '2. person pluralis (Perfektum Aktiv)', category: 'Verber: Personendelser', explanation: 'I-formen i perfektum aktiv.' },
  { id: 'vp_pf6', suffix: '-ērunt / -ēre', description: '3. person pluralis (Perfektum Aktiv)', category: 'Verber: Personendelser', explanation: 'De-formen i perfektum aktiv.' },

  // ============================================================
  // VERBER: TEMPUS- OG MODUSMÆRKER (AM §6.8)
  // ============================================================
  { id: 'vm1', suffix: '-bā- / -ēbā-', description: 'Imperfektum Indikativ (Mærke)', category: 'Verber: Mærker', explanation: '-ba- (1./2. bøjning) eller -ēbā- (3./4. bøjning) angiver datid indikativ.' },
  { id: 'vm2', suffix: '-b- / -bi- / -bu-', description: 'Futurum Indikativ (1. & 2. bøjning)', category: 'Verber: Mærker', explanation: '1. og 2. bøjning danner fremtid med b-lyd.' },
  { id: 'vm3', suffix: '-a- / -ē-', description: 'Futurum Indikativ (3. & 4. bøjning)', category: 'Verber: Mærker', explanation: '3. og 4. bøjning danner fremtid med vokalændring (1.p: -a-, ellers -e-).' },
  { id: 'vm4', suffix: '-ē-', description: 'Konjunktiv Præsens (1. bøjning)', category: 'Verber: Mærker', explanation: '1. bøjning skifter a til e i konjunktiv nutid.' },
  { id: 'vm5', suffix: '-ā-', description: 'Konjunktiv Præsens (2., 3., 4. bøjning)', category: 'Verber: Mærker', explanation: 'De fleste andre bøjninger bruger -a- som mærke for konjunktiv nutid.' },
  { id: 'vm6', suffix: '-rē-', description: 'Konjunktiv Imperfektum (Mærke)', category: 'Verber: Mærker', explanation: 'Konjunktiv imperfektum kendes ofte på -re- (infinitiv + endelse).' },
  { id: 'vm7', suffix: '-nt-', description: 'Participium Præsens Aktiv (Mærke)', category: 'Verber: Mærker', explanation: 'Nutids tillægsform kendes på -nt- (nom. -ns).' },
  { id: 'vm8', suffix: '-ur-', description: 'Participium Futurum Aktiv (Mærke)', category: 'Verber: Mærker', explanation: 'Fremtids tillægsform aktiv har mærket -ur-.' },
  { id: 'vm9', suffix: '-nd-', description: 'Gerundium og Gerundiv (Mærke)', category: 'Verber: Mærker', explanation: 'Gerundium og gerundiv kendes på -nd-.' },
  { id: 'vm10', suffix: '-era-', description: 'Pluskvamperfektum Indikativ (Mærke)', category: 'Verber: Mærker', explanation: 'Førdatid indikativ dannes med mærket -era-.' },
  { id: 'vm11', suffix: '-issē-', description: 'Pluskvamperfektum Konjunktiv (Mærke)', category: 'Verber: Mærker', explanation: 'Førdatid konjunktiv dannes med mærket -issē-.' },

  // ============================================================
  // SUBSTANTIVER: 1. BØJNING (a-stammer)
  // ============================================================
  { id: 's1_gen_sg', suffix: '-ae', description: '1. bøjning: Genitiv Singularis', category: 'Substantiver: 1. bøjning', explanation: 'F.eks. rosae.' },
  { id: 's1_akk_sg', suffix: '-am', description: '1. bøjning: Akkusativ Singularis', category: 'Substantiver: 1. bøjning', explanation: 'F.eks. rosam.' },
  { id: 's1_abl_sg', suffix: '-ā', description: '1. bøjning: Ablativ Singularis', category: 'Substantiver: 1. bøjning', explanation: 'Langt a i ablativ (rosā).' },
  { id: 's1_nom_pl', suffix: '-ae', description: '1. bøjning: Nominativ Pluralis', category: 'Substantiver: 1. bøjning', explanation: 'F.eks. rosae (roser).' },
  { id: 's1_gen_pl', suffix: '-ārum', description: '1. bøjning: Genitiv Pluralis', category: 'Substantiver: 1. bøjning', explanation: 'F.eks. rosārum.' },
  { id: 's1_dat_pl', suffix: '-īs', description: '1. bøjning: Dativ/Ablativ Pluralis', category: 'Substantiver: 1. bøjning', explanation: 'F.eks. rosīs.' },

  // ============================================================
  // SUBSTANTIVER: 2. BØJNING (o-stammer)
  // ============================================================
  { id: 's2_nom_sg', suffix: '-us / -um', description: '2. bøjning: Nominativ Singularis', category: 'Substantiver: 2. bøjning', explanation: 'Maskulinum -us (servus), Neutrum -um (templum).' },
  { id: 's2_gen_sg', suffix: '-ī', description: '2. bøjning: Genitiv Singularis', category: 'Substantiver: 2. bøjning', explanation: 'F.eks. servī eller templī.' },
  { id: 's2_dat_sg', suffix: '-ō', description: '2. bøjning: Dativ/Ablativ Singularis', category: 'Substantiver: 2. bøjning', explanation: 'F.eks. servō eller templō.' },
  { id: 's2_nom_pl', suffix: '-ī / -a', description: '2. bøjning: Nominativ Pluralis', category: 'Substantiver: 2. bøjning', explanation: 'Maskulinum -ī (servī), Neutrum -a (templa).' },
  { id: 's2_gen_pl', suffix: '-ōrum', description: '2. bøjning: Genitiv Pluralis', category: 'Substantiver: 2. bøjning', explanation: 'F.eks. servōrum eller templōrum.' },
  { id: 's2_dat_pl', suffix: '-īs', description: '2. bøjning: Dativ/Ablativ Pluralis', category: 'Substantiver: 2. bøjning', explanation: 'F.eks. servīs.' },

  // ============================================================
  // SUBSTANTIVER: 3. BØJNING (Konsonant- og i-stammer)
  // ============================================================
  { id: 's3_gen_sg', suffix: '-is', description: '3. bøjning: Genitiv Singularis', category: 'Substantiver: 3. bøjning', explanation: 'Fælles for alle i 3. bøjning (f.eks. carceris, finis).' },
  { id: 's3_abl_sg_kons', suffix: '-e', description: '3. bøjning (konsonant-stammer): Ablativ Singularis', category: 'Substantiver: 3. bøjning', explanation: 'Konsonantstammer har -e i ablativ (f.eks. carcere).' },
  { id: 's3_abl_sg_i', suffix: '-ī', description: '3. bøjning (i-stammer): Ablativ Singularis', category: 'Substantiver: 3. bøjning', explanation: 'I-stammer (især neutrum som mare) har ofte -ī i ablativ (marī, finī).' },
  { id: 's3_nom_pl_n', suffix: '-a / -ia', description: '3. bøjning (Neutrum): Nominativ/Akkusativ Pluralis', category: 'Substantiver: 3. bøjning', explanation: 'Konsonant: corpora (-a). I-stamme: maria (-ia).' },
  { id: 's3_nom_pl_mf', suffix: '-ēs', description: '3. bøjning (Masc/Fem): Nominativ Pluralis', category: 'Substantiver: 3. bøjning', explanation: 'F.eks. carcerēs eller finēs.' },
  { id: 's3_gen_pl_kons', suffix: '-um', description: '3. bøjning (konsonant-stammer): Genitiv Pluralis', category: 'Substantiver: 3. bøjning', explanation: 'Konsonantstammer: carcerum.' },
  { id: 's3_gen_pl_i', suffix: '-ium', description: '3. bøjning (i-stammer): Genitiv Pluralis', category: 'Substantiver: 3. bøjning', explanation: 'I-stammer: finium, marium.' },
  { id: 's3_dat_pl', suffix: '-ibus', description: '3. bøjning: Dativ/Ablativ Pluralis', category: 'Substantiver: 3. bøjning', explanation: 'F.eks. carceribus, finibus.' },

  // ============================================================
  // SUBSTANTIVER: 4. BØJNING (u-stammer)
  // ============================================================
  { id: 's4_nom_sg', suffix: '-us / -ū', description: '4. bøjning: Nominativ Singularis', category: 'Substantiver: 4. bøjning', explanation: 'Masc: cursus (-us). Neutrum: cornū (-ū).' },
  { id: 's4_gen_sg', suffix: '-ūs', description: '4. bøjning: Genitiv Singularis', category: 'Substantiver: 4. bøjning', explanation: 'F.eks. cursūs.' },
  { id: 's4_abl_sg', suffix: '-ū', description: '4. bøjning: Ablativ Singularis', category: 'Substantiver: 4. bøjning', explanation: 'F.eks. cursū.' },
  { id: 's4_nom_pl', suffix: '-ūs / -ua', description: '4. bøjning: Nominativ Pluralis', category: 'Substantiver: 4. bøjning', explanation: 'Masc: cursūs. Neutrum: cornua.' },
  { id: 's4_gen_pl', suffix: '-uum', description: '4. bøjning: Genitiv Pluralis', category: 'Substantiver: 4. bøjning', explanation: 'F.eks. cursuum, cornuum.' },
  { id: 's4_dat_pl', suffix: '-ibus', description: '4. bøjning: Dativ/Ablativ Pluralis', category: 'Substantiver: 4. bøjning', explanation: 'F.eks. cursibus.' },

  // ============================================================
  // SUBSTANTIVER: 5. BØJNING (e-stammer)
  // ============================================================
  { id: 's5_nom_sg', suffix: '-ēs', description: '5. bøjning: Nominativ Singularis', category: 'Substantiver: 5. bøjning', explanation: 'F.eks. rēs.' },
  { id: 's5_akk_sg', suffix: '-em', description: '5. bøjning: Akkusativ Singularis', category: 'Substantiver: 5. bøjning', explanation: 'F.eks. rem.' },
  { id: 's5_gen_sg', suffix: '-ī', description: '5. bøjning: Genitiv/Dativ Singularis', category: 'Substantiver: 5. bøjning', explanation: 'F.eks. reī (ofte enstavet rēī eller bare reī).' },
  { id: 's5_abl_sg', suffix: '-ē', description: '5. bøjning: Ablativ Singularis', category: 'Substantiver: 5. bøjning', explanation: 'F.eks. rē.' },
  { id: 's5_nom_pl', suffix: '-ēs', description: '5. bøjning: Nominativ/Akkusativ Pluralis', category: 'Substantiver: 5. bøjning', explanation: 'F.eks. rēs.' },
  { id: 's5_gen_pl', suffix: '-rum', description: '5. bøjning: Genitiv Pluralis', category: 'Substantiver: 5. bøjning', explanation: 'Ifølge skemaet: rē-rum -> endelse -rum (eller -ērum afhængig af stammeopfattelse, her bruges skemaets visuelle opdeling).' },
  { id: 's5_dat_pl', suffix: '-bus', description: '5. bøjning: Dativ/Ablativ Pluralis', category: 'Substantiver: 5. bøjning', explanation: 'Ifølge skemaet: rē-bus -> endelse -bus.' },
];