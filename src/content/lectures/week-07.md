---
title: Conversational completion — the chatbot as autocomplete
description:
  The first lecture back after the break, arguing that a conversational
  model is best understood as autocomplete operating at paragraph scale
week: 7
date: 2027-04-12
teachers:
  - callum-voss
tags:
  - language models
related:
  - sessions/07-continuation-swap-lab
---

Welcome back. Everything before the break — T9, autocorrect, query
completion, AAC prediction, code completion, smart replies — predicted
something short: a word, a phrase, a fixed reply. This week scales the same
idea up until it produces something that talks back.

A large language model, at the mechanical level this course cares about, is
still doing what week 1's keypad dictionary did: given what's come so far,
rank what's likely to come next, and emit the top of the ranking. The unit
just changed, from a letter given a keypress to a token given everything
written before it, including the entire conversation and a system prompt
nobody using the chat interface can see. Scale changes what the prediction
can do — coherent paragraphs, an argument that holds together for a page —
without changing what it fundamentally is: a very well-tuned guess about
what comes next, with no separate mechanism that checks whether the guess
is true.

That's the uncomfortable continuity this lecture wants to land: a chat
interface presents its output as an answer, in a register that invites
trust an autocomplete bar never did, but the thing generating it is closer
to autocomplete than to anything that has verified what it's saying. The
lab asks you to notice the seam.

## Outline

- from token prediction to paragraph-length output: what scaled, what didn't
- why a confident wrong answer and a confident right answer look identical
  from the inside of a completion system
- the conversation as a growing prompt, and what that means for a system
  prompt you can't see
- what the lab's continuation-swap exercise is testing
