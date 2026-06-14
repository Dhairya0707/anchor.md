# anchor.md — Portable AI Context Management System

**anchor.md** (formerly SYNCOS) is a lightweight, local-first AI context management system. By structuring your project's rules, specifications, decisions, and memory into plain markdown files, it allows you to switch between different AI models (Claude, ChatGPT, Gemini, DeepSeek, etc.) and IDE chat interfaces without losing project state.

---

## 🏗️ Folder Structure

When initialized, `anchor.md` adds a folder to your project root:

```text
my-project/
├── anchor.md/
│   ├── @main.md                    ← ENTRY POINT (User fills once)
│   ├── @projectoverview.md         ← AI generates & updates
│   ├── ARCHITECTURE.md             ← System architecture specification
│   ├── TECH_STACK.md               ← Package versions & environments
│   ├── DATABASE_SCHEMA.md          ← Database collections, tables & enums
│   ├── SECURITY.md                 ← Checklist of non-negotiables
│   ├── UI_UX_GUIDELINES.md         ← Design tokens & component rules
│   ├── DECISIONS.md                ← Architectural decision records (ADR)
│   ├── CONTEXT_MEMORY.md           ← AI session memory (Auto-updated)
│   ├── TODO.md                     ← Task tracker & roadmap (Auto-updated)
│   └── INSTRUCTIONS/               ← Role prompts
│       ├── @backend-dev.md         ← Senior Backend Engineer prompt
│       ├── @frontend-dev.md        ← Senior Frontend Engineer prompt
│       ├── @designer.md            ← Senior Designer prompt
│       ├── @security-audit.md      ← Security Auditor prompt
│       ├── @devops.md              ← DevOps / Infra prompt
│       └── @qa-tester.md           ← QA / Testing prompt
└── README.md                       ← This guide
```

---

## 🚀 Getting Started

### Scenario A: Starting a New Project from Scratch
1. Copy the `anchor.md/` directory to your project root.
2. Open [anchor.md/@main.md](file:///Users/dhairyadarji/Developer/experiments/anchor.md/anchor.md/@main.md) and fill in the project specifications (Project Name, Type, Features, Tech stack preferences, etc.).
3. Open your IDE's AI chat window and tag (reference) `@main.md` with your project goal.
   * **Example Prompt:**
     > "@main.md I want to build a school ERP system that handles student enrollment, grading, and fees."
4. The AI will read `@main.md` and dynamically:
   - Identify missing details based on your project type (e.g., for an ERP system, it might ask about multi-tenancy, specific modules, or billing integration).
   - Present 3-5 tailored questions to ask for clarifications.
   - Once you reply, it will generate the rest of the files inside `anchor.md/` (like `ARCHITECTURE.md`, `TECH_STACK.md`, etc.) one by one.

### Scenario B: Adding to an Existing Project
1. Copy the `anchor.md/` directory to your project root.
2. Open [anchor.md/@main.md](file:///Users/dhairyadarji/Developer/experiments/anchor.md/anchor.md/@main.md):
   - Check the **Existing Project** box under **Project Status**.
   - Briefly describe the current state of completion.
   - Paste your project's current folder structure in the `📂 PROJECT STRUCTURE` section.
3. Open your IDE's AI chat window, tag `@main.md`, and run:
   > "Read `@main.md` and analyze the existing codebase. Populate the context files inside `anchor.md/` to reflect the actual current state of the project."
4. The AI will populate `CONTEXT_MEMORY.md` and `TODO.md` with only what remains to be built.

---

## 🛠️ Daily Workflow: How to Tag and Run Tasks

Because of the built-in **AI Workspace Directives** in the instructions sheets, you do **not** need to copy/paste all context files. You only need to tag **one** role instruction file:

### 1. Starting a Task
Tag the relevant role prompt (e.g., `@backend-dev.md`, `@frontend-dev.md`, or `@devops.md`) and describe your task:
> "@backend-dev.md build user authentication system and signup flow"

The AI reads the prompt, recognizes the workspace directive, and automatically loads the rest of the specs (`TECH_STACK.md`, `DATABASE_SCHEMA.md`, `SECURITY.md`) from your local directory to complete the task with high precision.

### 2. Immediately After Every Task (Multi-Agent Safety)
To support multi-agent synchronization and avoid race conditions, the AI must update the workspace files **immediately after completing every single task** (not just at the end of a session). Prompt the AI (or it will do it automatically):
> "Update the memory and task files for the completed task."

The AI will automatically sync:
- [TODO.md](file:///Users/dhairyadarji/Developer/experiments/anchor.md/anchor.md/TODO.md) — Marks subtasks complete and recalculates roadmap percentages.
- [CONTEXT_MEMORY.md](file:///Users/dhairyadarji/Developer/experiments/anchor.md/anchor.md/CONTEXT_MEMORY.md) — Updates the live codebase map, bug log, and handoff state.

### 3. Model Switching (E.g. Claude 3.5 Sonnet to GPT-4o)
When switching models, simply tag your role instructions file (e.g. `@frontend-dev.md`) in the new model's chat. The new model reads `CONTEXT_MEMORY.md` and picks up exactly where the last model left off, preserving 100% of the context.

---

## 💡 Best Practices

- **Never Commit Secrets**: Do not store private keys, passwords, or production credentials in `anchor.md/` files. Reference environment variables instead.
- **Maintain ADRs**: Whenever you decide to change a database, styling framework, or routing method, update [DECISIONS.md](file:///Users/dhairyadarji/Developer/experiments/anchor.md/anchor.md/DECISIONS.md) so the AI never suggests reversing that choice.
- **Git Friendly**: Keep the `anchor.md/` folder in your Git repository. This allows you to track project documentation alongside your source code.
