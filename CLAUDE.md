# Harness — SLOP3203 Autocomplete Studies (Assignment 2)

This file carries forward the working practices from last week's prototype
(`comp4020-crit5-lilth2`, a game) and adds the rules specific to building a
whole SlopU course site. Everything stack-specific from that repo (the
`public/card.png` link-preview convention, "plain HTML/CSS/TS") is dropped —
this is an Astro course-site template, not the generic static one. What
carries is the discipline, not the mechanics.

## Carried forward

- Keep the dev server running (`pnpm dev`) and look at the rendered page in a
  browser. The rendered page is the truth, not the source.
- Run `pnpm check` before every commit. Never commit a red state.
- When a check fails, read its output before changing anything.
- Check the site at **both** marking viewports — 1920×1080 and 390×844 —
  before calling any page finished. A page that only works on desktop is not
  done.

## The platform is fixed

`README.md` documents what's fixed (Slop branding, the four content
collections and their schema, `astro.config.ts`, the generated API,
`spec/data-integrity.test.ts`). Do not touch any of it to make a check pass —
if a check disagrees with content, fix the content. Never hand-edit anything
under `dist/`.

## This course, specifically

- **Course**: SLOP3203, *Autocomplete Studies* — "The Machine Finishes Your
  Sentence." The governing idea: every predictive-text system is a bet on what
  you'll want, dressed as a fact about what comes next, and that bet has a
  design history running from T9 to LLMs to generative fill. Every page —
  lecture, lab, assessment, policy — has to serve that one idea. If a piece of
  content could belong to any other course with the nouns swapped, it doesn't
  belong here; cut it or make it specific.
- **Course code**: keep the last three digits (`203`) — they were assigned to
  this repo and no other course in the cohort has them. The level digit (`3`,
  advanced undergraduate) was a deliberate choice for this course
  (technical-build-plus-critical-essay assessment suits students a couple of
  years into a CS/HCI major); don't change either digit without being asked.
- **No repeated weeks**: each of the 12 sessions (Labs) pairs with a distinct
  hands-on artifact and each lecture covers a domain the others don't (T9, IME,
  autocorrect, routing, smart replies, code completion, LLM chat, generative
  fill, forecasting, creative writing, persuasion). Before adding or editing a
  week, check it isn't a reworded copy of another week's spec or body —
  `spec/course-structure.test.ts` catches exact duplicate titles but a
  paraphrase under a different title will slip past it; that judgement call
  is the agent's, not the test's.
- **Tone**: sincere and specific, the way a real course site reads — not
  jokey, not a marketing brochure. No "unlock your potential," no
  self-aware jokes about SlopU being fake. Specificity is what makes a
  fictional course convincing; vagueness is what gives it away.
- **Image-free is deliberate, not a shortcut**: the starter's hero art and
  portraits are deleted, not replaced. A course about the artificiality of
  machine-generated continuations shouldn't lean on stock or AI-flavoured
  imagery to sell itself — see `PROCESS.md`. Don't reintroduce placeholder
  images to "fill space"; if an image is ever added, it must be specific to
  this course, not decorative filler.
- **Assessment weights must sum to exactly 100.** If you add, remove, or
  reweight an assessment, `spec/course-structure.test.ts` will fail loudly —
  fix the weights, don't loosen the test.

## Before treating anything as done

1. `pnpm check` — types, build, and all of `spec/*.test.ts`.
2. `pnpm check:evidence` — starter-content markers gone, PROCESS.md cited and
   resolving, CLAUDE.md present.
3. Look at it in a browser at both viewports.
4. Commit in small, labelled steps as content lands. A single giant commit at
   the end is itself a process failing, independent of what's in it.
