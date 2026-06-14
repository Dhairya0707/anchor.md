# TECH_STACK.md — Technology Stack
> ⚠️ AI GENERATED FILE — Verify versions are correct after generation.
> Generated from: `@main.md`
> Last Updated: `[AI fills date]`
> Updated By: `[AI fills model name]`
> Connected Files: `ARCHITECTURE.md` `DECISIONS.md`

---
> 📌 **RULE FOR AI**
> Before writing ANY code, read this file first.
> Use EXACT versions listed here. Do not upgrade or downgrade without updating this file and DECISIONS.md.
---

## 🖥️ FRONTEND

> [AI fills all versions based on @main.md choices]

| Package | Version | Purpose |
|---------|---------|---------|
| | | |
| | | |

### Install Command
```bash
[AI fills exact install command]
```

### Key Configuration
> [AI fills: any important config files, settings, or patterns to follow]

---

## ⚙️ BACKEND

> [AI fills all versions based on @main.md choices]

| Package | Version | Purpose |
|---------|---------|---------|
| | | |
| | | |

### Install Command
```bash
[AI fills exact install command]
```

### Key Configuration
> [AI fills: server setup, middleware order, env variables needed]

---

## 🗄️ DATABASE & CACHE

| Service | Version | Purpose | Connection |
|---------|---------|---------|-----------|
| | | | |
| | | | |

### Environment Variables Needed
```env
[AI fills all required env variables — no values, just keys]

Example:
DATABASE_URL=
REDIS_URL=
DATABASE_NAME=
```

---

## 🔐 AUTHENTICATION

| Package | Version | Purpose |
|---------|---------|---------|
| | | |

### Auth Flow
> [AI fills: step by step auth flow specific to this project]

### Token Strategy
```
Access Token:  expires in [X minutes]
Refresh Token: expires in [X days]
Storage:       [httpOnly cookie / localStorage / memory]
```

---

## 📦 SHARED / UTILITIES

| Package | Version | Purpose |
|---------|---------|---------|
| | | |

---

## 🚀 DEVOPS & TOOLING

| Tool | Version | Purpose |
|------|---------|---------|
| | | |

### Required CLI Tools
```bash
[AI fills: any global CLI tools needed]

Example:
node >= 20.x
pnpm >= 9.x
```

---

## 🔌 THIRD PARTY SERVICES

| Service | Purpose | SDK/Integration |
|---------|---------|----------------|
| | | |

### API Keys Needed
```env
[AI fills all third party keys needed — no values, just keys]
```

---

## 📁 PACKAGE MANAGER

- **Package Manager:** `[e.g. pnpm / npm / yarn / bun]`
- **Node Version:** `[e.g. 22.x]`
- **Lock File:** `[e.g. pnpm-lock.yaml]`

---

## ✅ VERSION COMPATIBILITY NOTES

> [AI fills: any known compatibility issues or important version constraints]

- [e.g. React 19 requires Next.js 15+ — do not use Next.js 14]
- [e.g. Mongoose 8.x is required for MongoDB 7.0 features]
- [e.g. Node.js 22.x required for native fetch support]

---

## 🔄 HOW TO UPDATE THIS FILE

> Only update this file when:
> 1. Adding a new dependency
> 2. Upgrading an existing dependency
> 3. Removing a dependency

> When updating:
> 1. Change the version in this file
> 2. Add a note in `DECISIONS.md` explaining WHY you changed it
> 3. Test thoroughly before committing

---

## 🔗 RELATED FILES

- System using this stack → `ARCHITECTURE.md`
- Why we chose this stack → `DECISIONS.md`
- Security for this stack → `SECURITY.md`
