---
title: "Assignment 1: Build a predictive input system"
description:
  A working predictive-text build in a domain of your choice, submitted with
  a short written account of exactly where and why it fails
week: 5
due: 2027-03-26T12:00:00+10:00
weight: 25
marking:
  mode: weighted
  criteria:
    - name: The build works on its stated inputs
      weight: 35
    - name: The failure-mode write-up is specific and evidenced
      weight: 45
    - name: The chosen domain is harder than the minimum viable version
      weight: 20
tags:
  - build
related:
  - sessions/05-assignment-1-clinic
  - lectures/week-05
spec:
  - a working predictive-text system in a domain covered by weeks 1 through 4
    (a keypad disambiguator, an autocorrector, a query completer, or an
    accessible-input predictor), runnable by the marker without your help
  - a written account, no more than 800 words, naming at least three specific
    inputs your build handles wrong, and explaining the mechanism behind each
  - the domain is not the T9 lab in its unmodified form — extend it, combine
    it with a second constraint, or pick a different week's domain entirely
---

## The brief

> Build a small predictive-text system, and be a better critic of your own
> build than anyone marking it will be.

Weeks 1 through 4 gave you four domains — keypad disambiguation, autocorrect,
query completion, accessible input — each with its own vocabulary, its own
signal, and its own way of going wrong. Pick one, build a working version of
it, and then do the harder part: find where it breaks, and say precisely why.

The build doesn't need to be sophisticated. A T9 disambiguator that also
handles a second, harder constraint — disambiguating whole two-word phrases,
say, or ranking by a frequency list you built yourself rather than
alphabetically — clears the bar. A straight copy of the week 1 lab does not,
because the brief is asking for a build you extended past the version
everyone in the room already has.

The write-up is worth more than the build. A working system with a shallow
write-up ("it doesn't always get the right word") will mark lower than a
rougher system whose write-up correctly identifies the mechanism behind each
failure — because identifying the mechanism is the skill this course is
actually teaching.

## What you submit

- source for your build, with enough instructions that a marker can run it
  without asking you anything
- a written failure-mode account, under 800 words, as a separate document
- a one-line statement of which week's domain you extended, and how
