---
title: Autocorrect post-mortem
description:
  A lab spent deliberately breaking an autocorrect implementation, then
  writing up why each break happened
week: 2
date: 2027-03-04
teachers:
  - callum-voss
tags:
  - failure modes
related:
  - lectures/week-02
  - assessments/assignment-1
spec:
  - you have found at least three inputs that your chosen autocorrect
    implementation corrects wrong, and can reproduce each one on demand
  - for each, you can name the specific mechanism that produced the wrong
    correction, not just that it happened
  - you can describe one change that would fix your worst example without
    obviously breaking something else
---

## Before the lab

Pick one autocorrect you have access to and can inspect the behaviour of —
your phone keyboard, a word processor, a code editor's spell-fix. You don't
need source access; you need the ability to type things into it repeatedly
and watch what comes out.

## In the lab

Work in pairs, each trying to break the other's chosen system faster than
they can explain why it happened. A correction is only useful evidence once
you can say why it happened — "it changed my name" is a complaint; "it
scored the dictionary word two edits away higher than my name at zero
edits, because my name isn't in its dictionary" is the post-mortem.

The last part of the lab is a short group pass over the ugliest examples in
the room, sorted into a small number of mechanisms — the same three or four
causes tend to explain almost everything.

## Afterwards

Keep your failures on hand. Assignment 1 asks you to build something in this
family, and a working knowledge of how these systems fail — not just that
they do — is most of what separates a build that gets the interesting parts
right from one that reinvents the same failure without noticing.
