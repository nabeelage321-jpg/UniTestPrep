export type SupportingPageSection = {
  heading: string
  content: string
}

export type SupportingPage = {
  id: string
  slug: string
  title: string
  pageType: string // e.g. "comparison", "dates", "scoring", "pillar"
  intro: string
  bodySections: SupportingPageSection[]
  authorName: string
  authorBio: string
}

export const SUPPORTING_PAGES: SupportingPage[] = [
  {
    id: "lnat-vs-tara-vs-tmua",
    slug: "lnat-vs-tara-vs-tmua-which-test-do-i-need",
    title: "LNAT vs TARA vs TMUA: Which Test Do I Actually Need?",
    pageType: "comparison",
    intro: "If you're staring at a list of acronyms and trying to work out which admissions test applies to you, you're not alone. Since January 2026, Oxford's testing landscape has changed substantially, and it's easy to end up preparing for the wrong thing. Here's a plain-English breakdown of what each test is for.",
    bodySections: [
      {
        heading: "LNAT: for Law",
        content: "The LNAT (National Admissions Test for Law) is the longest-standing of the three and hasn't changed in this round of reforms. It's required for Law applicants at a group of universities including Oxford, and now Cambridge as well, alongside UCL, LSE, Durham, King's, Bristol, Nottingham, Glasgow and SOAS. It has two parts: a multiple-choice section based on argumentative passages, marked out of 42, and an essay that isn't scored numerically but is sent to universities for them to assess in their own way. You sit it once per admissions cycle, and it isn't going anywhere regardless of the other changes described on this site."
      },
      {
        heading: "TMUA: for Mathematics and Computer Science",
        content: "The TMUA (Test of Mathematics for University Admission) is now Oxford's test for Mathematics and Computer Science applicants, having replaced the old MAT. It's also used by Cambridge, Imperial, Warwick, LSE and others, which means a single sitting can sometimes cover several applications at once. It's a computer-based, multiple-choice test split into two papers focused on mathematical reasoning rather than syllabus depth, and results are reported on a scale from 1.0 to 9.0."
      },
      {
        heading: "TARA: for social sciences and humanities",
        content: "The TARA (Test of Academic Reasoning for Admissions) is newer and replaces the old TSA at Oxford for courses including PPE, Economics and Management, Human Sciences, Experimental Psychology, Psychology Philosophy and Linguistics, and the History joint degrees with Economics or Politics. UCL also uses it for a range of courses. It has three modules — Critical Thinking, Problem Solving and a Writing Task — and is a genuinely different test from the TSA it replaced, not a rebrand."
      },
      {
        heading: "How to check which one applies to you",
        content: "The safest approach is always to check the current admissions test requirement on your specific course page at each university you're applying to, since requirements can differ even within similar-sounding subjects. If you're applying to more than one university for the same or a related subject, it's also worth checking whether they use the same test — that can save you sitting two exams instead of one."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "tara-vs-old-tsa",
    slug: "tara-vs-tsa-whats-changed-for-oxford-applicants",
    title: "TARA vs the Old TSA: What's Changed for Oxford Applicants",
    pageType: "comparison",
    intro: "For years, PPE, Economics and Management, and Human Sciences applicants at Oxford prepared for the TSA. From the 2027 entry cycle, that test has been retired and replaced by the TARA. The two tests share a family resemblance, but treating TARA prep as a straight continuation of TSA prep would be a mistake.",
    bodySections: [
      {
        heading: "Structure: two sections became three modules",
        content: "The TSA had two components: a Critical Thinking multiple-choice section and a Writing Task. TARA keeps a Critical Thinking module and a Writing Task, but adds a third: Problem Solving, a dedicated section of multiple-choice questions testing numerical and logical reasoning that has no direct TSA equivalent. Each of TARA's three modules is 40 minutes and individually timed, with no carrying time between them."
      },
      {
        heading: "What this means for preparation",
        content: "Because Problem Solving is new, TSA past papers only get you part of the way. They remain a reasonable proxy for the Critical Thinking module and, to a lesser extent, for the general shape of the Writing Task, since the underlying skills — evaluating arguments, spotting flawed reasoning, constructing a coherent essay under time pressure — are genuinely similar. But applicants who rely solely on old TSA material risk being unprepared for a third of the test."
      },
      {
        heading: "Scoring is also different",
        content: "The TSA had its own scoring conventions built up over more than a decade of data. TARA is scored differently: Critical Thinking and Problem Solving are each reported on a 1–9 scale to one decimal place, while the Writing Task is unscored and passed to universities as a piece of evidence rather than a mark. Because TARA only has a couple of sittings' worth of results behind it, there's much less historical data on what a 'typical' or 'competitive' score looks like than there was for the TSA, and that picture will keep filling in over the next few cycles."
      },
      {
        heading: "The practical upshot",
        content: "Treat TARA as a related but distinct test. Use TSA materials to build the reasoning and writing skills that carry across, but make sure a meaningful share of your preparation time goes to the Problem Solving module specifically, using official specimen material from UAT-UK rather than assuming your TSA revision has you covered."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "tmua-vs-old-mat",
    slug: "tmua-vs-mat-whats-changed-for-oxford-applicants",
    title: "TMUA vs the Old MAT: What's Changed for Oxford Applicants",
    pageType: "comparison",
    intro: "The Mathematics Admissions Test had been Oxford's route into Maths and Computer Science for years, with a large bank of past papers behind it. From the 2027 entry cycle it's gone, replaced by the TMUA. If you've been working through MAT papers, here's what actually carries over and what doesn't.",
    bodySections: [
      {
        heading: "Format: long-form vs multiple-choice",
        content: "The MAT was a written paper where you showed full working and were rewarded for partial progress on multi-step problems. The TMUA is structured very differently: two multiple-choice papers, each with 20 questions, in a fully computer-based format. There's no partial credit for working — either you select the correct answer or you don't — which changes how you should approach time management and checking."
      },
      {
        heading: "What's being tested",
        content: "The MAT leaned on depth of A-level content and extended problem-solving across a single sustained question. The TMUA is more focused on mathematical reasoning and precision applied to unfamiliar situations, often combining two topics within one short question rather than building a long argument across several parts. It's a different kind of thinking under pressure, even where the underlying maths draws on the same A-level foundations."
      },
      {
        heading: "Are MAT past papers still useful?",
        content: "Broadly, yes, with caveats. The content overlap is real, and working through MAT questions is still a reasonable way to sharpen your subject knowledge. But because the question style and time pressure differ so much from the TMUA's multiple-choice format, MAT papers work better as content revision than as format practice. For getting used to the TMUA's actual timing and question style, official TMUA specimen materials are the more reliable resource."
      },
      {
        heading: "Scoring",
        content: "The MAT was marked out of a raw total specific to Oxford's own conversion. The TMUA reports a single combined score on a 1.0–9.0 scale to one decimal place, based on performance across both papers. There's no fixed pass mark — universities weigh the score alongside the rest of your application, and different universities set their own thresholds, so it's worth checking your specific course's current guidance rather than assuming a score that worked elsewhere will translate directly to Oxford."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "tmua-vs-step",
    slug: "tmua-vs-step-which-one-for-cambridge-maths",
    title: "TMUA vs STEP: Which One Should Cambridge Maths Applicants Sit?",
    pageType: "comparison",
    intro: "Cambridge Mathematics applicants often ask whether they need the TMUA, STEP, or both. The honest answer is that these are two separate tests serving different purposes, and which one — or ones — you need depends on where and when you're applying.",
    bodySections: [
      {
        heading: "STEP is Cambridge's own test",
        content: "STEP (Sixth Term Examination Paper) predates the recent wave of UAT-UK reforms and isn't part of that system. It's a long-form written exam with multi-step problems, typically used as part of a conditional offer that Cambridge Maths applicants must meet after receiving an offer, rather than as a pre-interview screening tool. It rewards sustained, structured problem-solving over a single extended question, closer in spirit to the old MAT than to a multiple-choice reasoning test."
      },
      {
        heading: "TMUA is the newer, shared test",
        content: "The TMUA sits within the UAT-UK framework alongside ESAT and TARA, and is used pre-interview by several universities, including Oxford (which adopted it in place of the MAT), Imperial, LSE, Warwick and others. It's shorter, multiple-choice, and focused on mathematical reasoning applied to unfamiliar problems rather than extended written proof."
      },
      {
        heading: "Do you need both?",
        content: "It depends entirely on your university choices. Cambridge Mathematics applicants typically still need STEP as part of a conditional offer, since Cambridge hasn't adopted the TMUA in the same pre-interview role that Oxford now uses it for. If you're also applying to Oxford, Imperial, Warwick or LSE for Maths, you'll likely need the TMUA as well, since it's used at the application stage by those institutions. Some universities, such as Warwick, allow applicants to choose between STEP and TMUA for certain courses, so it's worth checking your specific course requirements rather than assuming."
      },
      {
        heading: "How to plan around this",
        content: "Because STEP and TMUA test different skills — extended written proof versus fast multiple-choice reasoning — treat them as genuinely separate preparation streams rather than assuming strength in one guarantees strength in the other. If your university list includes both Cambridge and a UAT-UK institution, build time for both into your schedule well before results and offer deadlines, since STEP preparation in particular tends to take longer to build confidence in."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "lnat-registration-deadlines",
    slug: "lnat-registration-deadlines-and-sitting-windows",
    title: "LNAT Registration Deadlines and Sitting Windows Explained",
    pageType: "dates",
    intro: "The LNAT has a single sitting window each admissions cycle, which makes its deadlines less complicated than the newer UAT-UK tests — but that also means there's no second chance if you miss it. Here's how the timeline generally works.",
    bodySections: [
      {
        heading: "One test, one window",
        content: "Unlike TMUA and TARA, which offer both an October and a January sitting, the LNAT runs to a single annual window that lines up with the standard UCAS application timetable for courses with an October deadline. For applicants targeting Oxford, Cambridge and the other LNAT universities, registration typically opens on 1 August and closes on 15 September, with the test itself needing to be sat by 15 October. Always confirm exact current-cycle dates on the official LNAT website, since these can shift slightly year to year."
      },
      {
        heading: "Why the registration window matters more than the test date",
        content: "Test centres, particularly popular Pearson VUE locations in cities, fill up as the registration window progresses. Registering early doesn't just protect you against missing the closing date — it also gives you a better chance of getting a test slot and location that actually suits your schedule, rather than being left with whatever's available in the final week."
      },
      {
        heading: "You only get one attempt per cycle",
        content: "The LNAT can only be sat once per admissions cycle. There's no option to retake it if you're unhappy with your performance, and no way to defer to the following window within the same application. That single-attempt structure is worth factoring into how you plan your preparation timeline: you want to be at your strongest on test day itself, not building toward a second attempt."
      },
      {
        heading: "Practical planning advice",
        content: "Aim to register as soon as the window opens rather than waiting until closer to the deadline, and build your preparation schedule backward from your intended test date rather than the registration closing date. Given the test's format — a timed multiple-choice section followed immediately by a timed essay — mock sittings under realistic time pressure are more valuable than untimed reading practice alone."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "tara-tmua-registration-deadlines",
    slug: "tara-tmua-registration-deadlines-october-vs-january",
    title: "TARA and TMUA Registration Deadlines: The October vs January Sitting Explained",
    pageType: "dates",
    intro: "One of the more confusing parts of the new UAT-UK system is that both TARA and TMUA offer two sittings a year — but not everyone is allowed to choose freely between them. Getting this wrong can mean your test result doesn't count for the university you actually want it to.",
    bodySections: [
      {
        heading: "Two sittings exist, but not for everyone equally",
        content: "TARA and TMUA are each offered twice a year: once in October and once in January. Broadly, applicants to Oxford and Cambridge must sit the October window — the January sitting is not accepted for entry to those two universities and is intended for applicants to other institutions using the same tests, such as Imperial, UCL, LSE and Warwick, who may have more flexibility to choose either date."
      },
      {
        heading: "How the registration timeline typically runs",
        content: "In a recent cycle, UAT-UK account creation and access-arrangement requests opened around 1 June, general test booking opened in mid-to-late July, and the booking window for the October sitting closed in late September, with the tests themselves taking place over a few days in mid-October — well ahead of the 15 October UCAS deadline for Oxford and Cambridge applications. The January sitting follows its own separate, later registration cycle. Always verify the live dates for your specific cycle on the official UAT-UK website, since these are set fresh each year."
      },
      {
        heading: "Why this trips people up",
        content: "It's easy to see 'January sitting available' on a general UAT-UK page and assume it applies to you. If you're an Oxbridge applicant who registers for or sits the January window by mistake, that result generally won't be usable for your Oxford or Cambridge application, and you can only sit each test once per cycle — there's no second attempt to fix the error. Always check the specific guidance for your target university before booking."
      },
      {
        heading: "A sensible way to plan around it",
        content: "If Oxford or Cambridge is on your list, build your entire preparation timeline around the October sitting and treat that date as fixed. If you're applying more broadly to universities that accept either window and aren't applying to Oxbridge, the January sitting can buy you extra preparation time — but weigh that against the fact you'll be revising for it later, potentially alongside other coursework and deadlines."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "lnat-scoring-explained",
    slug: "how-lnat-scoring-works",
    title: "How LNAT Scoring Works and What a Good Score Looks Like",
    pageType: "scoring",
    intro: "LNAT scoring is split into two very different halves: a hard number out of 42, and an essay that isn't scored at all by the test itself. Understanding how universities actually use each half matters more than chasing a single target figure.",
    bodySections: [
      {
        heading: "Section A: a clean score out of 42",
        content: "Section A is 42 multiple-choice questions based on argumentative passages, marked automatically with no negative marking for wrong answers — so there's no reason to leave a question unanswered. Your raw score, out of 42, is the number universities see for this section, and it's the closest thing the LNAT has to a straightforward, comparable number."
      },
      {
        heading: "Section B: not scored by LNAT at all",
        content: "The essay in Section B isn't marked by the LNAT organisation. Instead, your response is sent as-is to the universities you've applied to, and each one assesses it using its own criteria and its own weighting. This is genuinely important: a strong Section A score doesn't automatically compensate for a weak essay, or vice versa, because different universities lean on the two sections to very different degrees."
      },
      {
        heading: "Universities weight the two sections differently",
        content: "Some universities place heavy emphasis on the essay — Oxford is generally understood to take Section B particularly seriously as part of shortlisting — while others focus almost entirely on the Section A score and give the essay little to no weight in their decision-making. Because this varies by institution and can change between cycles, the only reliable way to know how a specific university treats each section is to check that university's own published admissions guidance, rather than relying on a single 'good LNAT score' rule of thumb."
      },
      {
        heading: "What this means for how you prepare",
        content: "Because there's no universal cutoff and no single official 'good score,' the most useful preparation strategy is to treat both sections as equally worth your time rather than assuming Section A alone will carry you. Practise Section A under realistic time pressure to build both accuracy and pace, and treat Section B as a genuine piece of writing that needs a clear argument and structure, not just fluent prose, since it may be read closely by admissions tutors at your top-choice university."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "tara-scoring-explained",
    slug: "how-tara-scoring-works-1-9-scale",
    title: "How TARA Scoring Works (the 1–9 Scale Explained)",
    pageType: "scoring",
    intro: "TARA is a new enough test that a lot of the folklore around 'good scores' hasn't had time to build up properly yet. Here's what's actually confirmed about how it's scored, and why you should treat any specific target number with some caution for now.",
    bodySections: [
      {
        heading: "Two scored modules, one unscored",
        content: "TARA has three modules: Critical Thinking, Problem Solving, and a Writing Task. The first two are each reported on a scale from 1 (lowest) to 9 (highest), to one decimal place, based on your performance against the wider cohort rather than a simple percentage of questions answered correctly. The Writing Task is not scored numerically at all — your response is passed directly to the universities you've applied to, for them to use at their own discretion."
      },
      {
        heading: "It's a relative scale, not a percentage",
        content: "Like other UAT-UK tests, TARA's 1–9 scale reflects your standing relative to other candidates in that sitting, not a raw percentage correct. This means the scale is designed to spread candidates out at the top end, where competition is fiercest, rather than clustering everyone near a pass mark."
      },
      {
        heading: "Why 'good score' benchmarks are still unsettled",
        content: "Because TARA has only been sat for a couple of cycles, there's far less accumulated data than for longer-running tests, and universities themselves are still building up experience with how scores map onto outcomes. Any specific number you see quoted as a 'good' or 'safe' TARA score should be treated as an early estimate rather than an established benchmark — this is one area where the picture will keep sharpening over the next few years as more results come in."
      },
      {
        heading: "What to actually do with this",
        content: "Rather than fixating on hitting a specific number, focus on genuinely developing the underlying skills each module tests — clean critical reasoning, structured numerical problem-solving, and a well-argued essay under time pressure. Check your target university's current course page for any published guidance, since Oxford and UCL have started to share some indication of how they use TARA in shortlisting, and that guidance is a more reliable source than third-party score tables."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "tmua-scoring-explained",
    slug: "how-tmua-scoring-works-1-0-9-0-scale",
    title: "How TMUA Scoring Works (the 1.0–9.0 Scale Explained)",
    pageType: "scoring",
    intro: "The TMUA's scoring system confuses a lot of applicants because it doesn't map onto anything from school exams. There's no percentage, no marks out of 40, and no fixed pass mark — just a single number between 1.0 and 9.0. Here's what that number actually means.",
    bodySections: [
      {
        heading: "One combined score from two papers",
        content: "The TMUA consists of two papers, each with 20 multiple-choice questions. Your raw marks across both papers are combined and converted onto a single overall score reported on a scale from 1.0 to 9.0, to one decimal place. There's no separate published score per paper for candidates — only the combined figure that universities see."
      },
      {
        heading: "It's a scaled, relative score",
        content: "According to UAT-UK, the body that runs the test, the underlying statistical scale is mapped so that the 50th percentile of the October sitting's candidates sits around 4.5, and the 90th percentile sits around 9.0. In other words, the scale is deliberately designed to spread out strong candidates at the top end rather than clustering everyone near a simple pass mark — a score in the 4s reflects a genuinely typical performance among people sitting a test aimed squarely at competitive university applicants, not a weak one."
      },
      {
        heading: "There's no pass mark",
        content: "The TMUA has no official pass or fail threshold. Universities read the score alongside the rest of your application — grades, personal statement, and any interview — and set their own internal expectations, which can differ meaningfully between institutions and between courses at the same institution. A score that comfortably supports an application to one university may sit below the typical range for another."
      },
      {
        heading: "How to interpret your own result",
        content: "Rather than benchmarking yourself against a single 'good score' figure pulled from a forum or a tutoring company's marketing page, check the current, specific guidance published by each university and course you're applying to. Because the scale is recalculated each year based on that year's cohort, comparing your score directly to a previous year's headline figures isn't reliable — the conversion tables change from sitting to sitting."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "understanding-percentiles",
    slug: "understanding-percentiles-in-admissions-test-results",
    title: "Understanding Percentiles in Admissions Test Results",
    pageType: "scoring",
    intro: "Admissions tests increasingly report results as scaled scores rather than raw percentages, and that's confusing if you're used to school exams marked out of 100. Percentiles are the concept doing most of the work behind these scales, so it's worth understanding what they actually tell you.",
    bodySections: [
      {
        heading: "A percentile tells you your rank, not your accuracy",
        content: "A percentile describes where you sit relative to everyone else who sat the same test, not how many questions you got right. If you're at the 70th percentile, it means you scored higher than roughly 70% of other candidates in that sitting — it says nothing directly about what proportion of questions you answered correctly, because that depends on how hard that particular version of the test was."
      },
      {
        heading: "Why admissions tests use this instead of raw marks",
        content: "Test difficulty varies slightly between sittings and between years, even when a lot of care goes into keeping papers comparable. A raw score of 25 out of 40 might represent a strong performance on a harder paper and a middling one on an easier paper. Converting raw marks into a scaled score based on percentile standing lets universities compare candidates fairly across different sittings, which is exactly why tests like the TMUA and TARA report scores this way rather than as simple percentages."
      },
      {
        heading: "A worked example using the TMUA scale",
        content: "UAT-UK, the body running the TMUA, has stated that the 50th percentile of the October sitting's candidates maps to a scaled score of around 4.5, and the 90th percentile maps to around 9.0. That tells you a 4.5 represents a genuinely average performance among a self-selected group of ambitious applicants, while scores approaching 9.0 reflect only the strongest tenth or so of that same competitive pool — very different from what '4.5 out of 9' would suggest on a school-style mark scheme."
      },
      {
        heading: "The upshot for how you read your own results",
        content: "When you receive a scaled score, resist the urge to compare it mentally to a percentage grade. Instead, ask what it says about your standing relative to other applicants sitting the same test — and remember that different universities set their own expectations for where in that distribution they consider an application competitive, so the same percentile can mean different things depending on where you're applying."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "january-2026-oxford-overhaul-guide",
    slug: "complete-guide-january-2026-oxford-admissions-test-overhaul",
    title: "The Complete Guide to the January 2026 Oxford Admissions Test Overhaul",
    pageType: "pillar",
    intro: "In January 2026, Oxford announced the biggest change to its undergraduate admissions testing in over a decade. Eight long-standing, subject-specific tests were discontinued and replaced by three new shared tests. If you're applying from the 2026 cycle onward, here's the full picture of what changed and why it matters.",
    bodySections: [
      {
        heading: "What was scrapped",
        content: "Oxford discontinued eight of its own admissions tests: the MAT (Mathematics), PAT (Physics), TSA (Thinking Skills Assessment, used for PPE and related subjects), BMSAT (Biomedical Sciences), MLAT (Modern Languages), CAT (Classics), PhilAT (Philosophy) and AHCAAT (Ancient History and Classical Archaeology). Some subjects, such as Materials Science, no longer require a written admissions test at all. Medicine and Law were unaffected — the UCAT and LNAT, which are run externally by Pearson rather than being Oxford-specific, continue exactly as before."
      },
      {
        heading: "What replaced them",
        content: "In place of the discontinued tests, Oxford now uses three tests run by UAT-UK, a collaboration between Imperial College London and the University of Cambridge, delivered globally via Pearson VUE test centres: the ESAT (Engineering and Science Admissions Test) for subjects like Engineering and Physics, the TMUA (Test of Mathematics for University Admission) for Mathematics and Computer Science, and the TARA (Test of Academic Reasoning for Admissions) for PPE, Economics and Management, Human Sciences, Experimental Psychology, and related joint courses. Because these same tests are used by other universities including Imperial, LSE, UCL and Warwick, one sitting can sometimes cover several applications at once — one of the genuine upsides of the reform."
      },
      {
        heading: "Why the change happened and who it affects",
        content: "The stated aim was to move away from a patchwork of Oxford-specific tests, each with its own format and preparation route, toward a smaller set of standardised, computer-based tests shared across multiple universities. Students who had already applied and sat the old tests before the change were unaffected — the reform applies from the 2027 entry cycle onward, meaning the tests are first sat in October 2026. Current Year 12 students are the first full cohort facing the new system."
      },
      {
        heading: "The real difficulty: no established past papers",
        content: "The most practically significant consequence isn't the format change itself, but the loss of decades of accumulated preparation resources. The MAT, for instance, had close to thirty years of past papers behind it; the TARA has only had a couple of sittings. UAT-UK's tests follow different formats and exam conditions from the tests they replaced, so old past papers are generally not a reliable substitute — the TSA is a partial exception for TARA preparation, given the overlapping focus on critical thinking, but even there the new Problem Solving module has no direct precedent. Applicants should prioritise official UAT-UK specimen materials over adapted old papers wherever possible."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "parents-guide-uk-admissions-tests",
    slug: "parents-guide-to-uk-university-admissions-tests",
    title: "A Parent's Guide to UK University Admissions Tests",
    pageType: "pillar",
    intro: "If your child is applying to a UK university and you last paid attention to admissions tests some years ago — or never had to think about them at all — the current landscape can feel like a foreign language. This guide is written for parents who want the practical shape of the system without the jargon.",
    bodySections: [
      {
        heading: "Not every course requires a test",
        content: "Admissions tests are generally only required for specific, highly competitive courses at a subset of universities — most notably Oxford, Cambridge, Imperial, UCL, LSE and Warwick. Many university courses, including at highly ranked institutions, don't require a written admissions test at all and rely instead on grades, the personal statement, and references. The first thing worth establishing is whether your child's specific course, at their specific chosen universities, requires a test — this is always confirmed on the individual course page, not a general university-wide page."
      },
      {
        heading: "The main tests in play right now",
        content: "For Law, it's the LNAT. For Medicine, it's the UCAT. For Mathematics and Computer Science at several universities including Oxford, it's the TMUA. For a cluster of humanities and social science courses at Oxford and UCL, it's the newer TARA. For Engineering and Science subjects at Oxford, it's the ESAT. Cambridge Mathematics applicants typically also sit STEP, a separate long-form written test used as part of a conditional offer rather than at the application stage. Several of Oxford's older subject-specific tests — the MAT, PAT, TSA and others — were discontinued from the 2027 entry cycle, so if you've heard of those from an older sibling or your own experience, know that they no longer apply."
      },
      {
        heading: "Timing and cost",
        content: "Most of these tests are sat in October, in the run-up to the 15 October UCAS deadline for Oxford, Cambridge, Medicine, Dentistry and Veterinary Science courses. Registration windows typically open several months earlier, in the summer, and it's genuinely worth registering as soon as the window opens rather than waiting, since popular test centres can fill up. The newer UAT-UK tests (TMUA, TARA, ESAT) carry a registration fee, generally lower for UK and Republic of Ireland candidates than for international candidates, with a bursary scheme available for those who meet eligibility criteria — worth checking if cost is a concern."
      },
      {
        heading: "How you can actually help",
        content: "Beyond logistics — making sure registration deadlines aren't missed, and that your child has a realistic mock-exam-style trial before the real thing — probably the most useful thing a parent can do is help keep expectations calibrated. These tests are designed to be genuinely difficult for even very strong students, and a score that feels underwhelming compared to school exam results is often still a perfectly competitive one. Panic about a single practice score rarely helps; steady, structured preparation over a few months generally serves students better than a last-minute scramble."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  },
  {
    id: "admissions-test-prep-schedule",
    slug: "how-to-build-a-uk-admissions-test-prep-schedule",
    title: "How to Build a UK Admissions Test Prep Schedule (LNAT, TARA, TMUA, ELAT)",
    pageType: "pillar",
    intro: "With most major admissions tests clustered around October, it's tempting to leave preparation until late summer. Given how new some of these tests are, and how thin the official practice material still is for TARA in particular, starting earlier and pacing yourself deliberately tends to pay off. Here's a practical way to structure your time.",
    bodySections: [
      {
        heading: "Start by confirming exactly what you need",
        content: "Before building any schedule, get a definitive list of which test or tests each of your target courses actually requires, sourced from each university's own current course pages rather than general summaries — requirements and even test names have changed recently enough that older guides may be out of date. If you're applying to more than one course that shares a test (for example, TMUA required by both Oxford Maths and Imperial Maths), you only need to prepare for and sit it once."
      },
      {
        heading: "LNAT: build reading stamina early, essay skill throughout",
        content: "Because Section A rewards speed and accuracy under time pressure across dense, unfamiliar passages, regular timed reading practice in the months before your sitting is more valuable than cramming close to the date. For Section B, treat essay practice as an ongoing skill you build over weeks, not something to rush the week before — since you won't know the topics in advance, the goal is a reliable structure and clear argumentative habits you can apply to any prompt."
      },
      {
        heading: "TARA and TMUA: respect that official material is still limited",
        content: "Both tests are recent enough that the bank of official past papers is thin compared with older, discontinued tests. Prioritise UAT-UK's own specimen and sample materials as your primary resource, and use adapted materials from related older tests (TSA for TARA's Critical Thinking module, MAT for TMUA's underlying content) as a secondary layer rather than your main source, being aware that format and timing will differ. Because both are timed, computer-based, multiple-choice tests, doing regular practice under realistic exam conditions — not just working through questions untimed — matters more than it might for a traditional written exam."
      },
      {
        heading: "ELAT and other subject-specific tests: check current status carefully",
        content: "Some subject-specific tests, including the ELAT for Oxford English applicants, have had an unsettled recent history, with the test paused in some cycles while the format was reviewed. If your course involves a test like this, don't assume its status or format from an older guide — check the relevant faculty's current admissions pages directly before building preparation time around it, since whether it's running at all, and in what form, can change from cycle to cycle. Where a subject test isn't currently in use, written work and the personal statement tend to carry correspondingly more weight, which is worth factoring into how you allocate your overall preparation time."
      }
    ],
    authorName: "Nabil Anjum",
    authorBio: "Founder of Clearsit — built to give UK admissions-test applicants honest, free practice ahead of a genuinely confusing year of test changes."
  }
]

export const SUPPORTING_PAGE_MAP = new Map(SUPPORTING_PAGES.map((p) => [p.slug, p]))

export function getSupportingPageBySlug(slug: string) {
  return SUPPORTING_PAGE_MAP.get(slug)
}

export function allSupportingPages() {
  return SUPPORTING_PAGES
}
