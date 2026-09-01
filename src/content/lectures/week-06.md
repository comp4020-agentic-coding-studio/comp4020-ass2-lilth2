---
title: Smart replies and the suggested response
description:
  What it means for a system to write the polite part of a conversation for
  you, one tap at a time, and why that started to feel strange
week: 6
date: 2027-03-29
teachers:
  - priya-nandakumar
tags:
  - social prediction
related:
  - sessions/06-inbox-smart-reply-audit
links:
  - label: Smart Reply — Wikipedia
    url: https://en.wikipedia.org/wiki/Smart_Reply
---

A smart reply doesn't predict the next word in a sentence you're writing —
it predicts the whole sentence, offered as a complete reply you can send
with one tap: "Sounds good!", "Thanks!", "I'll check and get back to you."
This is a different genre of prediction from anything covered so far,
because what's being predicted isn't a plausible continuation of your text —
it's a plausible thing to have felt, phrased as though you felt it.

That's why smart replies produce a specific kind of unease that autocorrect
doesn't: sending one is a real social act, attributed to you, generated
from a shortlist someone else's model considered likely enough to offer.
Early smart-reply systems learned this the hard way, occasionally suggesting
condolences in reply to bad news with the same cheerful confidence as a
lunch invitation, because the model had no idea the message was bad news —
only that certain reply shapes correlate with certain message shapes. The
lecture treats this as the moment predictive text stops finishing your
sentence and starts finishing your social obligations, and asks what's lost
when a system finishes those cheaply enough that we stop noticing it did.

## Outline

- how smart reply generation actually works, and why it's simpler than it
  feels
- three documented cases of tonally wrong suggested replies, and what they
  have in common
- what changes when a reply is offered, tapped, and sent in under a second
- what the lab's inbox audit is looking for
