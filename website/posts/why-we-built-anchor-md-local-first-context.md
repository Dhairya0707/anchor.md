---
title: "Why We Built anchor.md: Local-First Context for LLMs"
date: "June 12, 2026"
readTime: "3 min read"
summary: "The story behind building a zero-dependencies context standard that works with Claude, ChatGPT, and Gemini without vendor lock-in."
---

Every week, a new AI tool launches claiming to optimize developer context. They want you to install heavy browser extensions, sync your codebase to their clouds, or pay monthly subscriptions.

But developers don't want another SaaS subscription or vendor lock-in. We want tools that:
- Live inside our repository.
- Work offline.
- Can be read and modified with plain text editors.
- Version-controlled via Git.

That is why we built **anchor.md**.

---

## Keep it Simple: Markdown + Git

anchor.md is built on two standard tools you already use every day: **Markdown** and **Git**.

- **Markdown** is highly readable for both human developers and LLMs. The structural hierarchy (headings, bullet points, checklists) makes it easy for AI to parse.
- **Git** ensures your context history matches your code history. When you revert a commit, your database schema and context memory are automatically reverted to that exact state too.

By keeping context management local, open-source, and free, anchor.md provides a robust, zero-cost foundation for developers building the future.
