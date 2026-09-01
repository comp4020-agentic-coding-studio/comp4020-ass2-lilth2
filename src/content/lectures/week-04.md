---
title: Prediction as access — AAC and assistive input
description:
  What predictive text looks like when it's the only way someone composes
  language at conversational speed, not a convenience layered on top of typing
week: 4
date: 2027-03-15
teachers:
  - callum-voss
tags:
  - accessibility
related:
  - sessions/04-aac-scanning-lab
---

Everything so far has treated prediction as a shortcut for someone who could,
in principle, type the whole word. Augmentative and alternative communication
devices — the tablets and dedicated hardware used by people who can't
reliably produce speech or handwriting at conversational speed — remove that
assumption. For a user selecting words one scan-step at a time, prediction
isn't shaving a few keystrokes off something they could do anyway; it's the
difference between finishing a sentence in the length of the conversation or
finishing it after everyone has moved on.

That changes what the design problem is. A word-prediction error in a
messaging app costs a laugh and a correction. A word-prediction error in an
AAC device, or a prediction list that buries the word someone needs behind
six more common ones, costs turns in a conversation that don't come back.
The lecture treats accessible input as the setting where every property
this course has discussed so casually — how ranking works, how a vocabulary
gets built, whose language counts as "common" — turns out to matter enough
that getting it wrong is a rights issue, not a UX complaint.

## Outline

- scanning input and why prediction quality is a speed multiplier, not a
  nicety, in this setting
- vocabulary design: whose words end up ranked first, and who decided
- what "the user can always type the long way" fails to account for
- the lab's device-free simulation, and why it's more frustrating than you
  expect
