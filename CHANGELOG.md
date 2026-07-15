# Changelog

All notable changes to **anchor.md** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.3] — 2026-07-08

### Changed
- Updated `README.md` to document the new `export`, `status`, and `init` CLI commands.

---

## [1.0.2] — 2026-07-08

### Added

- `npx create-anchor-md export` command to aggregate all local `anchor.md` files into a single, unified `share-to-ai.md` file for browser-based AI chats (Gemini app, ChatGPT, Claude Projects).
- Automatic `.gitignore` management for the generated `share-to-ai.md` file.
- `npx create-anchor-md status` command to run diagnostics health checks, check for template placeholders, and output roadmap statistics.
- Refactored command-line routing system support inside CLI.

---

## [1.0.1] — 2026-06-14

### Changed

- Updated package metadata, homepage links, and publishing setup.

---

## [1.0.0] — 2024-06-14

### 🎉 Initial Release

#### Added

- Core `anchor.md/` folder structure with 10 context files
- `@main.md` — project entry point for AI agents
- `@projectoverview.md` — AI-generated project summary template
- `ARCHITECTURE.md` — system architecture specification template
- `TECH_STACK.md` — package versions and environment template
- `DATABASE_SCHEMA.md` — database schema and enums template
- `SECURITY.md` — non-negotiable security checklist
- `UI_UX_GUIDELINES.md` — design tokens and component rules template
- `DECISIONS.md` — Architectural Decision Records (ADR) template
- `CONTEXT_MEMORY.md` — live AI session memory (auto-updated)
- `TODO.md` — task tracker and roadmap (auto-updated)
- `INSTRUCTIONS/` folder with 6 role-specific expert prompt sheets:
  - `@backend-dev.md` — Senior Backend Engineer
  - `@frontend-dev.md` — Senior Frontend Engineer
  - `@designer.md` — Senior UI/UX Designer
  - `@security-audit.md` — Security Auditor
  - `@devops.md` — DevOps / Infrastructure Engineer
  - `@qa-tester.md` — QA / Testing Engineer
- `npx create-anchor-md` CLI installer
- `install.sh` curl-based installer (no Node.js required)
- Auto `.gitignore` management on install
- Multi-agent strict sync rules across all role prompts
- Tailored questions directive in `@main.md` for complex project types
- MIT License

---

## [Unreleased]

### Planned

- Interactive CLI (`--interactive` mode with guided prompts)
- VS Code Extension for one-click initialization
- Team sync mode (shared read-only context via URL)
- `@data-engineer.md` role prompt
- `@mobile-dev.md` role prompt
- anchor.md web dashboard

---

[1.0.3]: https://github.com/Dhairya0707/anchor.md/releases/tag/v1.0.3
[1.0.2]: https://github.com/Dhairya0707/anchor.md/releases/tag/v1.0.2
[1.0.1]: https://github.com/Dhairya0707/anchor.md/releases/tag/v1.0.1
[1.0.0]: https://github.com/Dhairya0707/anchor.md/releases/tag/v1.0.0
