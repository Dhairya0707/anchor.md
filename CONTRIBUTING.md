# Contributing to anchor.md

First off — thank you for taking the time to contribute! 🎉  
anchor.md is an open-source project and we welcome all kinds of contributions, big or small.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started (Local Setup)](#getting-started-local-setup)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Style Guide](#style-guide)

---

## Code of Conduct

Be respectful. Be constructive. We're all here to build something useful together.  
Harassment, discrimination, or toxic behavior of any kind will not be tolerated.

---

## How Can I Contribute?

### 🐛 Report a Bug
Open an issue using the **Bug Report** template. Include:
- What you expected to happen
- What actually happened
- Steps to reproduce
- Your OS, Node.js version

### 💡 Suggest a Feature
Open an issue using the **Feature Request** template. Describe:
- The problem you're trying to solve
- Your proposed solution
- Any alternatives you considered

### 📝 Improve the Templates
The core value of anchor.md is in the markdown template files inside `anchor.md/`.  
If you think a role prompt, instruction, or context file can be improved — open a PR!

### 🌐 Add a New Role Prompt
Want to add a new role (e.g., `@data-engineer.md`, `@mobile-dev.md`)?  
Follow the existing format in `anchor.md/INSTRUCTIONS/` and submit a PR.

### 📖 Improve Documentation
Fix typos, improve clarity, or add examples to the README or any template files.

---

## Getting Started (Local Setup)

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/anchor.md.git
cd anchor.md

# 2. Create a new branch for your work
git checkout -b feat/your-feature-name

# 3. Make your changes
# (Edit markdown files, cli.js, install.sh, etc.)

# 4. Test your CLI changes locally
node cli.js

# 5. Commit with a clear message
git commit -m "feat: describe what you did"

# 6. Push and open a Pull Request
git push origin feat/your-feature-name
```

---

## Submitting a Pull Request

- **One PR per feature/fix** — keep it focused
- **Reference the issue** — e.g. `Closes #12` in your PR description
- **Describe what changed** and why
- **Keep role prompts consistent** in tone — professional, directive, concise
- PRs are reviewed within a few days

---

## Style Guide

### Markdown Files
- Use sentence case for headings (not Title Case)
- Keep instructions directive: `"The AI must..."` not `"The AI should..."`
- Use emojis sparingly and consistently with existing files

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add @data-engineer.md role prompt
fix: correct typo in @main.md
docs: improve README installation section
chore: update .npmignore
```

---

Thanks again for contributing! If you have any questions, open a GitHub Discussion or an issue. 🚀
