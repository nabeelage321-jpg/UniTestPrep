# Project: UK Admissions Test Prep Platform
## agent.md — Build Specification v1.0

---

## 1. Project Overview

**Name (working title):** TBD (suggest: "AdmitPrep UK", "OxTest", "UniTestPrep" — finalize during domain research)

**One-line pitch:** A free, interactive practice-test platform for UK university-specific admissions exams, built to give applicants real exam-format confidence before test day, monetized through ads/affiliate/lead-gen rather than paywalled content.

**Core hypothesis being tested:** Students applying to UK universities requiring subject-specific admissions tests (not centralized like SAT/ACT) will use free, high-quality mock tests as a trust-building funnel, converting to email capture and downstream monetization.

**Target country:** United Kingdom
**Target audience:** UK sixth-form students (Year 12/13) and international applicants to UK universities, ages 16-19, applying to Oxbridge and competitive law/humanities/STEM programs.

---

## 2. Scope — Exams Covered (Phase 1)

**⚠️ REVISED January 2026:** Oxford discontinued MAT and TSA (along with PAT, MLAT, CAT, PhilAT, BMSAT, AHCAAT) as of the 2027 entry cycle, replacing them with three shared UAT-UK tests (TMUA, ESAT, TARA) delivered via Pearson VUE. Original blueprint updated accordingly.

| Exam | Full Name | Subject Area | Universities Requiring | Notes |
|---|---|---|---|---|
| LNAT | National Admissions Test for Law | Law | Oxford, Cambridge, UCL, Bristol, Durham, Glasgow, SOAS, KCL | Unchanged, established market |
| **TARA** *(replaces TSA)* | Test of Academic Reasoning for Admissions | PPE/Econ & Management/Human Sciences | Oxford, Cambridge (via UAT-UK) | Brand new test — no official past papers released since 2024 policy change. First-mover content gap. |
| **TMUA** *(replaces MAT)* | Test of Mathematics for University Admission | Maths/CS | Oxford, Cambridge, Imperial, LSE, UCL, Warwick (via UAT-UK) | Same first-mover gap as TARA — widely shared across G5 universities, higher search volume than old MAT alone |
| ELAT | English Literature Admissions Test | English | Oxford | Unchanged, low competition, lower volume |

**Explicitly excluded from Phase 1:**
- UCAT (heavily saturated by Medify/Medic Mind/PassMedicine — revisit in Phase 2 once domain authority is established)
- **ESAT** (Engineering and Science Admissions Test) — flagged as a strong Phase 2 candidate. Same first-mover content gap as TMUA/TARA, but modular multi-subject format (Maths/Physics/Chemistry/Biology) adds build complexity — revisit once TMUA/TARA/LNAT/ELAT are live and validated.

**Key dates driving urgency:** Oxford candidates must register for UAT-UK tests by 28 September 2026 and sit the October 2026 window only (January sitting not valid for Oxbridge). This creates a concentrated, time-boxed search-demand spike worth building toward now.

---

## 3. Site Architecture (Page Clusters)

### Cluster 1 — Exam Hub Pages (4 pages)
Master landing page per exam. Primary keyword target, internal-link hub for all sub-pages.

### Cluster 2 — Section/Skill Practice Pages (~16 pages)
- LNAT: Reading Comprehension, Critical Thinking/Argument ID, Logical Reasoning, Essay Writing Guide, Essay Prompt Bank, Essay Marking Criteria
- TARA: Critical Thinking module, Problem Solving module, Written Response/Section 3 guide, Sample Written Responses
- TMUA: Applications of Mathematical Knowledge (Paper 1), Mathematical Reasoning (Paper 2), Multiple Choice Strategy Guide
- ELAT: Passage Comparison, Close-Reading Technique, Sample Essay Responses

*Note: TARA/TMUA section pages are being built with no official past-paper archive available (body stopped releasing past papers in 2024) — content must be built from official UAT-UK sample materials + original AI-generated format-matched questions, clearly labeled as unofficial practice, not reproductions.*

### Cluster 3 — University-Specific Requirement Pages (~14 pages)
Exam × University combination pages. **Must include unique data per page** (real deadlines, fees, specific course context, admission stats) — NOT template-swapped generic text. This cluster carries the highest thin-content risk (see Section 6).

- LNAT: Oxford, Cambridge, UCL, Bristol, Durham, Glasgow, SOAS, KCL (8 pages)
- TARA: Oxford (PPE, Economics & Management, Human Sciences), Cambridge (2 pages)
- TMUA: Oxford (Maths, Computer Science), Cambridge, Imperial, LSE, UCL, Warwick (2 pages, grouped by shared relevance)
- ELAT: Oxford (1 page)

*Registration/deadline data point for TMUA/TARA pages: October 2026 sitting only for Oxbridge, registration closes 28 September 2026 — use as the real unique data hook per page rather than generic template text.*

### Cluster 4 — Interactive Demo Tests (4 pages)
The core product. Real timed, scored mock exams:
- LNAT: 42 MCQs, 12 passages, 95-minute timer (Section A) + essay module (Section B)
- TARA: 3 modules × 40 min each (Critical Thinking, Problem Solving, Written Response)
- TMUA: 2 papers × 75 min each (Applications of Mathematical Knowledge, Mathematical Reasoning), 40 MCQs total, no penalty for wrong answers
- ELAT: format-matched equivalent (passage comparison + essay)
- Must include: instant scoring, section-wise diagnostic breakdown, email-gate for full report
- **Build priority: TMUA and TARA first** — first-mover advantage, no competing free interactive platform found

### Cluster 5 — Supporting/Comparison Content (~13 pages)
Comparison pages, exam dates, scoring/percentile explainers, pillar guide. Requires named-author review (see Section 6).

**Total: ~54 pages** — deliberately kept lean, not a 1,000+ page volume play.

---

## 3.5 Competitor Landscape (researched July 2026)

**LNAT — established, moderately competitive market**
| Competitor | Free offer | Paid offer |
|---|---|---|
| Lexcello | 14-Q timed test w/ explanations (account req.) | 10 full-length mocks (42Q/95min) |
| The Lawyer Portal | 80+ Q bank, timed, scored | Full prep packages + workshops |
| Exams Ninja | Basic calibration test | 1,100+ Section A & B questions, tutorials |
| PracticeAptitudeTests.com | 1 full free test | Mostly free/ad-supported |
| Dukes Plus | Sample test | 1-on-1 tutor bookings |

**Gap identified:** no competitor offers a complete free 42-question/95-minute mock with full diagnostic breakdown — most gate the full experience behind signup/paywall after one free test. This is our differentiation angle for LNAT.

**TMUA / TARA / ESAT — early-stage, low competition (first-mover window)**
Prep providers (UEIE, Exams Ninja, U2 Tuition, Oxbridge Mentors, William Clarence, Athena Tuition) are currently positioned around advisory content, video lectures, and tutoring upsells — not clean interactive free mock-test platforms. Since official past papers stopped being released in 2024, no one has an authoritative practice archive yet. **This is the single best opportunity in the whole project** — build here first.

**ELAT — light competition, folded into general Oxford-English advisory content, no dedicated practice platform found.**

---

## 4. Tech Stack

- **Frontend:** Next.js + Tailwind CSS + shadcn/ui (this exact combination is what v0 by Vercel outputs natively — see Section 14 for the design workflow)
- **UI design layer:** v0 by Vercel for high-visibility screens (homepage, test interface, results dashboard, finder tool), exported into the main repo
- **Backend:** Node.js/Express for scoring engine, question bank API
- **Database:** Structured data source (Postgres or similar) for exam/university/question metadata — feeds page templates programmatically
- **Live-site AI features:** Groq API (free tier, OpenAI-compatible endpoint) powering AI-generated study plans, reasoning-step answer explanations, and original question generation. Model: Llama 3.3 70B via Groq for quality-sensitive tasks. Free tier is rate-limited (~30 requests/minute) — sufficient for MVP/early traffic; upgrade to Groq's Developer tier (still free, card-on-file unlocks 10x limits + discount) once real traffic requires it. Note: Groq serves open-source models only, not Claude — kept separate from the Claude Code / Claude.ai tooling used to *build* the site.
- **Email capture:** Integrated with results-gate flow
- **Schema markup:** JSON-LD per page type (Course, FAQPage, HowTo where applicable) baked into templates, not bolted on
- **Deployment:** Vercel (native fit for Next.js + pairs directly with v0 export/deploy pipeline)

---

## 5. Content Rules — Copyright & Quality

- AI-generated questions must mimic **format and difficulty only** — never reproduce or closely paraphrase real leaked/official past papers (LNAT/TARA/TMUA/ELAT past papers, where they exist, are copyrighted by their administering bodies).
- Every question bank entry needs human review before publish (flag in CMS: `reviewed_by`, `review_date`).
- No page ships without at least one genuinely unique data point (not just name-swapped template) — see Section 6 for the uniqueness bar.

---

## 6. SEO Strategy & 2026 Compliance Requirements

**Context:** Google's March 2026 Core Update specifically penalized programmatic/scaled content operations (40-70% traffic drops in that segment). "Scaled content abuse" is now a named, actively enforced spam category.

**Non-negotiable rules for this build:**
1. **≥60% unique content per page** — no page may be a pure variable-swap of another.
2. **Named author/reviewer required** on every content page — real bio, credentials, linked profile. Anonymous AI-authored pages are the primary target of recent updates.
3. **Cluster 3 (university pages) and Cluster 5 (comparison pages) are highest risk** — each must carry original data (real deadlines, sourced fees, specific stats), not generic template text.
4. **Interactive test pages (Cluster 4) are lowest risk** — functional tools are treated like legitimate programmatic pages (Zillow/Airbnb model), not doorway pages.
5. **Thin/low-value pages get noindexed, not published** — a smaller clean index outperforms a large thin one under current algorithm behavior.
6. **Core Web Vitals matter more than ever** — INP and LCP thresholds directly affect ranking recovery speed.

**Build sequencing (revised per rankability audit + competitor research):**
1. **TMUA + TARA interactive demo tests** — first-mover window, no competing free platform exists, build these two first regardless of engineering difficulty
2. LNAT + ELAT interactive demo tests — established markets, differentiate on completeness (full test free, not gated teaser)
3. Section/skill practice pages (~16) — genuine utility, medium effort
4. University-requirement pages (~14) — build slowly, one unique data point minimum per page (registration deadlines are a ready-made hook)
5. Supporting/comparison content (13) — build last, needs named-author review layer

---

## 7. Monetization Plan (must be defined before scale-up)

- Display ads (UK RPM is high — primary revenue at volume)
- Affiliate partnerships (UK tutoring/prep companies)
- Lead-gen sale to UK tutoring centers (qualified applicant leads via email capture)
- Future upsell path: paid full-length additional tests / AI-personalized study plan

**Decision needed before Phase 2:** which of the above is primary vs. secondary — do not scale content until funnel conversion is validated on the first exam.

---

## 8. Success Metrics / KPIs

- Indexation rate (% of published pages indexed by Google Search Console)
- Organic traffic per page (identify which cluster performs best)
- Email capture conversion rate on demo tests
- Time-on-page / bounce rate (engagement proxy for E-E-A-T signal)
- Ranking position tracked per exam cluster, not site-wide

---

## 11. Feature Specification

### Tier 1 — Competitor Parity (must-have, table stakes)
Every one of these exists on at least one competitor site — skipping any of them makes you look incomplete by comparison:
- Timed mock tests replicating real exam format and section timing exactly
- Instant scoring at test completion
- Answer explanations for every question (not just correct/incorrect flag)
- Question bank organized by section/skill (not just full mocks)
- Progress tracking across multiple attempts (logged history)
- Performance analytics — strengths/weaknesses breakdown by skill area
- Percentile/average comparison against other test-takers on the platform
- Realistic on-screen interface mimicking the official computer-based test (Pearson VUE style)
- Fully browser-based, no download/install required
- Free account signup (low-friction, email only)
- Written tutorials/study guides per section
- University requirement FAQ pages

### Tier 2 — Advanced Features (to actually outrank and out-convert competitors)
None of the competitors researched combine these — this is where you differentiate:
- **Adaptive difficulty** — question difficulty adjusts based on live performance (no competitor found does this)
- **AI-generated personalized study plan** — using the existing Claude API stack, auto-generate a weak-area-focused revision plan after each mock
- **Reasoning-step explanations** — AI walks through *why* an answer is right/wrong step-by-step, not just a static answer key (especially valuable for TARA/TMUA reasoning-style questions)
- **Spaced-repetition weak-area drilling** — auto-resurfaces previously-missed question types instead of static question banks
- **Score-to-offer likelihood estimator** — cross-reference score against published admission stats where available (huge trust/differentiation signal if data-backed and clearly sourced)
- **Deadline-aware nudges** — email/on-site countdown tied to real registration dates (28 Sept 2026 close, October sitting) — turns urgency into retention
- **Downloadable PDF performance report** — shareable with parents/school counselors, doubles as a lead magnet and backlink bait ("counselors recommend this tool")
- **Schema-optimized FAQ/HowTo markup** — targets featured snippets, which matters more given how confused current search results are about which test replaced what (TMUA vs MAT vs TSA vs TARA)

### Tier 3 — Net-New Tools (nobody in this space is building these — real differentiation)
- **"Which Test Do I Need?" Interactive Finder** — a short quiz (course + university → correct test). Given the current market confusion from the 2026 Oxford overhaul (search results literally warn "if anyone tells you MAT/PAT, that's outdated"), this solves a real, current, high-anxiety pain point no competitor addresses directly. High shareability, high backlink potential from school counselors.
- **Application Timeline Tracker** — merges UCAS deadlines + admissions test registration windows + interview prep dates into one tool. Extends your relevance beyond just test day.
- **Oxbridge Interview Question Simulator** — since students who clear these tests move straight to interviews, an AI-driven mock interview tool extends the funnel (and your session time/engagement) well past the test-prep stage — nobody found combines test prep + interview prep in one platform.
- **Personal Statement AI Critique Tool** — natural upsell adjacent to test prep, reuses your Claude API integration, addresses another real pain point in the same application journey.
- **Embeddable Deadline Countdown Widget** — school/counselor blogs can embed it, giving you organic backlinks for free.

**Sequencing recommendation:** Ship Tier 1 in full before launch (non-negotiable baseline). Layer in 2-3 Tier 2 features at launch as your headline differentiators (adaptive difficulty + AI study plan are the highest-leverage). Hold Tier 3 tools for post-launch — they're strong retention/backlink plays once you have initial traffic, not day-one requirements.

---

## 12. Open Decisions (flag for next session)

- [ ] Finalize domain name
- [ ] Confirm named author/reviewer for E-E-A-T (real person, credentials)
- [ ] Confirm primary monetization channel
- [ ] Confirm CMS/data source structure for programmatic template feeding
- [ ] Validate keyword volume + competition data per exam before final build sequencing

## 13. "Which Test Do I Need?" Finder Tool — Detailed Spec

**Why this is the priority build:** current search results are full of confused, contradictory advice following the January 2026 Oxford overhaul (e.g. "if anyone tells you PAT or MAT, that's outdated"). No competitor has built a dedicated tool to resolve this — it's a live, current pain point with real search intent behind it (parents and students searching things like "which test do I need for Oxford PPE 2027", "is MAT still required").

### User flow
1. **Entry question:** "Which university are you applying to?" (Oxford / Cambridge / Imperial / LSE / UCL / Warwick / Other)
2. **Course selection:** dropdown filtered by chosen university (e.g. Oxford → PPE, Maths, Computer Science, Physics, Law, English, Human Sciences, etc.)
3. **Instant result card:**
   - Required test name (LNAT / TARA / TMUA / ESAT / ELAT / UCAT / none)
   - One-line description of what it tests
   - Registration deadline + sitting window (auto-pulled from data table, e.g. "28 September 2026 close, sit 12-16 October 2026")
   - Direct link to that test's hub page and free demo test
   - Flag if the course previously required a now-discontinued test (e.g. "This course used to require the MAT — that changed in Jan 2026. You now need the TMUA.") — this reframing directly targets the exact confusion search results show right now

### Data structure (feeds the logic, keeps it programmatic not hardcoded)
```
university | course | required_test | old_test_if_changed | registration_deadline | sitting_window | test_hub_url
```
Populate this table once, and the tool + any future course/university additions become a config update, not new code.

### Build approach
- Simple client-side logic (no backend needed) — a JSON lookup table + a short React/HTML form, fast to ship
- Mobile-first — most of this search traffic will be on phones (parents googling on the go, students between classes)
- End state should always offer two CTAs: "Take the free [Test] practice test" (drives to Cluster 4) and "See full [University] requirements" (drives to Cluster 3 page) — this tool becomes the internal-linking hub tying your whole site together

### SEO angle
- Target page: `/which-test-do-i-need/` as a standalone landing page, plus embed the tool inline on each university-requirement page (Cluster 3) so it doubles as an interactive element that increases dwell time on those pages too
- FAQ schema markup addressing the exact confusion phrases search results are already surfacing ("Is MAT still required for Oxford?", "What replaced the TSA?") — strong shot at featured snippets given how fresh and unresolved this confusion still is

### Priority
Build this **before** the full interactive mock tests if needed — it's far faster to ship (no timer/scoring engine required) and can start capturing confused-search traffic immediately while the harder TMUA/TARA mock engines are still in development.

---

## 14. Design & Build Workflow (Tool Chain)

**Problem being solved:** unbriefed AI code generation defaults to generic, templated visual output ("AI slop") that won't build trust with a stressed 17-18 year old applicant. Solution is a two-tool pipeline, not a single tool doing everything:

**Stage 1 — Visual design (v0 by Vercel)**
- Use v0 to design the high-visibility screens: homepage, exam hub pages, the test-taking interface, results dashboard, and the "Which Test Do I Need?" finder UI
- v0 outputs React + Next.js + Tailwind + shadcn/ui — matches this project's stack exactly, so nothing needs translating
- Give v0 a real design brief before prompting (audience: stressed UK sixth-formers; tone: calm, credible, not corporate or childish; each exam's page should have its own distinct visual identity, not one template with swapped text)
- Export via the "Add to codebase" CLI command or GitHub sync into the real project repo

**Stage 2 — Logic, data, and scale (Claude Code)**
- Claude Code takes the v0-designed frontend and wires up: scoring engine, timer logic, database/data-source layer feeding the ~54-page programmatic template system, email-capture flow, schema markup, and deployment
- Claude Code is also the tool for scaling the design system across all ~54 pages once the core templates are approved — v0 designs the pattern once, Claude Code applies it consistently at scale
- Reference this agent.md directly as the project's CLAUDE.md context so build decisions stay aligned with the spec

**Division of labor, in short:** v0 = look and feel of the key screens. Claude Code = everything structural, data-driven, and repeated at scale.

---

## 15. Explicitly Out of Scope (Phase 1)

- UCAT (revisit Phase 2)
- Any non-UK exam/country
- Paid-only content model
- Full-scale 100+ page rollout before funnel validation
