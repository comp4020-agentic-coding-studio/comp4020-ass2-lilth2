---
title: The feed — recommendation as prediction
description:
  Why a recommendation feed is autocomplete for your attention rather than
  your sentence, and why that reframing changes what counts as a good guess
week: 11
date: 2027-05-10
teachers:
  - priya-nandakumar
tags:
  - recommendation
related:
  - sessions/11-feed-reverse-engineering
links:
  - label: Recommender system — Wikipedia
    url: https://en.wikipedia.org/wiki/Recommender_system
---

Every system this course has covered predicts a specific, checkable thing:
the word you meant, the pixels that belong in a gap, the reply that fits a
message. A recommendation feed predicts something looser and, in a specific
sense, easier — not "what did you mean" but "what will you engage with" —
and optimising for the easier target has turned out to produce some of the
strangest behaviour in this entire course.

A word predictor that's wrong gets corrected and moves on; a feed that's
wrong in a specific, exploitable direction gets rewarded, because "wrong"
for a feed means "less engaging," and the feed's only signal for what's
engaging is what you already clicked. That's a prediction system with its
own success metric quietly reshaping the thing it's predicting — you become
slightly more like the audience the feed has already decided you are, which
makes the feed's next prediction slightly more accurate, which is treated
as the system doing its job well. Nothing about this requires the feed to
be malicious; it only requires it to be good at the metric it was actually
given.

## Outline

- recommendation as a prediction problem, and why the target it optimises
  for is easier to satisfy than to want satisfied
- feedback loops: how a feed's accuracy and a feed's influence become the
  same measurement
- what "for you" is actually claiming, compared to what it's actually doing
- what the lab's reverse-engineering exercise is trying to surface
