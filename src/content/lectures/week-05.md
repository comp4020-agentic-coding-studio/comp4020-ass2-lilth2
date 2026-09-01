---
title: Code completion, from IntelliSense to Copilot
description:
  Predictive text applied to a language with a grammar checker built in, and
  what changed when the completion stopped being confined to your own file
week: 5
date: 2027-03-22
teachers:
  - callum-voss
tags:
  - code
related:
  - sessions/05-assignment-1-clinic
  - assessments/assignment-1
links:
  - label: GitHub Copilot — Wikipedia
    url: https://en.wikipedia.org/wiki/GitHub_Copilot
---

Code completion had a twenty-year head start on being taken seriously,
because a program either compiles or it doesn't, which makes "did the
suggestion help" much easier to measure than it is for prose. Early
autocomplete in an editor was narrow and mechanical: given the symbols
already declared in scope, list the ones matching what's typed so far. It
was prediction with the vocabulary fixed by the compiler, which is close to
the T9 problem again — a small, well-defined space of valid completions.

Large-model code completion broke that constraint on purpose. A tool like
Copilot isn't limited to symbols already in scope; it will happily suggest a
function that doesn't exist, calling conventions from a different library,
or a whole implementation lifted in spirit from code it saw during training
that has nothing to do with your project. That's a different kind of
prediction problem — not "what could this symbol legally be," but "what
does code that looks like this usually do next" — and it inherits both the
power and the failure modes of every other model-driven prediction this
course has covered, applied somewhere a wrong guess used to be caught by a
compiler and now sometimes isn't.

## Outline

- scope-based completion versus model-driven completion: two different
  guesses, two different failure shapes
- when a plausible-looking suggestion is worse than no suggestion, because
  it compiles
- what changes about "who wrote this" once completion suggests whole
  functions
- Assignment 1's brief, and what the clinic session after this lecture
  covers
