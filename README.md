<div align="center">

<h1>⚓ anchor.md</h1>

<p><strong>Portable AI Context Management — One folder. Any model. Zero context loss.</strong></p>

[![npm version](https://img.shields.io/npm/v/create-anchor-md?color=6C63FF&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/create-anchor-md)
[![npm downloads](https://img.shields.io/npm/dt/create-anchor-md?color=00C9A7&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/create-anchor-md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-brightgreen?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![GitHub Stars](https://img.shields.io/github/stars/Dhairya0707/anchor.md?style=for-the-badge&logo=github)](https://github.com/Dhairya0707/anchor.md/stargazers)

<br/>

> **anchor.md** is a lightweight, local-first AI context management system built entirely in Markdown.  
> It solves the #1 pain point of AI-assisted development: **losing context when switching models, IDE sessions, or team members.**

<br/>

</div>

---

## 🧠 The Problem It Solves

Modern developers use multiple AI models — Claude for architecture, GPT-4 for debugging, Gemini for reviewing. But every time you switch models or start a new chat, **the AI forgets everything:**

- Your tech stack decisions
- Your database schema
- What was completed vs. what's in-progress
- Your security non-negotiables
- Your design system rules

**anchor.md fixes this.** It gives every AI model a single source of truth — structured, version-controlled, and always current.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔁 **Model-Agnostic** | Works with Claude, ChatGPT, Gemini, DeepSeek, Copilot — any AI with file access |
| 🏠 **Local-First** | All files live in your repo. No cloud sync, no SaaS subscriptions |
| ⚡ **Zero Lock-in** | Plain markdown files. Read them, edit them, version-control them |
| 🤖 **Multi-Agent Safe** | Strict sync rules prevent race conditions in multi-agent environments |
| 🧩 **Role-Based Prompts** | 6 pre-built expert role prompts (Backend, Frontend, DevOps, QA, Designer, Security) |
| 🔄 **Instant Handoff** | Switch AI models mid-task without repeating a single instruction |
| 📋 **Auto-Updated State** | `TODO.md` and `CONTEXT_MEMORY.md` stay current after every task |
| 🔒 **Git-Safe** | Auto-added to `.gitignore` on install to prevent accidental secret commits |

---

## 🚀 Installation

### Option 1: npm (Recommended)

```bash
npx create-anchor-md
```

> This copies the `anchor.md/` folder into your current project directory and automatically adds it to your `.gitignore`.

### Option 2: curl (No Node.js required)

```bash
curl -fsSL https://raw.githubusercontent.com/Dhairya0707/anchor.md/main/install.sh | bash
```

### Option 3: Manual Clone

```bash
# Clone the repo and copy the anchor.md/ folder into your project
git clone https://github.com/Dhairya0707/anchor.md.git
cp -r anchor.md/anchor.md /path/to/your-project/
```

> **After any method:** Add `anchor.md/` to your `.gitignore` manually if not done automatically.

---

## 🏗️ Folder Structure

After installation, your project will contain:

```text
your-project/
├── anchor.md/
│   ├── @main.md                    ← ENTRY POINT — Fill this once, AI reads it forever
│   ├── @projectoverview.md         ← AI-generated project summary (auto-maintained)
│   ├── ARCHITECTURE.md             ← System architecture & component map
│   ├── TECH_STACK.md               ← Package versions, environments & configs
│   ├── DATABASE_SCHEMA.md          ← Collections, tables, enums & relationships
│   ├── SECURITY.md                 ← Non-negotiable security checklist
│   ├── UI_UX_GUIDELINES.md         ← Design tokens, component rules & brand guide
│   ├── DECISIONS.md                ← Architectural Decision Records (ADR)
│   ├── CONTEXT_MEMORY.md           ← Live AI session memory (auto-updated per task)
│   ├── TODO.md                     ← Task tracker & roadmap (auto-updated per task)
│   └── INSTRUCTIONS/               ← Role-specific expert prompt sheets
│       ├── @backend-dev.md         ← Senior Backend Engineer
│       ├── @frontend-dev.md        ← Senior Frontend Engineer
│       ├── @designer.md            ← Senior UI/UX Designer
│       ├── @security-audit.md      ← Security Auditor
│       ├── @devops.md              ← DevOps / Infrastructure Engineer
│       └── @qa-tester.md           ← QA / Testing Engineer
└── ... (your project files)
```

---

## ⚙️ Getting Started

### Scenario A — New Project from Scratch

1. **Install** `anchor.md` in your project root using any method above.
2. **Open** `anchor.md/@main.md` and fill in your project's parameters (name, type, features, tech preferences).
3. **Tag** `@main.md` in your IDE's AI chat with your goal:

   ```
   @main.md I want to build a school ERP system that handles student enrollment, grading, and fees.
   ```

4. The AI will read the entry point, **ask 3–5 tailored clarifying questions** based on your project type, and then generate all specification files (`ARCHITECTURE.md`, `TECH_STACK.md`, `DATABASE_SCHEMA.md`, etc.) one by one.

---

### Scenario B — Adding to an Existing Project

1. **Install** `anchor.md` in your existing project root.
2. **Open** `anchor.md/@main.md`:
   - Check the **Existing Project** box under **Project Status**.
   - Briefly describe the current completion state.
   - Paste your project's current folder structure in the `📂 PROJECT STRUCTURE` section.
3. **Run** this in your AI chat:

   ```
   @main.md Read this file and analyze the existing codebase. Populate the context files inside anchor.md/ to reflect the actual current state of the project.
   ```

4. The AI will audit your codebase and populate `CONTEXT_MEMORY.md` and `TODO.md` with only what remains to be built.

---

## 🛠️ Daily Workflow

### 1. Starting a Task

Tag the relevant role prompt in your IDE's AI chat:

```
@backend-dev.md Build the user authentication system with JWT and refresh tokens.
```

```
@frontend-dev.md Create the dashboard layout using the design tokens in UI_UX_GUIDELINES.md.
```

The AI reads the role prompt, recognizes the **Workspace Directive**, and automatically loads all relevant specs (`TECH_STACK.md`, `DATABASE_SCHEMA.md`, `SECURITY.md`, etc.) without you needing to tag every file.

---

### 2. After Every Task — Strict Sync Rule ⚠️

> **This is critical for multi-agent and multi-model environments.**

After each completed task, prompt the AI (or it does it automatically):

```
Update CONTEXT_MEMORY.md and TODO.md for the completed task.
```

The AI syncs:
- **`TODO.md`** — marks subtasks complete, recalculates roadmap percentages
- **`CONTEXT_MEMORY.md`** — updates the live codebase map, bug log, and handoff state

This prevents race conditions when multiple agents or models are working on the same repository.

---

### 3. Switching AI Models

Simply tag your role file in the new model's chat — no other setup needed:

```
@frontend-dev.md Continue building the authentication UI. Read CONTEXT_MEMORY.md first.
```

The new model reads `CONTEXT_MEMORY.md` and picks up **exactly where the last model left off**, preserving 100% of the context, decisions, and task state.

---

## 🔒 Security & Best Practices

- **Never store secrets** — Do not put API keys, passwords, or production credentials in `anchor.md/` files. Always reference environment variables.
- **anchor.md/ is git-ignored** — By default, the install script adds `anchor.md/` to `.gitignore`. This prevents accidental commits of your internal context files.
- **Maintain ADRs** — Whenever you change a database, framework, or architectural pattern, update `DECISIONS.md` so AI models never reverse a deliberate choice.
- **Commit-friendly** — If you *want* to version-control your context files (for team sharing), simply remove the entry from `.gitignore`. All files are plain markdown.

---

## 🧩 Role Prompts Reference

| File | Role | Reads Automatically |
|---|---|---|
| `@backend-dev.md` | Senior Backend Engineer | `TECH_STACK.md`, `DATABASE_SCHEMA.md`, `SECURITY.md`, `ARCHITECTURE.md` |
| `@frontend-dev.md` | Senior Frontend Engineer | `TECH_STACK.md`, `UI_UX_GUIDELINES.md`, `ARCHITECTURE.md` |
| `@designer.md` | Senior UI/UX Designer | `UI_UX_GUIDELINES.md`, `@projectoverview.md` |
| `@security-audit.md` | Security Auditor | `SECURITY.md`, `TECH_STACK.md`, `DATABASE_SCHEMA.md` |
| `@devops.md` | DevOps / Infra Engineer | `TECH_STACK.md`, `ARCHITECTURE.md`, `SECURITY.md` |
| `@qa-tester.md` | QA / Testing Engineer | `TECH_STACK.md`, `TODO.md`, `CONTEXT_MEMORY.md` |

---

## 🤖 AI Model Compatibility

anchor.md works with any AI model that can read files from your workspace:

| Tool | Compatibility |
|---|---|
| **Cursor** | ✅ Full (tag files with `@`) |
| **GitHub Copilot** | ✅ Full (tag files with `#`) |
| **Windsurf** | ✅ Full (tag files with `@`) |
| **Claude.ai (Projects)** | ✅ Full (attach files to project) |
| **ChatGPT (with file upload)** | ✅ Full (upload context files) |
| **VS Code + Gemini** | ✅ Full (tag files with `@`) |
| **Zed AI** | ✅ Full |
| **Any Chat UI** | ✅ Paste file contents manually |

---

## 📦 npm Package Info

```
Package:   create-anchor-md
Command:   npx create-anchor-md
Version:   1.0.0
License:   MIT
Node:      >= 16.0.0
```

---

## 🗺️ Roadmap

- [x] Core folder structure & entry point (`@main.md`)
- [x] 6 role-specific expert prompt sheets
- [x] npm CLI installer (`npx create-anchor-md`)
- [x] curl installer (`install.sh`)
- [x] Auto `.gitignore` management
- [x] Multi-agent strict sync rules
- [ ] Interactive CLI (`--interactive` mode with prompts)
- [ ] VS Code Extension for one-click init
- [ ] Team sync mode (shared read-only context via URL)
- [ ] anchor.md dashboard (web UI for managing context files)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/your-feature`
3. **Commit** your changes: `git commit -m 'feat: add your feature'`
4. **Push** to the branch: `git push origin feat/your-feature`
5. **Open** a Pull Request

Please follow the existing file structure and keep role prompts consistent in tone and directive style.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

**Built with ❤️ by [Dhairya Darji](https://github.com/Dhairya0707)**

⭐ **Star this repo if anchor.md saves you time!** ⭐

[![GitHub](https://img.shields.io/badge/GitHub-Dhairya0707-181717?style=for-the-badge&logo=github)](https://github.com/Dhairya0707)
[![npm](https://img.shields.io/badge/npm-create--anchor--md-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/create-anchor-md)

</div>
