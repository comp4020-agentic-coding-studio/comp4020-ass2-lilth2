---
title: Query completion and the autocomplete confession
description:
  What a search box's suggestions reveal about the people typing into it,
  and why that turned out to be a design problem
week: 3
date: 2027-03-08
teachers:
  - priya-nandakumar
tags:
  - search
  - collective behaviour
related:
  - sessions/03-query-completion-audit
---

A T9 disambiguator predicts from one person's keypresses and a fixed
dictionary. A search box's autocomplete predicts from everyone's past
queries, which means it isn't really finishing your sentence — it's telling
you what other people, in aggregate, tend to ask. That's a genuinely
different kind of prediction, and it produces a genuinely different kind of
failure: not "wrong word," but "accurate reflection of something the
platform would rather not display in a dropdown."

Search engines have spent a long time patching this after the fact — filtering
suggestions that complete a person's name into a harassment query, or a
medical symptom into a worst-case diagnosis, or a demographic group into a
slur. Every patch is a value judgement about which aggregate truths are fit
to surface, made by whoever owns the suggestion box. The lecture treats query
completion as a case where the "it's just showing what people search for"
defence runs out fastest, because the completion is attributed to the
platform, phrased as if the platform is finishing your thought, not
reporting a statistic.

## Outline

- how query completion actually works: frequency, recency, and personalisation
- three real cases where a completion became a controversy, and what changed
  after each one
- the gap between "this is popular" and "this is what I meant to ask"
- what the lab's audit is looking for
