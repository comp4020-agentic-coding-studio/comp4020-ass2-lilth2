---
title: Build a T9 disambiguator
description:
  The first lab — turn a keypress sequence into a ranked list of real words,
  using nothing but a dictionary and a mapping of letters to keys
week: 1
date: 2027-02-25
teachers:
  - priya-nandakumar
tags:
  - constrained input
related:
  - lectures/week-01
spec:
  - given a sequence of keypresses, your program returns every dictionary word
    that sequence could spell
  - when more than one word matches, the results are ordered by some stated
    rule, not left in whatever order the dictionary happened to be in
  - you can explain, out loud, one word pair your dictionary gets wrong
---

## Before the lab

Bring a plain-text word list — any reasonable dictionary file will do — and
the standard telephone-keypad letter mapping. You do not need a UI. A
function that takes a digit string and returns matching words is the whole
assignment.

## In the lab

Twenty minutes on the keypad mapping itself: which letters share a key, and
why the historical choices (Q and Z sharing a key with other letters, on
phones that predate any standard) still show up in modern implementations.
Then work time. By the end, get a sequence like `4663` to return `good`
_and_ `home`, and have an opinion about which one should come first.

The last ten minutes are a scavenger hunt for keypress collisions your own
dictionary produces — pairs of common words that share every key. Two
students who find the same collision independently is a good sign your
dictionary is a normal one, not an unusual choice you should account for in
what you say about the results.

## Afterwards

Nothing here is marked on its own, but this is the version of the problem
that Assignment 1's build should be judged as harder than. If your Assignment
1 submission is easier to build than the twelve-key case, that's worth
noticing before you submit it.
