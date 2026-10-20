---
title: 'Designing DynamoDB Anti-Entropy at 35 PB Scale'
description: 'How we overhauled the background data reconciliation system for global active-active replication.'
date: '2026-04-10'
draft: false
tags: ['Distributed Systems', 'DynamoDB', 'AWS', 'Replication']
categories: ['Engineering']
sidebar:
  enable: false
---

Active-active multi-region replication requires constant vigilance. Even with strong consensus at write time, edge cases like transient partition failures, disk corruptions, or ledger dropouts can leave replicas out of sync.

In DynamoDB Global Tables, anti-entropy is the silent safety net ensuring eventual consistency across 35 PB of customer data. Here are the architectural lessons learned from revamping the background scan and Merkle reconciliation engine.
