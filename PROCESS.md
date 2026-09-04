# Process overview

## What I built

SLOP3203, *Autocomplete Studies* — a course that treats predictive text as one
continuous design lineage rather than a recent AI phenomenon, running from
1990s T9 keypads through autocorrect, search, assistive input, code
completion, smart replies, chat, generative fill, forecasting, co-writing, and
recommendation feeds, closing with a guest lecture on persuasive design. Every
week is a variation on one stated tension — a small vocabulary, an ambiguous
signal, and a dictionary with opinions about what you probably meant — so the
twelve weeks read as one argument rather than twelve unrelated topics.

## How I got here

I started from the platform boundary in `README.md`: the Slop branding, the
four content collections, and the generated API are fixed, so the actual work
was entirely inside content and the course-specific spec checks. Course
identity came first — [`032f50c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/032f50c) sets the code to SLOP3203, keeping the
pre-assigned `203` and choosing the `3` level digit deliberately, since the
technical-build-plus-audit assessment structure suits students partway through
a CS/HCI degree, not first-years or postgrads.

I decided early to go image-free rather than fill the starter's hero and
portrait slots with stock or AI-generated art — a course about the
artificiality of machine-generated continuations leaning on decorative
AI-flavoured imagery to sell itself would undercut its own argument, so
[`b1d978d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/b1d978d) rewrites the home page and 404 around that decision
instead of working around it. Content followed in dependency order: people
([`5f61667`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/5f61667)) before the weeks that reference them by name, labs
([`8f793cd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/8f793cd)) and lectures plus the week 1 slide deck
([`5bf51e4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/5bf51e4)) before the assessments that cite specific weeks
([`97e4ef0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/97e4ef0)), then policies
([`92ce23a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/92ce23a)) once the tool-use rules had real assignments to
refer to.

Writing all twelve weeks surfaced the actual risk in a course like this: it's
easy to write twelve lectures that are really one lecture repeated with
different nouns. I checked this by re-reading the set for whether any week
could be moved elsewhere without a rewrite — the code-completion week only
works right after the AAC week's argument about prediction as access, and the
forecasting week only works because the smart-reply and chat weeks already
established the same evidence-first audit method. Nothing shipped catches a
reworded week — the platform's own `data-integrity.test.ts` only checks that
dated content falls inside the teaching period — so
[`a310708`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-lilth2/commit/a310708) adds `course-structure.test.ts`: distinct titles across
all 24 dated nodes, assessment weights summing to exactly 100, the deck
actually building at its linked path, and every week connected into the
graph rather than sitting isolated. That catches an exact reworded duplicate
by title; a genuine paraphrase under a different title still needs the
by-hand re-read above, not a test.

I verified the result three ways: `pnpm check` (typecheck, build, and both
test files) after every commit, `pnpm check:evidence` once this file's
citations existed to check, and a Playwright pass over the home page, a
lecture page, its deck, a lab page, and the assessments and people pages at
both 1920×1080 and 390×844 — confirming the deck's forced 16:9 letterboxing on
mobile is Reveal.js behaviour, not a bug, and that the 404 page still gets a
heading now that it has no hero image to supply one.
