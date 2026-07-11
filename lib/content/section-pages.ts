export type SectionPageSection = {
  heading: string
  content: string
}

export type SectionPageFaq = {
  question: string
  answer: string
}

export type SectionPage = {
  id: string
  slug: string
  title: string
  subtitle?: string
  description?: string
  intro: string
  bodySections: SectionPageSection[]
  faqs?: SectionPageFaq[]
  relatedExamIds?: string[]
}

export const SECTION_PAGES: SectionPage[] = [
  {
    id: "lnat-reading-comprehension",
    slug: "lnat-reading-comprehension",
    title: "LNAT Reading Comprehension",
    subtitle: "Making sense of dense argumentative passages under time pressure",
    description: "How to read LNAT Section A passages efficiently and accurately, and where most marks are lost.",
    intro:
      "Section A of the LNAT gives you 95 minutes to answer 42 multiple-choice questions spread across 12 passages, each followed by three or four questions. That works out to well under eight minutes per passage, including the questions — so reading comprehension here is less about understanding every sentence and more about extracting structure fast. Most candidates who underperform on Section A aren't struggling with vocabulary or ideas; they're reading passages the way they'd read for pleasure or for an English essay, rather than the way the test actually rewards.",
    bodySections: [
      {
        heading: "What LNAT passages actually look like",
        content:
          "LNAT passages are typically 400–700 words long, drawn from broadsheet journalism, academic writing, essays, and policy commentary on topics spanning law, ethics, science, politics, and culture. You don't need subject knowledge going in — every question is answerable from the passage alone, and the test setters deliberately avoid rewarding prior expertise. What the passages have in common is that they're argumentative: someone is trying to persuade you of something, using evidence, examples, and reasoning steps along the way. Your job as a reader is to track the shape of that argument, not just absorb its content."
      },
      {
        heading: "Read for structure, not detail",
        content:
          "Before you look at the questions, do a fast first pass aimed at answering three questions: what is the author's main claim, what reasons or evidence are they using to support it, and where (if anywhere) do they acknowledge a counterargument. Underline or mentally flag the conclusion — it can appear at the start, the end, or buried in the middle. Many LNAT questions hinge on this structural map rather than on isolated facts, so building it first means you're not re-reading the whole passage for every question that follows."
      },
      {
        heading: "Common comprehension traps",
        content:
          "The test setters build in answer options that are true according to the passage but don't actually answer the question asked, and others that sound plausible but go beyond what the passage states. A frequent trap is the answer that's a stronger or broader claim than the author actually makes — the passage might say a policy 'often' fails, and a wrong answer will claim it 'always' fails. Train yourself to check each option against the precise wording of the passage, not against what feels like a reasonable inference from the general topic."
      },
      {
        heading: "Building speed without losing accuracy",
        content:
          "Speed on Section A comes from practice with real texts, not from skimming tricks. Reading opinion journalism from sources like the Guardian, the Economist, or the Financial Times for 20–30 minutes a day, actively asking yourself what the writer's conclusion is and how they get there, builds the same muscle the LNAT tests. When you sit practice papers, time yourself passage by passage rather than only checking your overall score — this shows you exactly where you're losing time, whether that's the initial read or deliberating between two close answer options."
      }
    ],
    faqs: [
      {
        question: "Do I need background knowledge of law or current affairs for LNAT reading comprehension?",
        answer:
          "No. Every answer is derivable from the passage itself, and the LNAT is explicitly not a test of legal or subject knowledge. General reading habits help with pace and comfort with argumentative prose, but they won't substitute for careful reading on the day."
      },
      {
        question: "How many times should I read each passage?",
        answer:
          "Most strong candidates do one full read to map the argument, then return to specific sections when a question requires it, rather than rereading the whole passage for each question. Full rereads for every question are usually what causes candidates to run out of time."
      },
      {
        question: "Is it worth guessing if I run out of time?",
        answer:
          "Yes — there's no negative marking on Section A, so an unanswered question and a wrong answer cost you the same. Always leave time to fill in a guess for anything you haven't reached."
      }
    ],
    relatedExamIds: ["lnat"]
  },
  {
    id: "lnat-critical-thinking",
    slug: "lnat-critical-thinking",
    title: "LNAT Critical Thinking & Argument Identification",
    subtitle: "Spotting conclusions, premises, and the gaps between them",
    description: "A guide to identifying arguments, conclusions, and reasoning structure in LNAT passages.",
    intro:
      "A large share of LNAT Section A questions don't ask what a passage says — they ask what it argues. That distinction matters. A passage might contain several true statements, statistics, and examples, but only one of them is doing the job of a conclusion, and the rest are there to support it. Critical thinking questions test whether you can separate that scaffolding from the claim it's holding up, and whether you can judge how well the scaffolding actually works.",
    bodySections: [
      {
        heading: "Premises, conclusions, and assumptions",
        content:
          "An argument in the LNAT sense is a set of reasons (premises) offered in support of a claim (the conclusion). Questions will often ask you to identify the main conclusion, which is not always the final sentence — writers frequently state their conclusion early and spend the rest of the passage defending it. A related question type asks you to spot an assumption: something the argument needs to be true but never actually states. If an author argues that a new law will reduce crime because a similar law worked in another country, they're assuming the two contexts are comparable — that unstated link is the assumption."
      },
      {
        heading: "Strengthening and weakening questions",
        content:
          "These ask which additional piece of information would most support or most undermine the argument as it stands. The key skill is checking each option against the argument's actual logical structure, not against the general topic. An option can be relevant to the subject matter and still not weaken the argument, because it doesn't touch the specific link between the premises and the conclusion. Practice by asking, for each option, 'does this affect whether the reasons actually support the conclusion?' rather than 'is this related to the topic?'"
      },
      {
        heading: "Distinguishing argument from mere assertion",
        content:
          "Not every passage-like paragraph is a tightly reasoned argument — some are descriptive, some are a list of opinions with no supporting logic. Being able to tell the difference matters because questions about 'the main conclusion' assume there is a genuine argument to find. When a passage instead offers a string of loosely connected observations, the correct answer is often the option that most cautiously reflects what's actually claimed, rather than the most dramatic-sounding one."
      },
      {
        heading: "Practising the skill outside test conditions",
        content:
          "Editorial and opinion writing is good raw material because it's built almost entirely from arguments. Take a short op-ed and try to write, in one sentence, its main conclusion, then list the two or three reasons it offers. Doing this regularly — even without timed multiple-choice questions attached — builds the pattern recognition that LNAT critical thinking rewards, and it transfers directly to the essay section too."
      }
    ],
    faqs: [
      {
        question: "What's the difference between LNAT critical thinking and LNAT logical reasoning?",
        answer:
          "Critical thinking questions focus on evaluating arguments as they're actually presented in natural language — conclusions, assumptions, and how strong the support is. Logical reasoning questions lean more on strict deductive relationships, such as what necessarily follows from a set of statements, regardless of how persuasive they are."
      },
      {
        question: "Can the conclusion of a passage be a question rather than a statement?",
        answer:
          "The conclusion itself is always a claim the author wants you to accept, but it can be introduced indirectly. Watch for signal words like 'therefore', 'so', 'it follows that', and also be alert to conclusions that appear with no signal word at all."
      }
    ],
    relatedExamIds: ["lnat"]
  },
  {
    id: "lnat-logical-reasoning",
    slug: "lnat-logical-reasoning",
    title: "LNAT Logical Reasoning",
    subtitle: "Deduction, validity, and what actually follows from a passage",
    description: "How to handle LNAT questions that test strict logical relationships rather than persuasive strength.",
    intro:
      "Some LNAT Section A questions aren't asking whether an argument is convincing — they're asking what can be validly deduced from the information given, full stop. These questions reward precision over instinct. A statement can feel true, feel consistent with the passage's spirit, or feel like a reasonable extension of the author's point, and still be wrong, because it isn't actually supported by what's written.",
    bodySections: [
      {
        heading: "What 'follows logically' really means",
        content:
          "If a question asks what can be concluded from a passage, the correct answer must be a statement that is guaranteed by the information given — not merely likely, not merely compatible with it. Wrong options in this category typically require an extra step of assumption that the passage doesn't licence. A passage stating that 'most experts in the field disagree with the policy' does not logically support the conclusion that 'the policy is wrong' — that requires accepting expert consensus as proof, which is a further, unstated step."
      },
      {
        heading: "Necessary versus sufficient conditions",
        content:
          "LNAT reasoning questions sometimes turn on conditional statements — 'if X then Y' constructions. A common trap is confusing a necessary condition with a sufficient one. If the passage says a defendant must show evidence of intent to be convicted (intent is necessary), that doesn't mean evidence of intent guarantees conviction (intent isn't sufficient). Reading conditional sentences slowly and asking 'does this go one way, or both ways?' avoids a large share of the errors candidates make under time pressure."
      },
      {
        heading: "Working through elimination",
        content:
          "With four answer options and no negative marking, elimination is often faster and safer than trying to reason your way directly to the correct answer. Rule out options that introduce information not present in the passage, options that reverse the direction of a conditional, and options that are simply too strong (using words like 'always', 'never', 'proves') when the passage only supports a more limited claim. Usually two options can be eliminated quickly, leaving a genuine choice between the last two, which is where careful rereading of the relevant sentence pays off."
      }
    ],
    faqs: [
      {
        question: "Do I need formal logic training for this section?",
        answer:
          "No formal training in logic is assumed or required. The skills tested are the same ones used in careful, precise reading — the test rewards candidates who resist jumping to plausible-sounding conclusions rather than those who know formal logical notation."
      },
      {
        question: "How is this different from critical thinking questions in the same section?",
        answer:
          "Logical reasoning questions tend to hinge on a single precise relationship — a conditional, a quantifier like 'some' or 'all', or a direct implication — whereas critical thinking questions ask you to judge the overall strength of an argument's support for its conclusion."
      },
      {
        question: "Is it worth learning symbolic logic (like if-then truth tables) for LNAT?",
        answer:
          "It can help some candidates think more precisely about conditionals, but it isn't necessary. Most improvement comes from slowing down on conditional and quantified sentences during practice, rather than learning notation you won't use directly in the test."
      }
    ],
    relatedExamIds: ["lnat"]
  },
  {
    id: "lnat-essay-writing-guide",
    slug: "lnat-essay-writing-guide",
    title: "LNAT Essay Writing Guide",
    subtitle: "Structuring a persuasive 500–600 word argument in 40 minutes",
    description: "A practical approach to planning and writing the LNAT Section B essay under real time constraints.",
    intro:
      "Section B gives you three essay questions, of which you answer one, in 40 minutes. The LNAT doesn't score the essay itself — it's sent unmarked to the universities you've applied to, who assess it by their own criteria — but that doesn't lower the stakes. Admissions tutors read it precisely because it shows something the multiple-choice section can't: how you construct an argument from a blank page, under pressure, without a passage to lean on.",
    bodySections: [
      {
        heading: "Choosing your question",
        content:
          "The three prompts are usually broad, debatable questions on ethical, political, or social themes — you won't be tested on legal knowledge. Spend two or three minutes genuinely comparing the options rather than grabbing the first familiar-sounding one. The best choice is usually the question where you can immediately think of a clear position and at least two independent lines of reasoning for it, not necessarily the one that feels most interesting."
      },
      {
        heading: "Planning before you write",
        content:
          "With only 40 minutes, it's tempting to skip planning, but five minutes spent outlining saves far more time in drafting. Decide your central argument in one sentence, then list two or three supporting points, and — importantly — one serious counterargument you'll need to address. An essay that never acknowledges an opposing view tends to read as one-sided rather than reasoned, which is exactly what LNAT essays are meant to demonstrate you can avoid."
      },
      {
        heading: "Structure that holds up under time pressure",
        content:
          "A reliable shape is: a short introduction that states your position clearly, two or three body paragraphs each built around one point with its own reasoning, a paragraph that takes the counterargument seriously before explaining why your position still holds, and a brief conclusion. Aim for 500–600 words — the recommended range — rather than pushing toward the 750-word maximum; a tightly argued shorter essay reads better than a rushed longer one with weaker reasoning in its final third."
      },
      {
        heading: "Style: argumentative, not just opinionated",
        content:
          "The strongest LNAT essays are built from reasons and evidence, not just assertions of belief. Every claim should be followed by a 'because' — a reason, example, or logical consequence that supports it. Avoid vague generalisations and unfalsifiable claims ('everyone knows that...'), and avoid hedging so much that you never actually commit to a position. Markers are looking for someone willing to argue a case and defend it, which is also, not coincidentally, what legal argument requires."
      }
    ],
    faqs: [
      {
        question: "Does the essay affect my LNAT score?",
        answer:
          "No — your LNAT score, out of 42, comes entirely from Section A. The essay is sent to your chosen universities as raw text for them to assess separately, and its influence depends on each university's own admissions process."
      },
      {
        question: "Should I use real legal examples if I don't have a strong background in law?",
        answer:
          "You don't need to. Examples from history, current affairs, or everyday reasoning are equally valid — what matters is that your example genuinely supports the point you're making, not where it comes from."
      },
      {
        question: "Can I go over 750 words?",
        answer:
          "The system enforces a recommended maximum of 750 words and shows a running word count, so plan your paragraphs with that ceiling in mind. Going noticeably over the guidance suggests weaker planning rather than more thorough argument."
      }
    ],
    relatedExamIds: ["lnat"]
  },
  {
    id: "lnat-essay-prompt-bank",
    slug: "lnat-essay-prompt-bank",
    title: "LNAT Essay Prompt Bank",
    subtitle: "Practice questions in the style of the real Section B essay",
    description: "A set of practice essay prompts covering the ethical, political, and social themes LNAT essays typically draw on.",
    intro:
      "Real LNAT essay questions are broad and debatable, deliberately avoiding any requirement for legal knowledge. The prompts below are written in that same style, grouped loosely by theme, so you can build a practice routine that covers the range of topics you're likely to see — from technology and free speech to justice and public policy. Use a strict 40-minute clock when you practise; the discipline of finishing under real time pressure matters as much as the quality of any single essay.",
    bodySections: [
      {
        heading: "Ethics and individual rights",
        content:
          "Should parents be allowed to choose the genetic characteristics of their children? Is it ever justifiable to break the law for a moral cause? Does a right to privacy still make sense in an age of pervasive data collection? These prompts test whether you can weigh competing values — autonomy against harm, individual freedom against collective interest — without collapsing into a simple 'it depends' that never commits to a position."
      },
      {
        heading: "Technology and society",
        content:
          "Should social media companies be held legally responsible for harmful content posted by users? Is the use of facial recognition technology by police a justified trade-off for public safety? Will artificial intelligence do more to reduce inequality or increase it? These questions reward candidates who can reason about second-order effects — not just whether a technology is useful, but who benefits, who bears the risk, and how incentives might shift behaviour over time."
      },
      {
        heading: "Justice, punishment, and the state",
        content:
          "Should prison sentences focus on rehabilitation rather than punishment? Is it fair for juries to remain anonymous to the public? Should voting be made compulsory? Topics in this cluster connect closely to the reasoning skills tested in Section A, so practising them also sharpens your ability to spot assumptions and weigh evidence when you return to multiple-choice practice."
      },
      {
        heading: "Using this bank effectively",
        content:
          "Don't just write full essays every time — sometimes spend ten minutes on three prompts, writing only a one-sentence thesis and a bullet-point plan for each. This builds the fast decision-making the real test demands, since choosing well between three questions is itself a timed skill. Save full 40-minute attempts for once or twice a week, and get feedback from a teacher or tutor where possible, since self-assessment tends to miss structural weaknesses."
      }
    ],
    faqs: [
      {
        question: "Are these the actual LNAT essay questions?",
        answer:
          "No — these are original practice prompts written in the same style and difficulty range as real LNAT Section B questions, covering the kinds of ethical, political, and social themes the test typically draws on."
      },
      {
        question: "How many practice essays should I write before the real test?",
        answer:
          "There's no fixed number, but working through six to ten timed practice essays across different themes, with feedback on at least a few of them, is usually enough to build confidence with the format without over-preparing."
      }
    ],
    relatedExamIds: ["lnat"]
  },
  {
    id: "lnat-essay-marking-criteria",
    slug: "lnat-essay-marking-criteria",
    title: "LNAT Essay Marking Criteria",
    subtitle: "What universities are actually looking for in Section B",
    description: "An overview of how LNAT essays are used and assessed by admissions tutors, since the LNAT itself does not score them.",
    intro:
      "It surprises many candidates to learn that the LNAT organisation doesn't mark Section B at all. Your essay is sent, exactly as written, to every university you've applied to that requires the LNAT, and each admissions team assesses it according to their own internal criteria. There's no single official mark scheme — but across universities, certain qualities consistently separate strong essays from weak ones, and understanding them helps you write with the right priorities in mind.",
    bodySections: [
      {
        heading: "Clarity of position",
        content:
          "Admissions tutors are reading dozens or hundreds of essays, often quickly. An essay whose central argument is clear from the first paragraph is easier to credit than one where the position only emerges in the conclusion. This doesn't mean your argument has to be simple — it means the reader should never be unsure, at any point, what you're arguing and why."
      },
      {
        heading: "Quality of reasoning over quantity of points",
        content:
          "Three well-developed points, each explained with a reason and an example, consistently read better than five or six points listed without development. Tutors are assessing your capacity for sustained argument — the kind required in legal writing and tutorial discussion — rather than your ability to brainstorm a long list of considerations."
      },
      {
        heading: "Engagement with counterarguments",
        content:
          "Essays that acknowledge and respond to the strongest opposing view tend to score better than essays that only present one side. This isn't about hedging your position into vagueness; it's about demonstrating that you've considered why a reasonable person might disagree, and that your position survives that scrutiny."
      },
      {
        heading: "Written expression under pressure",
        content:
          "Because the essay is unedited and produced in 40 minutes, tutors read it with that context in mind — minor slips are expected and not heavily penalised. What stands out negatively is structural confusion (paragraphs that don't connect to a clear line of argument) and writing that's vague or generalised rather than specific. What stands out positively is control: a piece that reads as though it was planned, even briefly, before it was written."
      }
    ],
    faqs: [
      {
        question: "If there's no official mark scheme, how much does the essay really matter?",
        answer:
          "It varies by university — some use it as a significant factor in shortlisting decisions, others treat it as a secondary check alongside the personal statement, and a few give it comparatively little weight. It's worth checking each university's own guidance where they publish it, but treating the essay seriously is the safest approach regardless."
      },
      {
        question: "Should I write differently depending on which university will read the essay?",
        answer:
          "No — the same essay is sent to every university you've applied to that requires the LNAT, so you should write to a consistently high standard rather than trying to anticipate any single institution's preferences."
      },
      {
        question: "Does handwriting or typing speed affect how the essay is judged?",
        answer:
          "The LNAT is entirely computer-based and typed, so handwriting isn't a factor. Typing speed matters practically, since a slow typist has less time to plan and revise within the 40 minutes, which is worth factoring into your practice."
      }
    ],
    relatedExamIds: ["lnat"]
  },
  {
    id: "tara-critical-thinking",
    slug: "tara-critical-thinking",
    title: "TARA Critical Thinking Module",
    subtitle: "Reasoning with everyday written arguments across 22 questions in 40 minutes",
    description: "How the TARA Critical Thinking module is structured and the seven question types it draws on.",
    intro:
      "The TARA's first module, Critical Thinking, gives you 40 minutes for 22 multiple-choice questions, each with five answer options. It's a new test — introduced for UCL from 2026 entry, and adopted by Oxford from 2027 entry for a defined set of courses — but the skill it tests is a familiar one: evaluating arguments made in ordinary written language, the kind you'd find in a newspaper column or a policy report, not formal logical notation.",
    bodySections: [
      {
        heading: "How TARA defines an argument",
        content:
          "In the TARA's own framing, an argument consists of reasons put forward as grounds for a conclusion, and for the purposes of the test you're asked to treat any stated reasons as true — your job is to judge whether the conclusion actually follows from them, not to fact-check the premises themselves. This matters: a common mistake is disputing a premise you happen to disagree with, when the question is really about the logical link between premise and conclusion."
      },
      {
        heading: "The seven question types",
        content:
          "TARA's published guidance describes seven recurring Critical Thinking question types, including identifying the main conclusion, drawing a conclusion that isn't explicitly stated but follows from the passage, identifying an assumption the argument depends on, and finding a parallel argument with the same underlying structure but different content. Recognising which type you're facing early — often signalled by the question's exact wording — tells you what kind of reading to do before you even look at the options."
      },
      {
        heading: "Conclusions aren't always where you expect them",
        content:
          "As with similar tests, the conclusion of a TARA passage can appear anywhere — introduced by words like 'so' or 'therefore', or with no signal word at all. Reading the whole short passage once before committing to an answer, rather than scanning for the first claim that sounds like a conclusion, avoids a common source of errors, particularly in 'identify the main conclusion' questions where a supporting reason can be mistaken for the conclusion itself."
      },
      {
        heading: "Preparing without official past papers",
        content:
          "Because TARA is newly introduced, there isn't yet a deep archive of official past papers. Older critical thinking tests such as the TSA (Thinking Skills Assessment) and the critical reasoning sections of the LNAT test closely related skills — spotting conclusions, assumptions, and flawed reasoning — and make good supplementary practice, alongside the specimen material and content specification published directly by UAT-UK."
      }
    ],
    faqs: [
      {
        question: "Do I lose marks for wrong answers in TARA Critical Thinking?",
        answer:
          "No — there's no penalty for incorrect answers, so you should attempt every question rather than leaving any blank, especially with five options per question rather than four."
      },
      {
        question: "How is my Critical Thinking score reported?",
        answer:
          "It's scored on a scale from 1 (low) to 9 (high), reported to one decimal place, separately from your Problem Solving score. There's no combined overall TARA score across the two multiple-choice modules."
      },
      {
        question: "Which universities currently use TARA?",
        answer:
          "UCL uses it for a range of courses from 2026 entry, and Oxford will use it from 2027 entry for Economics, History, Human Sciences, PPE, and Psychology. Always check the specific course page, since requirements vary by subject and can change between cycles."
      }
    ],
    relatedExamIds: ["tara"]
  },
  {
    id: "tara-problem-solving",
    slug: "tara-problem-solving",
    title: "TARA Problem Solving Module",
    subtitle: "Tackling unfamiliar problems with basic mathematical skills",
    description: "What the TARA Problem Solving module tests and the three core skills it draws on.",
    intro:
      "The second TARA module, Problem Solving, mirrors the Critical Thinking module in format — 22 multiple-choice questions, five options each, 40 minutes — but shifts the terrain from verbal argument to numerical and logical reasoning. It assumes only basic mathematical knowledge; the challenge isn't advanced content, it's applying simple tools to problems you haven't practised before.",
    bodySections: [
      {
        heading: "Why it isn't really a maths test",
        content:
          "TARA's own guidance is explicit that Problem Solving assesses insight into unfamiliar problems, not mathematical knowledge for its own sake. The maths involved — arithmetic, basic proportion, reading data from charts and tables — sits well within GCSE level. What's actually being tested is whether you can figure out which tool applies to a problem you haven't seen a template for before, since real academic and professional problems rarely arrive as a recognisable template."
      },
      {
        heading: "Relevant selection",
        content:
          "Many TARA problems present more information than you need, mimicking real-world data where some numbers or facts are irrelevant to the question asked. The skill here is quickly identifying which figures actually matter and setting the rest aside, rather than trying to use every piece of information provided just because it's there."
      },
      {
        heading: "Finding procedures and identifying similarity",
        content:
          "Beyond relevant selection, TARA describes two further categories: finding procedures, where you need to work out a method or sequence of steps to reach a solution that isn't given to you directly, and identifying similarity, where you're asked to recognise that a new problem shares the same underlying structure as a simpler, more familiar one. Practising by explicitly naming which of these three skills a question is testing helps you approach it with the right strategy rather than guessing at a method."
      },
      {
        heading: "Working without a calculator",
        content:
          "No calculator is permitted in the TARA. This isn't a huge obstacle given the modest arithmetic demands, but it does mean building comfort with mental calculation, fractions, and percentages under time pressure. Practising the specimen questions using only pen and paper, exactly as the real test requires, is more useful preparation than working through harder maths problems with a calculator to hand."
      }
    ],
    faqs: [
      {
        question: "What level of maths do I need for TARA Problem Solving?",
        answer:
          "The module assumes basic mathematical knowledge and skills, broadly at GCSE level, as set out in UAT-UK's published content specification. It does not require A-level mathematics content."
      },
      {
        question: "Can I use a calculator?",
        answer:
          "No — calculators are not permitted in any part of the TARA, including the Problem Solving module."
      },
      {
        question: "Is Problem Solving scored the same way as Critical Thinking?",
        answer:
          "Yes — it's scored separately on the same 1 to 9 scale, reported to one decimal place, with no penalty for incorrect answers."
      }
    ],
    relatedExamIds: ["tara"]
  },
  {
    id: "tara-written-response-guide",
    slug: "tara-written-response-guide",
    title: "TARA Written Response Guide",
    subtitle: "Approaching the 40-minute Writing Task",
    description: "How to plan and write the TARA Writing Task, the unscored module sent directly to universities.",
    intro:
      "The TARA's third and final module is the Writing Task: 40 minutes, three prompts offered, one to be answered, with a limit of 750 words. Like the LNAT essay, it isn't scored by the test provider — UAT-UK sends your response directly to the universities requiring TARA, who assess it as part of their own admissions process. But unlike the LNAT, TARA writing prompts often ask you to do something more specific than simply argue a position.",
    bodySections: [
      {
        heading: "The typical prompt structure",
        content:
          "TARA Writing Task questions commonly present a short statement and ask you to do three things: explain what you understand the statement to mean, give a reasoned argument against it, and discuss the extent to which you agree with it overall. This is a more structured brief than a typical LNAT-style 'discuss' essay, and missing one of the three components — especially the explanation step — is a common way candidates lose marks in the eyes of admissions readers, even though there's no formal deduction from UAT-UK."
      },
      {
        heading: "Interpreting the statement carefully",
        content:
          "Because you're asked to explain what a short statement means before arguing about it, precision matters from the first sentence. Avoid restating the statement in slightly different words and calling that an explanation — instead, unpack its assumptions, its scope, and any ambiguity in its key terms. This opening section sets up the rest of your response, so rushing it tends to weaken everything that follows."
      },
      {
        heading: "Building the counterargument section",
        content:
          "The instruction to 'give a reasoned argument against' the statement is doing real work — it's testing whether you can construct a case you may not personally hold, with the same rigour as one you do. Treat this as a discipline exercise: find the strongest version of the opposing case, not a weak one that's easy to dismiss later, since a strong counterargument makes your eventual position (in the 'extent to which you agree' section) more convincing, not less."
      },
      {
        heading: "Managing 750 words in 40 minutes",
        content:
          "With three distinct tasks packed into one response, planning time matters even more than in a single-thesis essay. A rough allocation — a few minutes to plan, then roughly a third of your word count on explanation, a third on the counterargument, and the remainder on your considered judgement — keeps the response balanced rather than front-loaded, which is a common issue when candidates spend too long on the explanation and rush the final evaluative section."
      }
    ],
    faqs: [
      {
        question: "Is the TARA Writing Task scored?",
        answer:
          "No — it isn't scored by UAT-UK. Your response is sent as written directly to the universities you've applied to that require TARA, for them to assess according to their own criteria."
      },
      {
        question: "Do I need to answer all three parts of the prompt (explain, argue against, discuss extent)?",
        answer:
          "The prompt format typically asks for all three, and admissions tutors reading your response will expect to see each addressed, even though there's no official mark scheme penalising a missed section directly."
      },
      {
        question: "Can I choose any of the three writing prompts offered?",
        answer:
          "Yes — you select one of the three provided prompts to answer; there's no requirement to answer a particular one, and you should choose based on which statement you can explain and argue about most precisely, not just which topic interests you most."
      }
    ],
    relatedExamIds: ["tara"]
  },
  {
    id: "tara-sample-written-responses",
    slug: "tara-sample-written-responses",
    title: "TARA Sample Written Responses",
    subtitle: "Worked examples showing strong structure under the 40-minute limit",
    description: "Annotated approaches to TARA-style Writing Task prompts, showing how to structure the explain–argue–evaluate format.",
    intro:
      "Because TARA is a new test, there's no large public archive of real candidate scripts to study. What's more useful at this stage is working through the structure that strong responses tend to share, prompt by prompt, so you can build your own practice material with confidence rather than trying to memorise a single model answer.",
    bodySections: [
      {
        heading: "Sample prompt: a statement about competition",
        content:
          "Take a statement like: 'Competition always brings out the best in people.' A strong opening explains the claim precisely — noting that it's making a universal claim ('always'), and that 'the best' likely refers to effort, performance, or character, which are three different things worth distinguishing. This kind of unpacking, done in three or four sentences, shows the reader you're thinking carefully about the statement's exact scope before you start arguing."
      },
      {
        heading: "Building the case against it",
        content:
          "For the same prompt, a reasoned argument against might draw on examples where competition produces shortcuts, dishonesty, or burnout rather than genuine improvement — a student who copies coursework to beat a rival, or an athlete who uses banned substances. The key move is connecting each example back to the word 'always' in the original statement: one clear counterexample is sufficient to show a universal claim doesn't hold, even if competition often does have positive effects."
      },
      {
        heading: "Reaching a considered judgement",
        content:
          "The final section shouldn't simply restate that you agree or disagree — it should weigh the explanation and counterargument you've just built and draw a proportionate conclusion. A strong response here might argue that competition frequently brings out effort and performance, but not reliably 'the best' in a moral sense, and that the original statement would be more defensible if qualified rather than absolute. This kind of nuanced closing, grounded in what's already been argued, tends to read as more credible than a flat restatement of agreement or disagreement."
      },
      {
        heading: "Turning this into practice material",
        content:
          "Take any short, debatable statement — about ambition, tradition, technology, fairness, or education — and run it through the same three-part structure under a 40-minute clock. Reviewing your own drafts against the pattern above, checking whether each of the three sections is doing distinct work rather than repeating the others, is one of the most effective ways to prepare given the current lack of official past papers."
      }
    ],
    faqs: [
      {
        question: "Are official TARA Writing Task past papers available?",
        answer:
          "As a newly introduced test, TARA doesn't yet have a large archive of official past papers. UAT-UK publishes specimen material and a content specification, which are the most reliable sources to practise from."
      },
      {
        question: "Should I aim to fully agree or disagree with the statement in my conclusion?",
        answer:
          "Not necessarily — a well-reasoned partial agreement, with clear qualification, is often stronger than an absolute stance, provided it's supported by the explanation and counterargument you've already developed."
      }
    ],
    relatedExamIds: ["tara"]
  },
  {
    id: "tmua-applications-of-mathematical-knowledge",
    slug: "tmua-applications-of-mathematical-knowledge",
    title: "TMUA Paper 1: Applications of Mathematical Knowledge",
    subtitle: "20 questions, 75 minutes, no calculator — applying familiar maths in unfamiliar ways",
    description: "What TMUA Paper 1 tests, the content it draws on, and how it differs from standard A-level exam questions.",
    intro:
      "TMUA Paper 1 gives you 75 minutes for 20 multiple-choice questions, drawing on mathematical content that's mostly covered within an AS-level pure mathematics specification. The content itself won't be unfamiliar to a strong A-level mathematician — what's different is the style of question. Paper 1 disguises standard techniques inside unusual framings, rewarding candidates who can quickly recognise which familiar method actually applies.",
    bodySections: [
      {
        heading: "Content without a formulae booklet",
        content:
          "No formulae sheet is provided in the TMUA, and no calculator is allowed, so questions are designed to be solvable through reasoning and recall rather than heavy computation. This means fluency with core results — trigonometric identities, the laws of indices, standard differentiation and integration rules — needs to be automatic, not something you're deriving from scratch under time pressure. Roughly three and three-quarter minutes per question is the average pace, which leaves little room for uncertainty about basic recall."
      },
      {
        heading: "Why it feels different from A-level papers",
        content:
          "A-level questions tend to signal their method — a question in a 'differentiation' section is asking you to differentiate. TMUA Paper 1 questions are typically presented without that context, framed as a problem to solve rather than a technique to apply, so part of the challenge is identifying which area of maths is even relevant before you begin calculating. Recognising a disguised standard problem quickly is a skill in its own right, separate from mathematical ability, and it's one that improves substantially with targeted practice."
      },
      {
        heading: "Strategic use of the multiple-choice format",
        content:
          "Because every question offers a fixed set of answer options, working backwards from those options — substituting them into the problem, or using them to eliminate implausible answers — is often faster than solving the problem in full from first principles. This isn't a substitute for mathematical understanding, but it's a legitimate and often necessary time-saving strategy given the pace the paper demands."
      },
      {
        heading: "Where marks are typically lost",
        content:
          "Candidates who are mathematically capable often lose marks on Paper 1 not through lack of knowledge but through slow recognition — spending two minutes working out what a question is really asking before starting the actual maths. Timed practice specifically aimed at reducing this recognition time, rather than more general maths revision, tends to produce the biggest score improvements in the run-up to the test."
      }
    ],
    faqs: [
      {
        question: "What level of maths does TMUA Paper 1 require?",
        answer:
          "The content is drawn almost entirely from an AS-level pure mathematics specification, so a strong grasp of first-year A-level maths content is the right foundation, without needing further study beyond that specification."
      },
      {
        question: "Is a calculator allowed for Paper 1?",
        answer:
          "No — calculators are not permitted for either TMUA paper, and no formulae booklet is provided, so all working must be done by hand from memory."
      },
      {
        question: "How is Paper 1 scored?",
        answer:
          "Both TMUA papers are scored on a scale from 1.0 to 9.0 in steps of 0.1. Each of the 20 questions on Paper 1 carries equal weight, and there's no penalty for incorrect answers, so every question should be attempted."
      }
    ],
    relatedExamIds: ["tmua"]
  },
  {
    id: "tmua-mathematical-reasoning",
    slug: "tmua-mathematical-reasoning",
    title: "TMUA Paper 2: Mathematical Reasoning",
    subtitle: "Logic, proof, and finding the flaw — a different skill from Paper 1",
    description: "How TMUA Paper 2 tests formal mathematical reasoning and why it demands a different approach to Paper 1.",
    intro:
      "TMUA Paper 2 shares its format with Paper 1 — 75 minutes, 20 multiple-choice questions, no calculator — but tests a genuinely different skill: mathematical reasoning and proof, rather than computational problem-solving. Many strong A-level mathematicians find Paper 2 harder than Paper 1 at first, precisely because formal logic and proof technique receive relatively little dedicated attention in standard A-level teaching.",
    bodySections: [
      {
        heading: "The logical toolkit Paper 2 assumes",
        content:
          "Paper 2 draws on concepts that sit adjacent to, rather than inside, the standard A-level syllabus: understanding and using the terms 'necessary' and 'sufficient', reasoning with quantifiers like 'for all' and 'for some', negating statements that use these terms correctly, and disproof by counterexample. None of this requires advanced mathematics — it requires a precise, rule-governed way of thinking about statements that many candidates haven't practised before encountering the TMUA."
      },
      {
        heading: "Finding the flaw in a proof",
        content:
          "A distinctive TMUA Paper 2 question type presents a purported proof and asks you to identify where — if anywhere — it goes wrong. This tests something different from constructing your own proof: it requires reading someone else's reasoning sceptically, line by line, checking that each step genuinely follows from the last rather than assuming it does because the overall conclusion sounds correct. Treating every line of a proof as a claim to be verified, rather than accepting the proof's own confident tone, is the core discipline here."
      },
      {
        heading: "Negation and quantifiers",
        content:
          "Correctly negating a statement that uses 'for all' or 'for some' is a frequent stumbling block. The negation of 'for all x, P(x) is true' is not 'for all x, P(x) is false' — it's 'there exists at least one x for which P(x) is false'. Getting this distinction automatic, through deliberate practice rather than intuition, prevents a specific and recurring category of error on Paper 2."
      },
      {
        heading: "A different preparation strategy from Paper 1",
        content:
          "Because Paper 1 and Paper 2 reward different habits — computational speed and pattern recognition versus careful, sceptical logical reading — treating TMUA preparation as one undifferentiated block of 'maths revision' tends to under-serve Paper 2. Working specifically through UAT-UK's published notes on logic and proof, and practising counterexample-hunting and flaw-spotting as their own skills, closes this gap faster than simply doing more general maths problems."
      }
    ],
    faqs: [
      {
        question: "Is Paper 2 harder than Paper 1?",
        answer:
          "Many candidates find it harder initially, mainly because formal logic and proof aren't heavily emphasised at A-level, but this is exactly why targeted practice on Paper 2's specific reasoning skills tends to produce noticeable improvement relatively quickly."
      },
      {
        question: "Does Paper 2 require more advanced maths content than Paper 1?",
        answer:
          "No — it draws on similar underlying mathematical content, but applies it through formal reasoning and proof rather than direct calculation, so the challenge is logical rather than purely computational."
      },
      {
        question: "Do Paper 1 and Paper 2 count equally toward my TMUA result?",
        answer:
          "Yes — both papers carry equal weight and are reported on the same 1.0 to 9.0 scale, so a weak Paper 2 performance can meaningfully pull down an otherwise strong overall result."
      }
    ],
    relatedExamIds: ["tmua"]
  },
  {
    id: "tmua-multiple-choice-strategy-guide",
    slug: "tmua-multiple-choice-strategy-guide",
    title: "TMUA Multiple-Choice Strategy Guide",
    subtitle: "Time management and answer-selection tactics across both papers",
    description: "Practical strategy for managing the TMUA's 40 questions across two 75-minute papers under exam conditions.",
    intro:
      "With two 75-minute papers, 20 questions each, and no calculator or formula sheet, the TMUA rewards more than mathematical knowledge — it rewards good exam management. Since every question carries equal weight and there's no penalty for wrong answers, how you allocate your limited time across 20 questions per paper is itself a decision with a real effect on your final score.",
    bodySections: [
      {
        heading: "A first pass before committing to any one question",
        content:
          "TMUA questions don't appear in strict difficulty order the way some school exams do, so spending your first few minutes scanning the whole paper and tackling the questions you find most approachable first is generally more effective than working strictly in order. Getting easier marks secured early protects you from a scenario where you spend ten minutes stuck on question three and never reach questions you could have answered easily near the end."
      },
      {
        heading: "Using the answer options strategically",
        content:
          "Because every question is multiple-choice, you don't always need to solve a problem the way you would in a written exam. Testing answer options directly against the problem, or eliminating options that are clearly out of a sensible range, can be faster than full algebraic working — particularly useful under the roughly 3–4 minute average per question that both papers demand."
      },
      {
        heading: "Deciding when to move on",
        content:
          "Since no marks are deducted for wrong answers, spending excessive time on a single difficult question to guarantee correctness is usually the wrong trade-off — a rough educated guess, followed by moving on to secure two or three easier marks elsewhere, protects your overall score better. A useful habit in practice is setting yourself a firm cap (for example, three minutes) on any one question before flagging it and returning only if time allows."
      },
      {
        heading: "Practising under authentic conditions",
        content:
          "Doing timed practice on the same computer-based Pearson VUE interface the real test uses — rather than only working through printed practice questions — reduces the chance of losing time to unfamiliarity with the on-screen format on the actual day. Full mock sittings of both papers back-to-back, exactly as they'll run, also build the sustained concentration the two-and-a-half-hour sitting demands."
      }
    ],
    faqs: [
      {
        question: "Should I answer questions in order or skip around?",
        answer:
          "Skipping around to secure easier marks first is generally a stronger strategy than working strictly in order, since TMUA questions aren't arranged by increasing difficulty within a paper."
      },
      {
        question: "Is there a break between Paper 1 and Paper 2?",
        answer:
          "The two papers are taken consecutively as part of a single 2 hour 30 minute sitting; check current guidance from your test centre for the exact break arrangements on the day, as these can vary slightly by centre."
      },
      {
        question: "Is guessing worthwhile if I genuinely have no idea?",
        answer:
          "Yes — with no negative marking, a blank answer and a wrong answer are scored identically, so it's always worth selecting an option, even a rough guess, for any question you haven't fully solved."
      }
    ],
    relatedExamIds: ["tmua"]
  },
  {
    id: "elat-passage-comparison",
    slug: "elat-passage-comparison",
    title: "ELAT Passage Comparison",
    subtitle: "Choosing and comparing two texts under time pressure",
    description: "How the ELAT's comparative essay task works, and how to choose and connect two passages effectively.",
    intro:
      "The ELAT's single task asks candidates to select two of six unseen passages sharing a common theme and compare and contrast them, with particular attention to structure, language, and style. It's worth noting current status clearly: Oxford's Faculty of English paused the ELAT from the 2025 application cycle onwards and, as of the most recent guidance, has not reintroduced it, so applicants should check Oxford's current admissions test requirements for their cycle before assuming it applies. Even so, the comparative close-reading skill it tests remains central to how Oxford English interviews and written work are assessed, which is why it's still worth developing deliberately.",
    bodySections: [
      {
        heading: "How the six passages are chosen",
        content:
          "When set, ELAT passages spanned different periods, genres, and forms — poetry, prose fiction, non-fiction, and drama — but were always connected by a shared theme, explained briefly in the paper's introduction. No passage requires prior knowledge of the source text or author; the task rewards what you can notice and argue about a text you're encountering for the first time, not what you already know about it."
      },
      {
        heading: "Choosing your pair",
        content:
          "With around thirty minutes recommended for reading all six passages, making notes, and planning, choosing well matters as much as writing well. The strongest pairings usually aren't the two passages that are most obviously similar or most obviously different — they're the two that let you make several distinct, specific observations about structure, language, and style, giving you enough material for a genuinely developed comparison rather than a single point stretched thin."
      },
      {
        heading: "What 'comparison' means here",
        content:
          "A weak comparative essay describes passage A, then separately describes passage B, with a thin connecting sentence at the end. A strong one moves between the two texts throughout, using specific features of one to illuminate or contrast with specific features of the other — how each writer handles rhythm, imagery, or narrative distance — so the comparison is doing analytical work throughout, not just bookending the essay."
      },
      {
        heading: "Planning your comparative points",
        content:
          "Before writing, list three or four specific points of comparison or contrast you can support with precise textual evidence from both passages — not vague thematic overlap, but concrete features like sentence length, verb choice, or the handling of time. Ordering these points so the essay builds toward your most interesting or complex observation, rather than front-loading it, tends to produce a stronger overall shape."
      }
    ],
    faqs: [
      {
        question: "Is the ELAT still being used by Oxford?",
        answer:
          "Oxford paused the ELAT from the 2025 application cycle and has not confirmed a return as of the most recent published guidance; applicants should check Oxford's current admissions test page for their specific cycle, since the position can change."
      },
      {
        question: "Do I need to have read the source texts before the exam?",
        answer:
          "No — ELAT passages are always unseen, and the task deliberately doesn't reward prior knowledge of the specific text or author. Wider reading builds general fluency with different styles and periods, but it isn't a substitute for close reading on the day."
      },
      {
        question: "How many passages should I plan to compare?",
        answer:
          "When the test ran, candidates compared exactly two passages (reduced from a previous option of three), so plan on selecting a strong pair rather than trying to incorporate more texts than the format asks for."
      }
    ],
    relatedExamIds: ["elat"]
  },
  {
    id: "elat-close-reading-technique",
    slug: "elat-close-reading-technique",
    title: "ELAT Close-Reading Technique",
    subtitle: "Noticing structure, language, and style before you start arguing",
    description: "A method for close-reading unseen literary passages, developing the core analytical skill the ELAT is built on.",
    intro:
      "Close reading is the foundation the entire ELAT task rests on, and it's also the skill most different from what school English teaching typically emphasises. A-level English often rewards knowing context, theme, and pre-formed interpretations of set texts; the ELAT strips all of that away and asks what you can actually do with a passage you've never seen before, using only what's on the page in front of you.",
    bodySections: [
      {
        heading: "Reading before interpreting",
        content:
          "The instinct under time pressure is to form an interpretation immediately and then hunt for evidence to support it. A more reliable method is to notice specific textual details first — an unusual word choice, a shift in sentence length, a change in verb tense, a recurring sound pattern — and only build your interpretation once you have several concrete observations to draw on. Interpretations built this way tend to be more precise and less generic than ones formed on a first impression."
      },
      {
        heading: "Structure, language, and style — three distinct lenses",
        content:
          "The ELAT task explicitly names structure, language, and style as areas of focus, and treating them as separate questions helps organise your reading. Structure asks how the piece is organised — where it begins and ends, how it's paced, whether it builds or circles back. Language asks about specific word choices, imagery, and syntax at the sentence level. Style asks about the writer's characteristic voice — formal or intimate, sparse or elaborate — and how that voice serves the passage's effect."
      },
      {
        heading: "Reading poetry, prose, and drama differently",
        content:
          "Each form rewards attention to different features. In poetry, line breaks, rhythm, and sound patterns often carry as much meaning as the literal content of the words. In prose, sentence structure and narrative distance — how close or far the narrating voice sits from the events described — are frequently revealing. In drama, stage directions, silences, and the gap between what characters say and what they seem to mean are worth close attention. Recognising which form you're reading, and adjusting your attention accordingly, is itself a close-reading skill."
      },
      {
        heading: "Turning observations into argument",
        content:
          "A list of noticed details isn't yet an essay — the final step is connecting those details to a claim about what the passage achieves and how. Ask, for each observation, 'what effect does this have on a reader, and why might the writer have chosen it?' This question turns isolated noticing into genuine literary argument, which is what distinguishes a strong ELAT-style response from a competent but purely descriptive one."
      }
    ],
    faqs: [
      {
        question: "How do I practise close reading without official ELAT passages?",
        answer:
          "Any unseen poem, prose extract, or short piece of drama works for practice — the skill of noticing specific textual detail before interpreting transfers regardless of the exact source, and this kind of practice remains directly useful for English degree interviews even where a formal written test isn't currently set."
      },
      {
        question: "Should I mention literary theory or critical schools in my analysis?",
        answer:
          "The ELAT task rewards close, independent analysis of the text itself rather than applying pre-learned theoretical frameworks, and marks aren't awarded for references to critics or other authors, so grounding your points in the passage's specific details is more valuable than name-checking theory."
      },
      {
        question: "How long should I spend close-reading before I start planning my essay?",
        answer:
          "When the test ran, roughly half of the 90 minutes — around 30 minutes — was recommended for reading all six passages, note-taking, and planning, leaving the remaining hour for writing. That rough proportion is a reasonable guide for practice even outside timed conditions."
      }
    ],
    relatedExamIds: ["elat"]
  },
  {
    id: "elat-sample-essay-responses",
    slug: "elat-sample-essay-responses",
    title: "ELAT Sample Essay Responses",
    subtitle: "What separates a strong comparative essay from a competent one",
    description: "Annotated guidance on structuring an ELAT-style comparative essay, illustrated with a worked example approach.",
    intro:
      "Rather than reproducing full model essays, which can encourage imitation over genuine independent reading, this page walks through how a strong ELAT-style response is typically built — from opening framing through to a developed comparative argument — so you can apply the same approach to whichever passages you're working with.",
    bodySections: [
      {
        heading: "Opening: signal your direction, don't summarise",
        content:
          "A strong opening briefly indicates what you intend to explore through your comparison — for example, that both passages use disrupted chronology to convey a character's disorientation, but to different emotional effect. A weak opening simply restates the shared theme given in the paper's introduction, or summarises what each passage is 'about', which uses valuable time without yet doing any analytical work."
      },
      {
        heading: "Middle: interwoven rather than sequential analysis",
        content:
          "The body of a strong essay moves between the two passages point by point rather than treating them in two separate halves. If you're discussing how each writer handles time, address both texts within the same paragraph, showing precisely how they differ or align at the level of specific words and structural choices — this is what makes the piece a genuine comparison rather than two analyses placed side by side."
      },
      {
        heading: "Using textual evidence precisely",
        content:
          "Strong ELAT-style essays anchor every analytical claim in a specific, brief textual reference — a particular word, a line break, a shift in tense — rather than making broad claims about 'tone' or 'mood' without pointing to what produces them. This precision is what examiners are trained to reward, since it demonstrates that your interpretation comes from the text itself rather than a general impression of it."
      },
      {
        heading: "Closing: consolidate, don't just restate",
        content:
          "A weak conclusion repeats the introduction in different words. A strong one draws together the specific comparative points made in the body and offers a final, slightly more developed observation — often about why the two passages' different choices produce such different effects, even when addressing a similar theme. This gives the essay a sense of having built toward something, rather than simply stopping."
      }
    ],
    faqs: [
      {
        question: "Why isn't there a full example essay on this page?",
        answer:
          "Model essays are easy to imitate structurally without genuinely developing the close-reading skill the ELAT actually tests, and every real ELAT task uses different, unseen passages — so practising the underlying method on fresh texts is more valuable preparation than memorising one worked example."
      },
      {
        question: "How long should a strong ELAT essay be?",
        answer:
          "There's no fixed word count, since the ELAT was handwritten within the 90-minute session — but candidates typically produced roughly two and a half to three sides of handwritten analysis, prioritising depth and precision over sheer length."
      },
      {
        question: "Is it better to compare two very similar passages or two very different ones?",
        answer:
          "Neither is inherently better — what matters is whether the pairing gives you enough specific, arguable points of comparison. Two passages that are superficially similar can still differ meaningfully in language and structure, and two very different passages can share a surprising and interesting structural feature; either can produce a strong essay if you find precise, textually grounded points to make."
      }
    ],
    relatedExamIds: ["elat"]
  }
]

export const SECTION_PAGE_MAP = new Map(SECTION_PAGES.map((page) => [page.slug, page]))

export function getSectionPageBySlug(slug: string) {
  return SECTION_PAGE_MAP.get(slug)
}
