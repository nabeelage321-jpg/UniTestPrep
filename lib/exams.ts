export type ExamId = "lnat" | "tmua" | "tara" | "elat"

export type ExamSection = {
  name: string
  blurb: string
}

export type Exam = {
  id: ExamId
  name: string
  fullName: string
  forSubject: string
  oneLiner: string
  whoNeedsIt: string
  overview: string
  sections: ExamSection[]
  durationMinutes: number
  registrationDeadline: string
  sittingWindow: string
  format: string
}

export const EXAMS: Record<ExamId, Exam> = {
  lnat: {
    id: "lnat",
    name: "LNAT",
    fullName: "National Admissions Test for Law",
    forSubject: "Law",
    oneLiner: "Reading, argument and clear thinking — not legal knowledge.",
    whoNeedsIt:
      "Applicants for Law at Oxford, UCL, Bristol, Durham, King's, Nottingham, SOAS and others.",
    overview:
      "The LNAT tests how you read, reason and write rather than what you already know. Section A is 42 multiple-choice questions based on argumentative passages; Section B is a single essay under timed conditions. Universities read the essay themselves — there is no 'right' opinion, only a well-argued one.",
    sections: [
      {
        name: "Reading Comprehension",
        blurb: "Pin down exactly what a passage says — and what it doesn't.",
      },
      {
        name: "Critical Thinking",
        blurb: "Spot assumptions, flaws and unstated conclusions.",
      },
      {
        name: "Logical Reasoning",
        blurb: "Follow an argument to the conclusion it actually supports.",
      },
      {
        name: "Written Argument",
        blurb: "Build a clear, balanced essay under time pressure.",
      },
    ],
    durationMinutes: 95,
    registrationDeadline: "15 October 2025",
    sittingWindow: "1 September 2025 – 20 January 2026",
    format: "42 multiple-choice questions + 1 essay",
  },
  tmua: {
    id: "tmua",
    name: "TMUA",
    fullName: "Test of Mathematics for University Admission",
    forSubject: "Maths, Computer Science & Economics",
    oneLiner: "Mathematical thinking and logic, not memorised formulas.",
    whoNeedsIt:
      "Applicants for Maths, Computer Science and some Economics courses at Cambridge, Imperial, Warwick, Durham, LSE and — from 2026 — Oxford.",
    overview:
      "The TMUA rewards fluent, flexible mathematical reasoning. Paper 1 focuses on applying your mathematical knowledge; Paper 2 focuses on the logic and structure of mathematical arguments. Everything is drawn from a defined syllabus roughly at the level of the first year of A-level, so it is about depth of thinking, not new content.",
    sections: [
      {
        name: "Applications of Knowledge",
        blurb: "Use core maths flexibly in unfamiliar situations.",
      },
      {
        name: "Mathematical Reasoning",
        blurb: "Judge whether an argument is valid or flawed.",
      },
      {
        name: "Logic & Proof",
        blurb: "Work with implication, necessity and counterexamples.",
      },
    ],
    durationMinutes: 150,
    registrationDeadline: "15 October 2025",
    sittingWindow: "October 2025 & January 2026 sittings",
    format: "2 papers, 20 multiple-choice questions each",
  },
  tara: {
    id: "tara",
    name: "TARA",
    fullName: "Test of Academic Reasoning and Attainment",
    forSubject: "PPE, Humanities & Social Sciences",
    oneLiner: "Structured reasoning across problems and critical thinking.",
    whoNeedsIt:
      "Oxford applicants for PPE, Economics & Management, History, Geography, Human Sciences and other courses that previously required the TSA.",
    overview:
      "TARA is Oxford's replacement for the Thinking Skills Assessment (TSA) from the January 2026 cycle. It keeps the two things the TSA measured well — problem solving and critical thinking — in a single multiple-choice test. There is no curriculum to revise; you are being assessed on how carefully and logically you reason.",
    sections: [
      {
        name: "Problem Solving",
        blurb: "Extract the numbers and relationships that matter.",
      },
      {
        name: "Critical Thinking",
        blurb: "Evaluate arguments, evidence and conclusions.",
      },
      {
        name: "Data & Reasoning",
        blurb: "Reason accurately from tables, figures and text.",
      },
    ],
    durationMinutes: 90,
    registrationDeadline: "15 October 2025",
    sittingWindow: "October 2025 & January 2026 sittings",
    format: "50 multiple-choice questions",
  },
  elat: {
    id: "elat",
    name: "ELAT",
    fullName: "English Literature Admissions Test",
    forSubject: "English Literature",
    oneLiner: "Close reading and comparison of unseen literary texts.",
    whoNeedsIt:
      "Applicants for English at Oxford and a small number of other departments.",
    overview:
      "The ELAT gives you a cluster of unseen passages on a shared theme and asks for one comparative essay. It rewards attentive close reading — how writers use language, form and structure — rather than context you have memorised. Selectors want to see a reader who notices things and can shape an argument about them.",
    sections: [
      {
        name: "Close Reading",
        blurb: "Notice how language and form create meaning.",
      },
      {
        name: "Comparative Analysis",
        blurb: "Draw meaningful links between two texts.",
      },
      {
        name: "Written Argument",
        blurb: "Shape observations into a controlled essay.",
      },
    ],
    durationMinutes: 90,
    registrationDeadline: "15 October 2025",
    sittingWindow: "October 2025 sitting",
    format: "1 comparative essay from a set of passages",
  },
}

export const EXAM_LIST: Exam[] = [
  EXAMS.lnat,
  EXAMS.tmua,
  EXAMS.tara,
  EXAMS.elat,
]

/* ---------- Universities & courses (for the finder) ---------- */

export type University = {
  id: string
  name: string
  short: string
}

export const UNIVERSITIES: University[] = [
  { id: "oxford", name: "University of Oxford", short: "Oxford" },
  { id: "cambridge", name: "University of Cambridge", short: "Cambridge" },
  { id: "imperial", name: "Imperial College London", short: "Imperial" },
  { id: "lse", name: "London School of Economics", short: "LSE" },
  { id: "ucl", name: "University College London", short: "UCL" },
  { id: "warwick", name: "University of Warwick", short: "Warwick" },
  { id: "other", name: "Another UK university", short: "Other" },
]

export type CourseRequirement = {
  id: string
  university: string
  course: string
  examId: ExamId | null
  note?: string
  discontinued?: {
    was: string
    changedWhen: string
    detail: string
  }
}

export const COURSE_REQUIREMENTS: CourseRequirement[] = [
  // Oxford
  {
    id: "oxford-law",
    university: "oxford",
    course: "Law (Jurisprudence)",
    examId: "lnat",
    note: "Sit the LNAT before the October deadline in your application year.",
  },
  {
    id: "oxford-ppe",
    university: "oxford",
    course: "Philosophy, Politics & Economics (PPE)",
    examId: "tara",
    discontinued: {
      was: "TSA",
      changedWhen: "January 2026",
      detail:
        "PPE used to require the Thinking Skills Assessment (TSA). From the January 2026 cycle Oxford replaced it with the TARA — same skills, new name.",
    },
  },
  {
    id: "oxford-econ-mgmt",
    university: "oxford",
    course: "Economics & Management",
    examId: "tara",
    discontinued: {
      was: "TSA",
      changedWhen: "January 2026",
      detail:
        "Economics & Management previously used the TSA. It is now assessed through the TARA from January 2026.",
    },
  },
  {
    id: "oxford-maths",
    university: "oxford",
    course: "Mathematics",
    examId: "tmua",
    discontinued: {
      was: "MAT",
      changedWhen: "January 2026",
      detail:
        "Oxford Maths used to require the MAT. From January 2026 the MAT was discontinued and Oxford moved to the TMUA.",
    },
  },
  {
    id: "oxford-cs",
    university: "oxford",
    course: "Computer Science",
    examId: "tmua",
    discontinued: {
      was: "MAT",
      changedWhen: "January 2026",
      detail:
        "Oxford Computer Science used to require the MAT. From January 2026 it uses the TMUA instead.",
    },
  },
  {
    id: "oxford-english",
    university: "oxford",
    course: "English Language & Literature",
    examId: "elat",
  },
  {
    id: "oxford-history",
    university: "oxford",
    course: "History",
    examId: "tara",
    discontinued: {
      was: "HAT / TSA",
      changedWhen: "January 2026",
      detail:
        "Several Oxford humanities courses have consolidated their admissions testing into the TARA from January 2026.",
    },
  },
  // Cambridge
  {
    id: "cam-law",
    university: "cambridge",
    course: "Law",
    examId: "lnat",
    note: "Most Cambridge colleges use the LNAT for Law from the 2026 cycle.",
  },
  {
    id: "cam-cs",
    university: "cambridge",
    course: "Computer Science",
    examId: "tmua",
  },
  {
    id: "cam-econ",
    university: "cambridge",
    course: "Economics",
    examId: "tmua",
  },
  {
    id: "cam-english",
    university: "cambridge",
    course: "English",
    examId: "elat",
    note: "Some colleges set a written assessment at interview alongside the ELAT.",
  },
  // Imperial
  {
    id: "imperial-maths",
    university: "imperial",
    course: "Mathematics",
    examId: "tmua",
  },
  {
    id: "imperial-cs",
    university: "imperial",
    course: "Computing",
    examId: "tmua",
  },
  // LSE
  {
    id: "lse-law",
    university: "lse",
    course: "Bachelor of Laws (LLB)",
    examId: "lnat",
  },
  {
    id: "lse-econ",
    university: "lse",
    course: "Economics",
    examId: "tmua",
    note: "LSE recommends the TMUA and considers a strong score favourably.",
  },
  // UCL
  {
    id: "ucl-law",
    university: "ucl",
    course: "Law (LLB)",
    examId: "lnat",
  },
  {
    id: "ucl-econ",
    university: "ucl",
    course: "Economics",
    examId: "tmua",
  },
  // Warwick
  {
    id: "warwick-maths",
    university: "warwick",
    course: "Mathematics",
    examId: "tmua",
  },
  {
    id: "warwick-econ",
    university: "warwick",
    course: "Economics",
    examId: "tmua",
  },
  // Other
  {
    id: "other-law",
    university: "other",
    course: "Law",
    examId: "lnat",
    note: "Many UK Law departments use the LNAT — check your specific course page to confirm.",
  },
  {
    id: "other-maths",
    university: "other",
    course: "Maths / Computer Science",
    examId: "tmua",
    note: "The TMUA is used by a growing list of universities. Confirm on the course page.",
  },
  {
    id: "other-unsure",
    university: "other",
    course: "I'm not sure yet",
    examId: null,
    note: "Not every course needs an admissions test. Start with the LNAT or TMUA practice if you're leaning toward Law or a quantitative subject.",
  },
]

export function coursesForUniversity(universityId: string) {
  return COURSE_REQUIREMENTS.filter((c) => c.university === universityId)
}
