import type { ExamId } from "./exams"

export type Question =
  | {
      id: string
      type: "mcq"
      section: string
      passage?: string
      prompt: string
      options: string[]
      answer: number
    }
  | {
      id: string
      type: "essay"
      section: string
      passage?: string
      prompt: string
      guidance?: string
    }

const LNAT_QUESTIONS: Question[] = [
  {
    id: "lnat-1",
    type: "mcq",
    section: "Reading Comprehension",
    passage:
      "Advocates of open-plan offices argue that removing walls encourages spontaneous collaboration. Yet a large study of firms that switched to open layouts found that face-to-face interaction actually fell by around 70%, while email and messaging rose sharply. The authors suggest that when privacy disappears, workers retreat into headphones and screens to reconstruct the boundaries the architecture has taken away.",
    prompt: "Which of the following best expresses the main point of the passage?",
    options: [
      "Open-plan offices are cheaper for firms to build and maintain.",
      "Removing physical barriers can reduce, rather than increase, direct interaction.",
      "Email is a more efficient form of communication than conversation.",
      "Workers dislike being observed by their managers.",
      "Collaboration is unimportant to most modern firms.",
    ],
    answer: 1,
  },
  {
    id: "lnat-2",
    type: "mcq",
    section: "Critical Thinking",
    passage:
      "A city councillor claims: 'Since we introduced the late-night bus service, reported assaults in the town centre have fallen by 15%. The service is clearly making our streets safer and should be expanded.'",
    prompt: "Which of the following, if true, most weakens the councillor's argument?",
    options: [
      "The late-night bus service is popular with residents.",
      "Over the same period, the number of people going into the town centre at night fell by 30%.",
      "Assaults also fell in a neighbouring town with no bus service.",
      "The bus service was more expensive to run than expected.",
      "Some assaults in the town centre go unreported.",
    ],
    answer: 1,
  },
  {
    id: "lnat-3",
    type: "mcq",
    section: "Logical Reasoning",
    prompt:
      "All members of the debating society study at least one language. Some who study a language also play chess. Priya plays chess. Which conclusion follows necessarily?",
    options: [
      "Priya is a member of the debating society.",
      "Priya studies at least one language.",
      "Some chess players study a language.",
      "Everyone who studies a language plays chess.",
      "Priya does not study a language.",
    ],
    answer: 2,
  },
  {
    id: "lnat-4",
    type: "mcq",
    section: "Reading Comprehension",
    passage:
      "The historian notes that early printing did not immediately democratise knowledge. Books remained costly, literacy was rare, and the first presses largely reproduced texts the wealthy already owned. Only over generations, as paper cheapened and schooling spread, did print begin to reshape who could take part in public argument.",
    prompt: "The passage suggests that the impact of printing was:",
    options: [
      "Immediate and universal.",
      "Gradual and dependent on other social changes.",
      "Limited entirely to religious texts.",
      "Harmful to the spread of literacy.",
      "Confined to a single generation.",
    ],
    answer: 1,
  },
  {
    id: "lnat-5",
    type: "mcq",
    section: "Critical Thinking",
    prompt:
      "'Every successful entrepreneur I have interviewed wakes before 6am. Therefore, waking early causes business success.' This argument is most vulnerable to the criticism that it:",
    options: [
      "Relies on interviews rather than surveys.",
      "Confuses correlation with causation and ignores those who wake early but fail.",
      "Assumes entrepreneurs are trustworthy.",
      "Uses too small a sample of successful people.",
      "Fails to define what counts as 'early'.",
    ],
    answer: 1,
  },
  {
    id: "lnat-6",
    type: "mcq",
    section: "Logical Reasoning",
    prompt:
      "If it rains, the match is cancelled. The match was not cancelled. Which follows necessarily?",
    options: [
      "It rained.",
      "It did not rain.",
      "The match may have been cancelled for another reason.",
      "It will rain tomorrow.",
      "The match was postponed.",
    ],
    answer: 1,
  },
  {
    id: "lnat-7",
    type: "mcq",
    section: "Reading Comprehension",
    passage:
      "Critics of ranking systems in schools argue that a single number flattens everything that matters about a young person into a position on a list. Supporters counter that, imperfect as they are, rankings give families without insider knowledge a starting point they would otherwise lack.",
    prompt: "The supporters' argument rests on the idea that rankings:",
    options: [
      "Are perfectly accurate measures of school quality.",
      "Help level access to information for less well-connected families.",
      "Should replace all other forms of assessment.",
      "Are opposed by most families.",
      "Reduce the workload of teachers.",
    ],
    answer: 1,
  },
  {
    id: "lnat-8",
    type: "mcq",
    section: "Critical Thinking",
    prompt:
      "A columnist writes: 'We must either ban the technology outright or accept total surveillance.' The reasoning is flawed mainly because it:",
    options: [
      "Uses emotional language.",
      "Presents a false dilemma, ignoring intermediate options.",
      "Cites no named experts.",
      "Appeals to tradition.",
      "Contradicts itself.",
    ],
    answer: 1,
  },
  {
    id: "lnat-essay",
    type: "essay",
    section: "Written Argument",
    prompt:
      "'A society should be judged by how it treats its least powerful members.' Discuss.",
    guidance:
      "Write a balanced, well-structured argument. There is no correct opinion — examiners are looking for a clear line of reasoning, fair treatment of counter-arguments, and controlled writing. Aim for 500–600 words in a real sitting.",
  },
]

const TMUA_QUESTIONS: Question[] = [
  {
    id: "tmua-1",
    type: "mcq",
    section: "Applications of Knowledge",
    prompt:
      "The line y = 2x + 1 meets the curve y = x² + 4 at how many points?",
    options: ["0", "1", "2", "Infinitely many", "Cannot be determined"],
    answer: 0,
  },
  {
    id: "tmua-2",
    type: "mcq",
    section: "Applications of Knowledge",
    prompt: "If log₂(x) + log₂(x − 2) = 3, what is the value of x?",
    options: ["2", "3", "4", "6", "8"],
    answer: 2,
  },
  {
    id: "tmua-3",
    type: "mcq",
    section: "Mathematical Reasoning",
    prompt:
      "For how many integer values of n is n² − 5n + 6 less than or equal to 0?",
    options: ["1", "2", "3", "4", "Infinitely many"],
    answer: 1,
  },
  {
    id: "tmua-4",
    type: "mcq",
    section: "Mathematical Reasoning",
    prompt:
      "Consider the statement: 'If n² is even, then n is even.' Which of the following correctly describes it?",
    options: [
      "It is false; a counterexample is n = 3.",
      "It is true, and can be proved by contradiction.",
      "It is true only for n > 0.",
      "It is the converse of a false statement.",
      "It cannot be decided without more information.",
    ],
    answer: 1,
  },
  {
    id: "tmua-5",
    type: "mcq",
    section: "Logic & Proof",
    prompt:
      "The negation of the statement 'For all real x, x² ≥ 0' is:",
    options: [
      "For all real x, x² < 0.",
      "There exists a real x such that x² < 0.",
      "There exists a real x such that x² ≥ 0.",
      "For all real x, x² ≤ 0.",
      "No real x satisfies x² ≥ 0.",
    ],
    answer: 1,
  },
  {
    id: "tmua-6",
    type: "mcq",
    section: "Applications of Knowledge",
    prompt:
      "A geometric series has first term 8 and common ratio 1/2. What is its sum to infinity?",
    options: ["12", "16", "8", "24", "The series diverges"],
    answer: 1,
  },
  {
    id: "tmua-7",
    type: "mcq",
    section: "Mathematical Reasoning",
    prompt:
      "The function f(x) = x³ − 3x has how many distinct real roots?",
    options: ["0", "1", "2", "3", "Cannot be determined"],
    answer: 3,
  },
  {
    id: "tmua-8",
    type: "mcq",
    section: "Logic & Proof",
    prompt:
      "'n is divisible by 6' is ______ condition for 'n is divisible by 3'.",
    options: [
      "a necessary but not sufficient",
      "a sufficient but not necessary",
      "a necessary and sufficient",
      "neither necessary nor sufficient",
      "an undefined",
    ],
    answer: 1,
  },
  {
    id: "tmua-9",
    type: "mcq",
    section: "Applications of Knowledge",
    prompt:
      "What is the coefficient of x² in the expansion of (1 + 2x)⁵?",
    options: ["10", "20", "40", "80", "5"],
    answer: 2,
  },
  {
    id: "tmua-10",
    type: "mcq",
    section: "Mathematical Reasoning",
    prompt:
      "If sin θ = 3/5 and θ is acute, what is the value of cos 2θ?",
    options: ["7/25", "-7/25", "24/25", "18/25", "1/5"],
    answer: 0,
  },
]

const TARA_QUESTIONS: Question[] = [
  {
    id: "tara-1",
    type: "mcq",
    section: "Problem Solving",
    prompt:
      "A train ticket costs £24. Booking 7 days ahead gives a 25% discount. Booking as a group of 4 gives a further 10% off the discounted price. What does each person pay in a group booking made a week ahead?",
    options: ["£16.20", "£18.00", "£15.00", "£16.00", "£14.40"],
    answer: 0,
  },
  {
    id: "tara-2",
    type: "mcq",
    section: "Critical Thinking",
    prompt:
      "'Our new textbook must be effective: since we adopted it, exam pass rates have risen.' Which is an assumption of this argument?",
    options: [
      "The textbook is expensive.",
      "Nothing else that could raise pass rates changed at the same time.",
      "Students prefer the new textbook.",
      "Pass rates were previously low.",
      "The textbook covers the whole syllabus.",
    ],
    answer: 1,
  },
  {
    id: "tara-3",
    type: "mcq",
    section: "Data & Reasoning",
    prompt:
      "A shop's sales were 200 units in January and rose by 20% in February, then fell by 20% in March. How many units were sold in March?",
    options: ["200", "192", "240", "180", "160"],
    answer: 1,
  },
  {
    id: "tara-4",
    type: "mcq",
    section: "Problem Solving",
    prompt:
      "Five friends sit in a row. Ada is not at either end. Ben is immediately to Ada's left. How many possible positions can Ben occupy?",
    options: ["1", "2", "3", "4", "5"],
    answer: 2,
  },
  {
    id: "tara-5",
    type: "mcq",
    section: "Critical Thinking",
    prompt:
      "Which of the following most strengthens the claim 'Cycling to work improves employee productivity'?",
    options: [
      "Cyclists report enjoying their commute.",
      "A controlled study found cyclists completed more tasks than matched non-cyclists.",
      "More people cycle in summer.",
      "Cycling is cheaper than driving.",
      "Employers encourage cycling.",
    ],
    answer: 1,
  },
  {
    id: "tara-6",
    type: "mcq",
    section: "Data & Reasoning",
    prompt:
      "A recipe for 3 people uses 450g of flour. How much flour is needed for 5 people, keeping proportions the same?",
    options: ["600g", "750g", "700g", "675g", "900g"],
    answer: 1,
  },
  {
    id: "tara-7",
    type: "mcq",
    section: "Problem Solving",
    prompt:
      "A clock loses 3 minutes every hour. If it is set correctly at 12:00, what time will it show when the true time is 16:00?",
    options: ["15:48", "15:52", "15:57", "15:45", "16:12"],
    answer: 0,
  },
  {
    id: "tara-8",
    type: "mcq",
    section: "Critical Thinking",
    prompt:
      "A report concludes that a diet works because '90% of people who followed it lost weight.' What key information is missing?",
    options: [
      "The cost of the diet.",
      "How much weight was lost, and what happened to those who did not follow it.",
      "Who funded the report.",
      "How long the diet lasts.",
      "Whether the food tastes good.",
    ],
    answer: 1,
  },
  {
    id: "tara-9",
    type: "mcq",
    section: "Data & Reasoning",
    prompt:
      "Four teams play each other once. How many matches are played in total?",
    options: ["4", "6", "8", "12", "10"],
    answer: 1,
  },
  {
    id: "tara-10",
    type: "mcq",
    section: "Problem Solving",
    prompt:
      "A tank fills in 6 hours through pipe A and 3 hours through pipe B. With both open, how long to fill it?",
    options: ["2 hours", "1.5 hours", "4.5 hours", "2.5 hours", "3 hours"],
    answer: 0,
  },
]

const ELAT_QUESTIONS: Question[] = [
  {
    id: "elat-1",
    type: "mcq",
    section: "Close Reading",
    passage:
      "The tide came in like an afterthought, unhurried, filling the print of every footstep until the beach forgot it had been walked on at all.",
    prompt:
      "The phrase 'until the beach forgot it had been walked on' primarily works to:",
    options: [
      "Establish the exact time of day.",
      "Suggest the erasing, indifferent quality of the natural world.",
      "Criticise people who walk on beaches.",
      "Introduce a named character.",
      "Describe the weather conditions.",
    ],
    answer: 1,
  },
  {
    id: "elat-2",
    type: "mcq",
    section: "Close Reading",
    passage:
      "He kept his father's watch in a drawer, wound but never worn — a small machine still counting time for no one.",
    prompt: "The detail of the watch being 'wound but never worn' chiefly conveys:",
    options: [
      "The narrator's interest in mechanics.",
      "A preserved grief that is tended but not lived with.",
      "The family's wealth.",
      "A dislike of the father.",
      "The passing of a single day.",
    ],
    answer: 1,
  },
  {
    id: "elat-3",
    type: "mcq",
    section: "Comparative Analysis",
    prompt:
      "When comparing two poems on 'home', the strongest comparative point would:",
    options: [
      "Note that both poems are about home.",
      "Show how each poem's form and imagery shape a different attitude to belonging.",
      "State which poem is longer.",
      "Summarise the plot of each in turn.",
      "Explain which poet is more famous.",
    ],
    answer: 1,
  },
  {
    id: "elat-essay",
    type: "essay",
    section: "Written Argument",
    passage:
      "You are given two short passages that both describe a departure — one a train leaving a rural station at dawn, the other a family closing up a summer house for the last time.",
    prompt:
      "Select two of the passages and compare and contrast the ways in which the writers present departure and leaving.",
    guidance:
      "Focus on how the writers achieve their effects — language, imagery, structure, tone and viewpoint — rather than only what the passages say. Build one controlled comparative argument. Aim for around 600 words in a real sitting.",
  },
]

export const QUESTIONS: Record<ExamId, Question[]> = {
  lnat: LNAT_QUESTIONS,
  tmua: TMUA_QUESTIONS,
  tara: TARA_QUESTIONS,
  elat: ELAT_QUESTIONS,
}
