export type UniversityPage = {
  id: string
  slug: string
  universityName: string
  examId?: string
  courseName: string
  registrationDeadline?: string
  sittingWindow?: string
  // Use this to note changes like "used to require X, now requires Y"
  callout?: string
  // Main body content for the unique data point described in agent.md Section 6
  body: string
}

export const UNIVERSITY_PAGES: UniversityPage[] = [
  {
    id: "oxford-law-lnat-requirement",
    slug: "oxford-law-lnat-requirement",
    universityName: "University of Oxford",
    examId: "lnat",
    courseName: "Law (Jurisprudence)",
    registrationDeadline:
      "Typically 15 September (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 15 October",
    body:
      "Oxford is one of the two universities where the LNAT genuinely decides who gets an interview. With well over a thousand applicants chasing around 230 places across the colleges, tutors use your LNAT Section A score, alongside GCSE results and your personal statement, to build the shortlist before a single interview takes place. That makes early, serious preparation more valuable here than almost anywhere else in the LNAT system. Oxford also does something few other universities do with Section B: it marks your essay formally, against a detailed rubric, and weights it heavily in shortlisting decisions. A strong Section A score paired with a thin, unstructured essay is a common way promising applicants miss out, so treat the essay as equal in importance to the multiple-choice section, not an afterthought tackled in the last ten minutes. The test itself assesses reading comprehension and argument analysis — spotting assumptions, weaknesses, and the structure of reasoning in unfamiliar passages — rather than any prior legal knowledge, so there's no syllabus to revise as such. What helps is sustained practice reading dense, opinionated non-fiction (broadsheet comment pieces, law journal introductions, Supreme Court judgment summaries) and timing yourself against the 95-minute, 42-question format. Because Oxford and Cambridge applicants must complete the LNAT by 15 October to align with the UCAS deadline, you're working to a tighter calendar than applicants to January-deadline universities — register as early as the window opens in August, since test centre slots near the deadline fill quickly. Practically: book your test date the moment registration opens, sit at least two full timed papers under exam conditions before you go in, and get a teacher or tutor to mark a practice essay against Oxford's published assessment criteria rather than a generic LNAT mark scheme. Given how much weight the essay carries here, that single piece of targeted feedback is often the highest-value hour you can spend."
  },
  {
    id: "cambridge-law-lnat-requirement",
    slug: "cambridge-law-lnat-requirement",
    universityName: "University of Cambridge",
    examId: "lnat",
    courseName: "Law",
    registrationDeadline:
      "Typically 15 September (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 15 October",
    body:
      "Cambridge Law applicants now sit the LNAT rather than the university's own previous admissions test, so if you've seen older guidance mentioning a separate Cambridge-specific paper, it no longer applies — the LNAT is the current requirement, and the format described below is what you should be preparing for. Cambridge treats the test as one input among several rather than a hard cut-off: your LNAT result is considered alongside GCSEs, predicted grades, your personal statement, and — critically — your performance at interview, where supervisors are really testing how you think and argue under pressure in real time, not just what you already know. That interview-led culture matters for how you should prepare. The LNAT's Section A (42 multiple-choice questions on 12 argumentative passages, 95 minutes) rewards the same skills Cambridge interviews probe further: identifying an argument's structure, spotting unstated assumptions, and reasoning about implications rather than reciting facts. Section B, the 40-minute essay, is not centrally used to rank candidates in the way Oxford's is, but colleges do read it, and a poorly argued or badly organised essay can undermine an otherwise strong application, particularly at the margins. Cambridge's collegiate admissions system means your application is assessed by the specific college you apply to (or are pooled to), so there is some variation in exactly how each college weighs your LNAT alongside other evidence — when in doubt, the college's own admissions page is the most reliable source. Because Cambridge sits in the same October UCAS deadline cohort as Oxford, you must register between 1 August and 15 September and complete the test by 15 October — there's no flexibility to sit it later. Given how central the interview is to a Cambridge offer, the most useful preparation crossover is to practise thinking aloud, coherently and under time pressure, on unfamiliar arguments — a skill LNAT Section A rewards and Cambridge interviews demand in a different form."
  },
  {
    id: "ucl-law-lnat-requirement",
    slug: "ucl-law-lnat-requirement",
    universityName: "UCL",
    examId: "lnat",
    courseName: "Law",
    registrationDeadline:
      "Typically 14 January (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 25 January",
    body:
      "UCL Laws sits in central London with strong links to the Inns of Court and major City firms, and its LNAT process reflects a genuinely holistic admissions culture rather than a single-metric cut-off. UCL has stated that it considers your LNAT essay to carry considerable weight in its assessment — worth noting, because it's the only piece of your writing UCL receives that was produced under timed, unaided exam conditions, unlike your personal statement or any submitted written work. That makes Section B more than a formality here: admissions tutors use it as a check against the polish of your personal statement, so an essay that reads noticeably weaker than your application's written English is a flag worth avoiding through practice. Section A, the 95-minute, 42-question multiple-choice component testing reading comprehension and critical reasoning, is considered alongside your academic record rather than used as an automatic threshold — UCL does not publish a minimum score, and context (school performance, access considerations) factors into how a borderline score is read. Unlike Oxford and Cambridge, UCL falls into the January-deadline cohort of LNAT universities, meaning you register by 14 January and sit the test by 25 January — a later and slightly more forgiving calendar than the Oxbridge track, which gives you more runway if you're applying to a mix of institutions with different deadlines. Because UCL's Law course is highly competitive on its own terms (rather than as an Oxbridge backup), don't treat the extra weeks as licence to delay preparation. Practically: read UCL's own admissions FAQ on the LNAT, since it's unusually specific about how the essay is used; practise writing full essays in 40 minutes on contemporary ethical and legal debates (data privacy, free speech, the role of courts in policy); and have someone assess your essay purely on clarity and structure, since that's what a first read under exam conditions is really testing."
  },
  {
    id: "bristol-law-lnat-requirement",
    slug: "bristol-law-lnat-requirement",
    universityName: "University of Bristol",
    examId: "lnat",
    courseName: "Law",
    registrationDeadline:
      "Typically 14 January (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 14 January",
    body:
      "Bristol Law is unusual among LNAT universities in publishing, in broad terms, how the test is actually scored into your application: rather than treating the LNAT as a soft contextual factor, Bristol incorporates your result into a formula in which the essay (Section B) is reported to carry meaningful weight — commonly cited at around 40% of your combined LNAT score, with Section A making up the rest. That's a significantly more essay-weighted approach than many other LNAT universities take, and it means Bristol applicants should not default to the common assumption that only the multiple-choice section counts. If your strength is reasoning under time pressure but your written argument tends to ramble, this is a university where closing that gap in the essay specifically will move the needle more than further multiple-choice drilling. The test overall assesses critical reading and reasoning — analysing arguments in unfamiliar, often contestable passages — rather than legal knowledge, which suits Bristol's course philosophy of treating law as a discipline built on analytical skill rather than memorised doctrine from day one. Bristol sits in the January-deadline cohort, so you register by 14 January and sit by the same date, giving you noticeably more preparation time than Oxbridge applicants working to an October cut-off — but Bristol's popularity as a Russell Group law destination means competition doesn't ease off simply because the calendar is longer. Bristol also considers your LNAT result alongside contextual data and your wider UCAS application, so a single underwhelming score is rarely fatal on its own, particularly if your academic record is strong. Practically: because the essay is unusually consequential here, budget real preparation time for Section B specifically — outline practice essays before writing them in full, and time yourself strictly to 40 minutes so you build the instinct for what a complete, well-structured argument looks like at that length."
  },
  {
    id: "durham-law-lnat-requirement",
    slug: "durham-law-lnat-requirement",
    universityName: "Durham University",
    examId: "lnat",
    courseName: "Law",
    registrationDeadline:
      "Typically 14 January (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 14 January",
    body:
      "Durham Law is one of the more transparent LNAT universities about how it uses your score, which makes it a good case study for applicants trying to understand what the test is actually doing in an admissions decision rather than treating it as an opaque hurdle. Durham publishes clearer guidance than most on the kind of Section A performance it expects to see from competitive applicants, and uses the score as part of a combined assessment alongside your predicted grades, GCSEs, and personal statement — it is a genuine factor in shortlisting, not a box-ticking formality, but nor is it the single deciding element. The test itself measures reading comprehension and critical reasoning across 12 unfamiliar argumentative passages in the 95-minute Section A, followed by a 40-minute essay in Section B that Durham's admissions tutors read as part of the wider file rather than scoring in isolation. Durham's collegiate structure — 17 colleges, each providing a base for social and pastoral life alongside central academic teaching — doesn't change how the LNAT is assessed, since Law admissions decisions are made centrally by the department rather than college by college, which is a useful distinction from Oxford and Cambridge if you're weighing multiple applications. Durham sits in the January-deadline cohort alongside Bristol, so you register and sit the test by 14 January, giving you a longer run-up than Oxbridge candidates. Given Durham's reputation as a strong, popular Russell Group alternative to Oxbridge for law, expect genuinely competitive LNAT thresholds even with the more generous calendar. Practically: Durham's own admissions pages are worth reading closely before you prepare, since the guidance on expected scores is more specific than most universities offer; beyond that, standard LNAT preparation — timed practice passages and essays, reviewed critically rather than just completed — applies."
  },
  {
    id: "glasgow-law-lnat-requirement",
    slug: "glasgow-law-lnat-requirement",
    universityName: "University of Glasgow",
    examId: "lnat",
    courseName: "Law",
    registrationDeadline:
      "Typically 14 January (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 14 January",
    body:
      "Glasgow is worth understanding on its own terms if you're applying from an English or Welsh sixth form, because Scottish LLB courses are structurally different from the three-year English qualifying law degree — Glasgow's course typically runs longer and sits within the distinct framework of Scots law, which has its own history, sources, and areas of divergence from England and Wales (property, some areas of criminal law, and court structure among them). That's relevant to why the LNAT matters here: Glasgow explicitly frames its use of the test as looking for well-rounded candidates rather than applying a strict numerical threshold, which reflects a genuinely holistic admissions approach where your score is read in the context of your whole application rather than as a gatekeeping cut-off. The test itself is unchanged from the version other LNAT universities use — 42 multiple-choice questions on argumentative passages in 95 minutes, followed by a 40-minute essay — and assesses reasoning and comprehension rather than any legal knowledge, Scots or otherwise, so your preparation doesn't need to differ from that for any other LNAT destination. Glasgow sits in the January-deadline cohort, registering and sitting by 14 January, which gives you a longer preparation window than an Oxbridge application would allow. If you're considering Glasgow alongside English universities, it's worth thinking early about whether you want a Scottish legal qualification (relevant if you intend to practise in Scotland) or are using Glasgow as one option among several English-system applications — this shapes how you should present your motivation in your personal statement, and tutors do read for genuine understanding of what a Scots law degree actually involves. Practically: prepare for the LNAT exactly as you would for any other university on this list, but make sure your wider application — personal statement and any supplementary questions — demonstrates real awareness of what distinguishes Scots law from the English system you may be more familiar with from school."
  },
  {
    id: "soas-law-lnat-requirement",
    slug: "soas-law-lnat-requirement",
    universityName: "SOAS University of London",
    examId: "lnat",
    courseName: "Law",
    registrationDeadline:
      "Typically 14 January (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 14 January",
    body:
        'SOAS Law is a genuinely different proposition from most other institutions on this list, and it\'s worth understanding that distinctiveness before deciding how to present your application. SOAS specialises in law in its international, comparative, and regional context — think Islamic law, African legal systems, Asian legal traditions, and international human rights law — alongside the core subjects any qualifying law degree must cover. Its applicant pool tends to be smaller and more self-selecting than the mainstream Russell Group law departments, with many candidates drawn specifically by SOAS\'s regional and linguistic strengths rather than applying to it as a generic backup choice. The LNAT itself is used in exactly the same format as elsewhere — Section A\'s 95-minute, 42-question reasoning test and Section B\'s 40-minute essay — but SOAS\'s smaller cohort size means admissions tutors are often able to read applications with more individual attention than at larger law schools, so your personal statement and its coherence with your LNAT essay both carry real weight in a way that\'s easy to underestimate. SOAS sits in the January-deadline cohort, registering and sitting the LNAT by 14 January, giving you a longer preparation window than Oxbridge applicants face. If international law, area studies, or a specific regional legal system is a genuine interest rather than a strategic add-on, it\'s worth reflecting that clearly and specifically in both your personal statement and, where relevant, your LNAT essay choice — vague enthusiasm for \'global law\' reads very differently from demonstrated engagement with a particular legal tradition or current international legal debate. Practically: prepare for the LNAT using standard timed practice, but spend proportionally more time than usual making sure your wider application genuinely reflects why SOAS\'s distinctive approach to law suits you, since that fit is scrutinised more closely here than at a conventional law school.'
  },
  {
    id: "kcl-law-lnat-requirement",
    slug: "kcl-law-lnat-requirement",
    universityName: "King's College London",
    examId: "lnat",
    courseName: "Law",
    registrationDeadline:
      "Typically 14 January (register from 1 August) — check current LNAT guidance",
    sittingWindow: "Typically 1 September to 14 January",
    body:
      "King's College London runs one of the largest and most competitive law schools in the country, based in the Strand campus with close proximity to the Royal Courts of Justice and the Inns of Court, and its LNAT process reflects a high-volume, primarily numbers-led first stage. King's uses your LNAT Section A score as a significant factor in an initial, largely quantitative screening of a very large applicant pool, before moving to a more holistic review of shortlisted candidates that draws on your personal statement and academic record. Section B, the essay, is reported to be read closely mainly for candidates sitting near the borderline of the shortlisting threshold — meaning it can function as a tie-breaker or a chance to strengthen a marginal application, rather than being weighted as heavily as it is at, say, Oxford or Bristol, for every applicant regardless of their Section A score. That has a practical implication: because so much of King's initial filtering rests on Section A, timed multiple-choice practice under realistic conditions deserves proportionally more of your preparation time here than at universities where the essay is weighted more evenly throughout. The test format itself — 42 questions across 12 passages in 95 minutes, then a 40-minute essay from a choice of three questions — is identical to every other LNAT sitting; it's King's use of the results, not the test, that differs. King's sits in the January-deadline cohort, so you register by 14 January and sit by the same date, giving you a longer run-up than an Oxbridge applicant. Given the scale of competition for a relatively large but heavily oversubscribed cohort of places, aim to sit the LNAT as early in the window as you feel genuinely prepared, since strong, consistent Section A performance is the most direct lever you have here. Practically: prioritise timed Section A drilling, and treat the essay as a real opportunity if your numerical score lands near the margin rather than assuming it won't be read closely."
  },
  {
    id: "oxford-ppe-em-humansci-tara-requirement",
    slug: "oxford-ppe-em-human-sciences-tara-requirement",
    universityName: "University of Oxford",
    examId: "tara",
    courseName: "PPE, Economics & Management, and Human Sciences",
    registrationDeadline:
      "Typically August/September (register from 1 June) — check current UAT-UK guidance",
    sittingWindow: "October sitting only (mandatory for Oxford applicants) — check current UAT-UK guidance",
    callout:
      "From the January 2026 admissions overhaul, Oxford replaced the Thinking Skills Assessment (TSA) with the TARA for these courses. If you've prepared using old TSA guidance, note the format has changed — TARA now includes a scored Critical Thinking module, a scored Problem Solving module, and an unscored Writing Task, each 40 minutes, sat as a single 2-hour computer-based test.",
    body:
      "PPE, Economics & Management, and Human Sciences are grouped here because Oxford now assesses applicants to all three with the same test: the TARA, run by UAT-UK, a testing body jointly established by Cambridge and Imperial. This is a genuinely new requirement, not a rebrand — Oxford has never before used a shared, externally administered reasoning test for these subjects, having relied on its own in-house TSA for over fifteen years. The shift matters practically because there is no long back-catalogue of TARA past papers the way there was for the TSA; UAT-UK's own specimen materials, released via the esat-tmua.ac.uk platform, are currently the only fully reliable preparation resource, though old TSA papers remain a reasonable proxy for style, since the two tests share a similar critical-thinking DNA. What TARA actually tests is deliberately subject-neutral: Critical Thinking and Problem Solving are both multiple-choice modules assessing how you evaluate arguments, spot flawed reasoning, and work through unfamiliar logical and quantitative problems, without requiring any specific A-level content. Crucially, there is no calculator and no dictionary permitted, and you can't lose marks for wrong answers, so attempting every question is worth doing even under time pressure. The Writing Task is not scored numerically by UAT-UK at all — instead, your response is sent directly to Oxford as a writing sample, where admissions tutors read it as evidence of how you construct an argument in your own words, a useful complement to your personal statement. For PPE and Economics & Management specifically, expect problem-solving questions with some quantitative reasoning; for Human Sciences, the emphasis leans more toward critical thinking across social-scientific and scientific material, reflecting that course's genuinely interdisciplinary nature. All Oxford applicants must sit the October window — the January sitting exists for other UAT-UK universities and isn't accepted for Oxford entry — so registration timing is tighter than it might first appear. Practically: register the moment the window opens, work through every specimen paper UAT-UK publishes, and don't neglect the Writing Task simply because it isn't scored — it's still read, and read carefully, by the people deciding whether to shortlist you."
  },
  {
    id: "cambridge-tara-requirement",
    slug: "cambridge-tara-requirement",
    universityName: "University of Cambridge",
    examId: "tara",
    courseName: "Relevant TARA-linked courses",
    registrationDeadline: "Check current UAT-UK and Cambridge course guidance",
    sittingWindow: "Check current UAT-UK and Cambridge course guidance",
    callout:
      "Unlike Oxford, Cambridge does not currently require the TARA for any undergraduate course. Cambridge Law uses the LNAT, and Cambridge's TMUA- and ESAT-eligible courses (Mathematics, Computer Science, Engineering, Natural Sciences, and others) use those tests directly rather than TARA. Some admissions commentary has speculated Cambridge may adopt TARA in future cycles, given its involvement in UAT-UK alongside Imperial, but this is not confirmed — always check your specific course page on undergraduate.study.cam.ac.uk before assuming any test requirement.",
    body:
      "If you've landed here because you're applying to both Oxford and Cambridge and trying to work out whether you need to prepare for the TARA twice, the honest answer is: not for Cambridge, at least not currently. TARA — the Test of Academic Reasoning for Admissions — was introduced by UAT-UK, the testing body jointly founded by the University of Cambridge and Imperial College London, and it's genuinely used for admissions decisions at Oxford (for PPE, Economics & Management, Human Sciences, and several related courses) and at UCL (for a range of Computer Science, social science, and management courses). Cambridge's institutional involvement in UAT-UK is as a co-founder and governance partner of the testing organisation, not as a university that currently requires its own applicants to sit the test. This is a subtlety worth being clear on, because it's easy to assume that because Cambridge helped create UAT-UK, Cambridge courses automatically use all of its tests — they don't, uniformly. Cambridge's own admissions testing landscape is course-specific: Law applicants sit the LNAT, Mathematics applicants typically sit STEP, and several science and engineering courses use the ESAT or TMUA where relevant, but no current Cambridge course lists the TARA as a requirement. If you're weighing offers or applications across Oxford, UCL, and Cambridge for a social-sciences-adjacent course, this actually simplifies your test calendar somewhat: your TARA preparation (if any Oxford or UCL course on your list needs it) doesn't need to be duplicated for a Cambridge application, and Cambridge's interview-led process rewards a different kind of preparation — sustained subject reading and comfort thinking aloud under questioning — rather than timed reasoning-test practice. Because UAT-UK is still a relatively new organisation and its remit could expand, this is genuinely a page to revisit rather than treat as settled forever. Practically: always verify requirements directly on your specific Cambridge course page before assuming a test does or doesn't apply, since admissions requirements can and do change between cycles, and don't let TARA preparation for another university crowd out the reading and thinking Cambridge interviews actually reward."
  },
  {
    id: "oxford-maths-computer-science-tmua-requirement",
    slug: "oxford-mathematics-computer-science-tmua-requirement",
    universityName: "University of Oxford",
    examId: "tmua",
    courseName: "Mathematics and Computer Science",
    registrationDeadline:
      "Typically August/September (register from 1 June) — check current UAT-UK guidance",
    sittingWindow: "October sitting only (mandatory for Oxford applicants) — check current UAT-UK guidance",
    callout:
      "From the January 2026 admissions overhaul, Oxford replaced the Mathematics Admissions Test (MAT), used since 2007, with the TMUA for Mathematics and Computer Science (including joint honours courses). If you've been working from MAT past papers, the good news is the underlying mathematical topics are similar and the problem-solving spirit carries over — but the format, timing, and question style are genuinely different, so old MAT papers should supplement, not replace, dedicated TMUA preparation.",
    body:
      "For nearly two decades, the MAT was the defining hurdle for Oxford Mathematics and Computer Science applicants — a long-form paper mixing multiple-choice and extended written questions, marked in Oxford, out of 100. That test no longer exists. From the 2026 admissions round onward, all Oxford applicants to Mathematics, Computer Science, and their joint honours variants sit the TMUA instead, the same test already used independently by Cambridge, Imperial, LSE, UCL, and Warwick for their own maths-related courses. The format is a genuine departure from the MAT: the TMUA runs 2.5 hours across two papers of 75 minutes each, with 20 multiple-choice questions per paper, and no calculators permitted. Paper 1 focuses on applying mathematical knowledge in unfamiliar problem-solving contexts; Paper 2 focuses more directly on mathematical reasoning — constructing and critiquing arguments, understanding what does and doesn't constitute a valid proof. Both draw on GCSE and AS-level content rather than requiring further maths, but the difficulty lies overwhelmingly in application and reasoning under real time pressure, not in advanced syllabus knowledge — a shift in emphasis from the MAT's occasionally syllabus-deep, multi-part written questions. There is no official pass mark; Oxford's admissions tutors use your TMUA score alongside your full UCAS application and school context to decide who to shortlist for interview, rather than applying a strict numerical cut-off. One genuine practical benefit of the change: if you're also applying to Imperial, UCL, LSE, or Warwick for a related course, a single TMUA sitting can now serve every application, whereas previously an Oxford applicant might have needed to sit the MAT and a separate university's TMUA. Oxford and Cambridge applicants must take the October sitting specifically — the January sitting exists for other universities and isn't accepted for Oxbridge entry — so don't assume you have until the new year to prepare. Practically: start with UAT-UK's own specimen TMUA papers rather than relying primarily on MAT archives, get comfortable with the tight per-question timing (roughly 3.75 minutes each), and practise justifying answers concisely, since Paper 2's reasoning focus rewards precision over length."
  },
  {
    id: "cambridge-imperial-lse-ucl-warwick-tmua-requirement",
    slug: "shared-tmua-requirement-cambridge-imperial-lse-ucl-warwick",
    universityName: "Cambridge, Imperial, LSE, UCL & Warwick",
    examId: "tmua",
    courseName: "Relevant mathematics, economics, and computer science courses",
    registrationDeadline:
      "Typically August/September for the October sitting, or check current UAT-UK guidance for the January window",
    sittingWindow:
      "October or January, depending on course and university — check current UAT-UK guidance",
    callout:
      "These universities have required the TMUA independently for several years, well before Oxford adopted it in the January 2026 admissions overhaul. Nothing has changed in how these institutions use the test — what's new is that Oxford Mathematics and Computer Science applicants now sit the same TMUA, which means one sitting can potentially satisfy applications to Oxford alongside any of these institutions, where previously Oxford required its own separate MAT.",
    body:
      "Unlike Oxford's recent switch, the TMUA is an established part of the admissions process at Cambridge, Imperial, LSE, UCL, and Warwick, and each uses it slightly differently, so checking your specific course page matters more here than almost anywhere else on this site. At Cambridge, TMUA-type reasoning is folded into a broader testing landscape alongside STEP and, for some science courses, the ESAT — Mathematics applicants at Cambridge should confirm current requirements directly, since Cambridge's approach to admissions testing varies by course and can differ from Oxford's even where both universities are TMUA-adjacent. Imperial requires the TMUA for Mathematics and several joint courses, using it as a genuine part of shortlisting given the volume and strength of its applicant pool. LSE uses the TMUA for a number of Economics-related courses, reflecting a broader pattern across UK admissions where the TMUA has become the shared standard for economics degrees with a strong quantitative core, not just pure mathematics. UCL's position is more mixed: some UCL Mathematics and Economics courses use the TMUA, while others — including some Computer Science routes — use the newer TARA instead, so don't assume TMUA covers every quantitative UCL course automatically. Warwick makes the TMUA mandatory for Computer Science but optional for Mathematics, where applicants can choose to sit STEP instead — worth thinking through if you're also applying to Cambridge, where STEP is more central. The test itself is unchanged across all these universities: 2.5 hours, two 75-minute papers, 20 multiple-choice questions each, no calculator, assessing mathematical application and reasoning rather than further-maths content. A significant practical advantage of this shared system is that, unlike the old landscape of bespoke university-specific tests, one TMUA sitting can now serve every university on this list that requires it for your course — sit once, and your score is available to all your applicable choices. The main exception is timing: Oxford and Cambridge applicants must use the October sitting, while Imperial, LSE, UCL, and Warwick generally accept either October or January, so if you're applying across both groups, October is the sitting that keeps every door open. Practically: map exactly which of your chosen courses require TMUA versus TARA versus STEP before you finalise a prep plan, since conflating them wastes valuable time."
  },
  {
    id: "oxford-english-language-literature-elat-requirement",
    slug: "oxford-english-language-literature-elat-requirement",
    universityName: "University of Oxford",
    examId: "elat",
    courseName: "English Language and Literature",
    registrationDeadline:
      "Typically early October (register from September) — check current Oxford ELAT guidance",
    sittingWindow: "Typically sat in late October, ahead of interview shortlisting",
    body:
      "The ELAT is one of Oxford's oldest surviving subject-specific admissions tests and, unlike several of Oxford's other assessments, it has not been swept up in the university's recent move toward shared UAT-UK testing — it remains an Oxford-run, close-reading exercise unique to the English Language and Literature course (and its joint honours variants). That continuity matters, because the ELAT is genuinely unlike most other admissions tests on this site: there are no multiple-choice questions, no calculators, and no abstract reasoning puzzles. Instead, candidates are given a booklet of unseen literary extracts — poetry and prose, spanning different periods and styles, usually connected by a shared theme or form — and asked to write a single comparative essay analysing two of them in close detail within 90 minutes. There is no reading list to revise and no canon of extracts to memorise, because the whole point of the test is to see how you respond, unaided, to material you've genuinely never encountered before. What Oxford's English tutors are looking for is evidence of close, attentive reading: sensitivity to how language, form, and structure create meaning, an ability to build a comparative argument rather than two separate mini-essays bolted together, and a critical voice that engages directly with the text rather than falling back on generic literary terminology. Strong ELAT essays tend to be selective rather than exhaustive — a tightly argued case built on a handful of well-chosen details beats a essay that tries to mention everything on the page. Because the extracts are genuinely unseen, the most effective preparation isn't memorising quotations or theory, but building the underlying habit: reading widely and unfamiliar poetry and prose regularly, and practising timed close-reading and comparison on material you haven't seen before, ideally under the same 90-minute constraint you'll face on the day. Past ELAT papers, freely available from Oxford's own website, are the single best resource for this, both for practice and for seeing the range of extract types and prompt styles the test has used historically. Register through your school or as an independent candidate ahead of the autumn deadline, and plan to sit the test at a registered centre in the weeks before Oxford's shortlisting decisions are made."
  }
]

export const UNIVERSITY_PAGE_MAP = new Map(UNIVERSITY_PAGES.map((p) => [p.slug, p]))

export function getUniversityPageBySlug(slug: string) {
  return UNIVERSITY_PAGE_MAP.get(slug)
}

export function allUniversityPages() {
  return UNIVERSITY_PAGES
}
