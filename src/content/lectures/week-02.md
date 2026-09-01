---
title: Autocorrect and the comedy of failure
description:
  Why the same system that quietly fixes most of your typos occasionally
  produces something you'd never have written on purpose
week: 2
date: 2027-03-01
teachers:
  - callum-voss
tags:
  - failure modes
related:
  - sessions/02-autocorrect-post-mortem
links:
  - label: Autocorrection — Wikipedia
    url: https://en.wikipedia.org/wiki/Autocorrection
---

Autocorrect is the predictive-text system people notice least when it works
and complain about most loudly when it doesn't, and that asymmetry is the
whole lecture. A correction that fixes "teh" to "the" a thousand times a day
generates no screenshots. The one correction in ten thousand that turns a
name into an unrelated word, confidently and without asking, is the one that
ends up quoted back at the system as evidence it's broken.

It isn't broken; it's doing exactly what it was built to do, which is bet on
the statistically likely word over the literal one you typed. The lecture
walks through why that bet is right almost all the time and spectacular the
rest of it — edit-distance scoring, a dictionary with an opinion about what
counts as a real word, and no mechanism at all for knowing when the input
was deliberate rather than a typo. A system that can't tell a mistake from a
choice will occasionally correct the choice.

## Outline

- why "aggressive but usually right" beats "cautious but often unhelpful",
  as a design decision someone actually made
- edit distance and dictionary weighting: two knobs, one failure mode
- what a correction can't know about intent, and why that's structural, not
  a bug someone forgot to fix
- what the lab is looking for when it asks you to go find failures
  deliberately
