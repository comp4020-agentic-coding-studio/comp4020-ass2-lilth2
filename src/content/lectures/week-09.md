---
title: Forecast UIs and the uncertainty they hide
description:
  What a weather app, a poll tracker, and a stock chart have in common with
  autocomplete — and what each one does with the uncertainty a good forecast
  can't remove
week: 9
date: 2027-04-26
teachers:
  - priya-nandakumar
tags:
  - forecasting
related:
  - sessions/09-forecast-ui-comparison
  - assessments/assignment-2
---

A forecast is a prediction with a probability attached, and this week's
claim is that most forecast interfaces spend their design effort hiding the
probability rather than showing it. "70% chance of rain" gets rendered as a
single rain icon. An election forecast's "62–38, with real uncertainty on
either side" gets rendered as a number that reads like a final score. The
uncertainty was calculated — someone's model produced a distribution, not a
point — and the interface flattened it into something that looks more
confident than the forecast actually is, because a confident-looking
interface is easier to use and, not coincidentally, easier to sell.

This connects back to the whole semester rather than starting a new
argument: every predictive system so far has had a confidence it could, in
principle, expose, and mostly hasn't. Autocorrect could show you its second-
best guess and how close the scores were; it usually just picks one. A
forecast UI is where that omission becomes legible, because forecasting is
a field that already has the vocabulary — calibration, confidence
intervals, base rates — for saying exactly how sure a prediction is, and
interfaces routinely choose not to use it.

## Outline

- three forecast domains, three different ways of hiding the same kind of
  uncertainty
- calibration: what it would mean for a forecast interface to earn trust
  rather than just project it
- why "the model was technically right" and "the interface was honest"
  are different claims
- Assignment 2's brief, due at the end of next week
