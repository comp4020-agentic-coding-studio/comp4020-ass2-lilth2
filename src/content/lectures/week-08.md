---
title: Inpainting — completion in pixels
description:
  What autocomplete looks like when the missing continuation is a region of
  an image instead of the next word, and why the two turn out to be related
week: 8
date: 2027-04-19
teachers:
  - priya-nandakumar
tags:
  - images
related:
  - sessions/08-inpainting-seams-lab
links:
  - label: Inpainting — Wikipedia
    url: https://en.wikipedia.org/wiki/Inpainting
---

Inpainting is old enough to predate computers — museum conservators have
used the word for centuries, for the practice of painting in a missing
corner of a damaged canvas so the eye doesn't catch on the gap. Generative
image tools borrowed the term for exactly the same task done statistically:
given the pixels around a masked region, predict pixels that belong there.
It's the keypad problem again, with a different vocabulary and a different
signal — instead of a keypress sequence resolving to a word, a boundary of
known pixels resolves to a plausible fill.

What makes this week's version interesting is where the fill goes wrong.
Text autocomplete fails in ways a reader catches immediately, because
language has hard grammatical and factual constraints a wrong guess visibly
breaks. Image completion fails more quietly: an extra finger, a shadow that
falls the wrong way, a background object repeated where it shouldn't
repeat — plausible enough on a glance to pass, wrong enough on inspection to
undermine trust once you've learned to look for the tell. The lecture
argues that "looks right at a glance" is a lower bar than "is right," and
that inpainting is the domain where that gap becomes an aesthetic and an
evidentiary problem at once.

## Outline

- inpainting before neural networks: what conservators mean by the word
- how a masked region gets filled, and why the boundary is doing most of
  the work
- the specific tells of a bad fill, and why they're getting harder to spot
- what the lab's seam-hunting exercise asks you to find
