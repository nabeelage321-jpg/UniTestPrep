# Claude Code — Complete Build Prompt Set
## For use with the Claude Code VS Code extension, alongside this Claude.ai chat for planning/research

---

## Step 0 — Repo setup (do this before opening Claude Code)

1. Create your project folder, e.g. `uk-admissions-prep/`
2. Copy `agent.md` into the folder root
3. Export your v0 project into this same folder (GitHub sync, or the "Add to codebase" CLI command v0 gives you) — so the four designed screens (homepage, test interface, results dashboard, finder tool) already exist as real files before Claude Code touches anything
4. Sign up at console.groq.com (free, no credit card) and generate an API key — this powers the live site's AI features (study plans, explanations, question generation). Add it to a `.env.local` file as `GROQ_API_KEY=your_key_here` — do NOT commit this file to git (add it to `.gitignore`)
5. Open the folder in VS Code with the Claude Code extension installed and signed in
6. Run `claude` in the VS Code terminal, or open the extension panel

---

## PROMPT 1 — Orientation (paste first, always)

```
Read agent.md in full before doing anything else. Also inspect the existing project structure —
I've already imported a v0-designed frontend into this repo covering: the homepage, the
test-taking interface, the results dashboard, and the "Which Test Do I Need?" finder tool.

Do the following, in order:
1. Confirm you've read agent.md and summarize back: which exams this covers, current build
   priority (Section 6 and Section 14), and what pages/components already exist from the v0
   import vs what's still missing.
2. Map the existing v0 components to the page architecture in Section 3 of agent.md — tell me
   which Cluster 4 (interactive tests) and Cluster 1 (homepage) needs are already partially
   covered by what I imported, and what's still a placeholder or missing logic.
3. Do NOT rewrite or restyle anything v0 already built. Your job is to wire up logic, data, and
   backend behind the existing UI — not redesign it. If something in the v0 export is broken or
   incomplete, tell me before fixing it rather than silently rewriting the design.
4. Ask any clarifying questions before we start Stage 1 below.

Keep your own CLAUDE.md short — a quick-reload summary for future sessions, not a copy of
agent.md.
```

---

## PROMPT 2 — Stage 1: "Which Test Do I Need?" finder tool (build this first)

```
Now let's make the "Which Test Do I Need?" finder tool from agent.md Section 13 fully functional.
The v0 export already has the UI for this — your job is the data layer and logic.

1. Build the data structure exactly as specified in Section 13: university | course |
   required_test | old_test_if_changed | registration_deadline | sitting_window | test_hub_url
2. Populate it with real data for: LNAT (8 universities), TARA (Oxford PPE/Econ&Management/Human
   Sciences, Cambridge), TMUA (Oxford Maths/CS, Cambridge, Imperial, LSE, UCL, Warwick), ELAT
   (Oxford) — per the exam table in Section 2.
3. Wire the existing finder UI to this data: university selection filters course options, course
   selection returns the result card with test name, description, deadline, sitting window, and
   the "used to require X, now requires Y" callout where relevant.
4. Add the two CTAs at the end of the result card, linking to placeholder routes for the test hub
   page and university requirement page (we'll build those next).
5. Add FAQ schema markup (JSON-LD) per Section 6, addressing the confusion phrases named in
   Section 13's SEO angle.

This should not need a backend/database yet — keep it as a client-side JSON lookup for now, per
the build approach in Section 13.
```

---

## PROMPT 3 — Stage 2: TMUA + TARA interactive mock test engine (build priority per Section 14)

```
Now build the interactive mock test engine for TMUA and TARA first — these are our build
priority per agent.md Section 14 (first-mover advantage, no competing free platform found).

Using the existing v0-designed test-taking interface as the frontend:
1. Build the timer logic: TMUA = 2 papers x 75 min each; TARA = 3 modules x 40 min each (per
   Section 3, Cluster 4 specs)
2. Build the question-bank data schema and API needed to serve questions into the existing UI
   (multiple choice for TMUA, mixed MCQ + written response for TARA)
3. Build the scoring engine: instant score on submission, section-wise diagnostic breakdown
   feeding into the existing v0 results dashboard component
4. Wire up the email-capture gate on the results dashboard per Section 13's Tier 1 requirements
5. For AI-generated content (practice questions, reasoning-step explanations), use the Groq API
   with the OpenAI-compatible endpoint (base URL: https://api.groq.com/openai/v1, model:
   llama-3.3-70b-versatile) rather than the Claude API — this is a free-tier provider decision
   per agent.md's tech stack. Populate the question bank with a small initial set of original
   AI-generated practice questions that mimic TMUA/TARA format and difficulty — NOT reproductions
   of any real past paper. Flag every question with `reviewed_by: null` so I know it still needs
   human review before this goes live, per Section 5's content rules.

Confirm the full flow works end to end (start test -> answer questions -> timer expires or
submits -> see results) before we move to LNAT/ELAT.
```

---

## PROMPT 4 — Stage 3: LNAT + ELAT interactive mock tests

```
Now extend the same test engine you just built for TMUA/TARA to cover LNAT and ELAT.

- LNAT: 42 MCQs across 12 passages, 95-minute timer for Section A, plus a separate essay module
  for Section B (500-750 words, word counter visible, per the format described in agent.md
  research)
- ELAT: format-matched equivalent per Section 3 — passage comparison plus essay component

Reuse the existing scoring/timer/results infrastructure rather than duplicating it — this should
mostly be new question-bank content and exam-specific timer/section configuration, not new
architecture.

Per Section 3.5's competitor research: no competitor currently offers a complete free LNAT mock
with full diagnostic breakdown gated behind nothing. Make sure our LNAT flow doesn't have any
paywall or teaser gate before the full test — that's our differentiation angle.
```

---

## PROMPT 5 — Stage 4: Section/skill practice pages (Cluster 2)

```
Build the section/skill practice pages from agent.md Section 3, Cluster 2 (~16 pages):
- LNAT: Reading Comprehension, Critical Thinking/Argument ID, Logical Reasoning, Essay Writing
  Guide, Essay Prompt Bank, Essay Marking Criteria
- TARA: Critical Thinking module, Problem Solving module, Written Response guide, Sample
  Written Responses
- TMUA: Applications of Mathematical Knowledge, Mathematical Reasoning, Multiple Choice
  Strategy Guide
- ELAT: Passage Comparison, Close-Reading Technique, Sample Essay Responses

Build these as genuinely distinct content per page (not template-swapped) per the 60% uniqueness
rule in Section 6. Each page should link back to the relevant full mock test and the exam hub
page.
```

---

## PROMPT 6 — Stage 5: University-requirement pages (Cluster 3 — highest thin-content risk)

```
Build the university-requirement pages from agent.md Section 3, Cluster 3 (~14 pages).

This is flagged in Section 6 as the highest thin-content risk cluster. For every page, include
at minimum:
- The real registration deadline and sitting window for that specific university/test combo
- Specific course context (not generic boilerplate)
- A link to the "Which Test Do I Need?" finder tool and the relevant mock test

Do not generate these as template-variable swaps of each other. Each page needs its own genuinely
distinct unique data point, per the 60% uniqueness rule in Section 6. If you're about to write
a paragraph that's structurally identical to another university's page with just the name
swapped, stop and tell me — that's the exact pattern that gets pages penalized per Section 6's
March 2026 Core Update context.
```

---

## PROMPT 7 — Stage 6: Supporting/comparison content (Cluster 5 — build last)

```
Build the supporting/comparison content pages from agent.md Section 3, Cluster 5 (~13 pages):
comparison pages, exam dates, scoring/percentile explainers, and the pillar guide.

Per Section 6, these need named-author review — before publishing any of these pages, stop and
ask me for the author bio/credentials to attach, rather than leaving them anonymous.
```

---

## Ongoing hygiene prompts (use throughout, not just once)

**Before things get slow or context feels bloated:**
```
/compact
```

**To check what's actually loaded if something feels off:**
```
/context
```

**When asking for a fix, point to the exact file/section rather than "look through everything":**
```
In [exact file path], the [specific function/component] is doing [specific wrong behavior].
Fix only that — don't touch other files.
```

---

## Division of labor reminder

- **v0** — already used, gave you the visual layer (don't re-prompt it unless you need a new screen)
- **Claude Code** — runs Prompts 1-7 above, in order, building the real logic/data/scale
- **This Claude.ai chat** — bring back anything Claude Code gets stuck on, new research questions (keyword data, more competitor checks), or copy/content drafting help
