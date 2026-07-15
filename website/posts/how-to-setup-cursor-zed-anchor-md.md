---
title: "How to Setup Cursor and Zed to Read anchor.md Context Automatically"
date: "June 13, 2026"
readTime: "5 min read"
summary: "A step-by-step guide on tagging local rule sheets to make Cursor AI and Zed Editor follow your exact package versions and schemas."
---

Modern coding editors like **Cursor** and **Zed** have changed how developers interact with AI models. Both editors allow you to feed local file context directly to the underlying LLMs. Here is how you can optimize anchor.md for these tools.

---

## 1. Using anchor.md in Cursor AI

Cursor has a native file-reference feature in its chat panel and Composer.

- **Tagging the Entry Point**: In the Cursor chat panel (Cmd+L or Ctrl+L), type `@` followed by the file name:
  ```
  @main.md Build the student profile database migrations.
  ```
- **Using Rules**: To prevent Cursor from recommending deprecated code or wrong libraries, tag `TECH_STACK.md` and your chosen backend role prompt:
  ```
  @TECH_STACK.md @backend-dev.md Add payment webhooks.
  ```
- **Updating the Memory**: Once Cursor finishes a task, ask it:
  ```
  Update CONTEXT_MEMORY.md and TODO.md with what you did and what's next.
  ```

---

## 2. Using anchor.md in Zed AI

Zed's assistant panel supports referencing files via the slash command interface:

- Press `/file` in the assistant panel.
- Select `anchor.md/@main.md` and `anchor.md/TODO.md`.
- Provide your task instructions. Zed will consume the parsed markdown context directly.

By following this workflow, your AI stays perfectly aligned with the repository's guidelines, preventing bugs before they are ever committed.
