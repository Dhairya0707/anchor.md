# Contributing to anchor.md

First off — thank you for considering contributing! 🎉

anchor.md is an open-source project and we welcome contributions of all kinds — whether it's improving the core CLI, enhancing the website, writing better templates, or fixing a typo.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What You Can Contribute](#what-you-can-contribute)
- [Getting Started](#getting-started)
  - [CLI Package (create-anchor-md)](#cli-package-create-anchor-md)
  - [Website (anchor-md.web.app)](#website-anchor-mdwebapp)
- [How to Contribute](#how-to-contribute)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Style Guide](#style-guide)
- [Need Help?](#need-help)

---

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to maintain a respectful and constructive environment. Harassment or toxic behavior of any kind will not be tolerated.

---

## What You Can Contribute

### 🐛 Report Bugs
Open a [Bug Report](https://github.com/Dhairya0707/anchor.md/issues/new?template=bug_report.md) with clear reproduction steps, your environment, and expected vs actual behavior.

### 💡 Suggest Features
Open a [Feature Request](https://github.com/Dhairya0707/anchor.md/issues/new?template=feature_request.md) describing the problem, your proposed solution, and any alternatives considered.

### 📝 Improve Context Templates
The core value of anchor.md is the markdown templates inside `anchor.md/`. If a role prompt, instruction, or spec file can be improved — open a PR.

### 🌐 Add New Role Prompts
Want to add a new role (e.g., `@data-engineer.md`, `@mobile-dev.md`)? Follow the existing format in `anchor.md/INSTRUCTIONS/` and submit a PR.

### 🧱 Improve the Website
The website at [anchor-md.web.app](https://anchor-md.web.app) (source in [`website/`](website/)) is built with Next.js 16 + React 19 + Tailwind CSS. Contributions to documentation, design, or functionality are very welcome.

### 📖 Improve Documentation
Fix typos, improve clarity, or add examples to the README, website blog, or any template file.

---

## Getting Started

### CLI Package (create-anchor-md)

```bash
# 1. Fork the repo
git clone https://github.com/YOUR_USERNAME/anchor.md.git
cd anchor.md

# 2. Create a feature branch
git checkout -b feat/your-feature-name

# 3. Make your changes
# (edit cli.js, install.sh, template markdown files, etc.)

# 4. Test the CLI locally
node cli.js          # defaults to init
node cli.js export   # test export bundling
node cli.js status   # test diagnostics

# 5. Commit and push
git commit -m "feat: describe your change"
git push origin feat/your-feature-name
```

### Website (anchor-md.web.app)

```bash
# 1. Fork the repo
git clone https://github.com/YOUR_USERNAME/anchor.md.git
cd anchor.md/website

# 2. Create a feature branch
git checkout -b feat/website-your-feature

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your own NEXT_PUBLIC_MAIL_API_URL and
# NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID.
# NOTE: only NEXT_PUBLIC_ (browser-safe) values go in .env.local.
# Never put the Discord webhook or any secret there — the site is a
# static export and those values ship to the browser.

# 5. Start the dev server
npm run dev
# Opens at http://localhost:3000

# 6. Make your changes and verify
# Lint before committing
npm run lint

# 7. Commit
git commit -m "feat(website): describe your change"
```

> **Note:** The `website/` folder has its own `package.json` and dependencies. Do not install website dependencies from the root.
> **Security:** The contact form posts to `NEXT_PUBLIC_MAIL_API_URL`. Discord notifications (if used) must be handled server-side inside that mail API — never in the frontend.

---

## How to Contribute

1. **Search existing issues** — Check if someone else already reported or is working on it.
2. **Open an issue first** (optional but recommended) — For significant changes, discuss before building to avoid duplicate effort.
3. **Fork and branch** — Work on a descriptive branch name (e.g., `feat/add-data-engineer-role`, `fix/cli-export-error`).
4. **Make focused commits** — Each commit should represent one logical change.
5. **Open a Pull Request** — Reference the issue number if applicable.

---

## Pull Request Guidelines

- **One PR per feature/fix** — Keep it focused and reviewable.
- **Reference the issue** — Use `Closes #12` in the PR description.
- **Describe what changed** — Explain both *what* and *why*.
- **CLI changes** — Test locally with `node cli.js`.
- **Website changes** — Run `npm run lint` and verify in browser.
- **Template changes** — Keep tone directive and consistent with existing files.
- **Update CHANGELOG.md** — If the change is notable.
- **No secrets** — Ensure no API keys, tokens, or personal data are included.
- **PRs are reviewed** — Usually within a few days. Feel free to ping if it's been longer.

### PR Checklist

Before submitting, confirm:

- [ ] My changes follow the existing file structure and conventions
- [ ] I've tested CLI changes locally (`node cli.js`) — if applicable
- [ ] I've tested website changes locally (`npm run dev` + `npm run lint`) — if applicable
- [ ] Role prompts are directive and consistent with existing prompts — if applicable
- [ ] I've updated `CHANGELOG.md` for notable changes
- [ ] No secrets or personal data are included

---

## Style Guide

### Markdown Files
- Use sentence case for headings (not Title Case).
- Keep instructions directive: `"The AI must..."` not `"The AI should..."`.
- Use emojis sparingly and consistently with existing files.

### JavaScript (CLI)
- Use `const` / `let` (no `var`).
- `camelCase` for variables and functions.
- Prefer synchronous `fs` operations for simplicity.
- Target Node.js >= 16.

### TypeScript / React (Website)
- Use TypeScript with strict mode.
- Follow existing component patterns in `website/src/`.
- Use Tailwind CSS for styling — avoid raw CSS files.
- Prefer server components where possible (Next.js App Router).

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add @data-engineer.md role prompt
feat(cli): add --interactive flag
fix: correct typo in @main.md
fix(website): broken nav on mobile
docs: improve README installation section
chore: update .npmignore
```

---

## Need Help?

- Open a [GitHub Discussion](https://github.com/Dhairya0707/anchor.md/discussions) for questions.
- Check existing [issues](https://github.com/Dhairya0707/anchor.md/issues) for known bugs or feature requests.
- For security vulnerabilities, see [SECURITY.md](SECURITY.md).

---

Thanks again for contributing! ⚓
