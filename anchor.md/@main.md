# @main.md — anchor.md Entry Point
> This is the FIRST file you fill. Everything else is generated from this.
> After filling this, tell your AI: "Read @main.md and generate all other files in .anchor.md/"

---

## 📌 PROJECT STATUS
> Tell AI if this is new or existing project

- **Status:** [ ] New Project &nbsp;&nbsp; [ ] Existing Project
- **If existing:** Briefly describe current state:
  ```
  e.g. Backend 60% done, frontend not started, using Node.js + MongoDB
  ```

---

## 🧠 PROJECT BASICS

- **Project Name:**
- **One Line Description:**
  ```
  e.g. A SaaS tool that helps developers manage API keys securely
  ```
- **Type:** [ ] SaaS &nbsp; [ ] Mobile App &nbsp; [ ] Website &nbsp; [ ] API/Backend &nbsp; [ ] CLI Tool &nbsp; [ ] Other:
- **Stage:** [ ] Idea &nbsp; [ ] MVP &nbsp; [ ] Beta &nbsp; [ ] Production
- **Target Users:**
  ```
  e.g. Solo developers building side projects
  ```

---

## 🛠️ TECH STACK

> Fill only what you know. Leave blank if AI should decide.

- **Frontend:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Next.js 15, React 19, Tailwind CSS`
- **Backend:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Node.js, Express, Fastify`
- **Database:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. MongoDB, PostgreSQL, Supabase`
- **Auth:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. JWT, OAuth, NextAuth, Supabase Auth`
- **Cache:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Redis, Upstash`
- **Storage:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. AWS S3, Cloudflare R2, Supabase Storage`
- **Hosting:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Vercel, Railway, DigitalOcean, AWS`
- **Mobile:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Flutter, React Native`
- **Other Tools:** &nbsp; `e.g. Stripe, Resend, Pusher, OpenAI API`

---

## ✨ KEY FEATURES

> List 3-7 core features this project must have

1.
2.
3.
4.
5.

---

## 🎯 SCOPE & SCALE

- **Timeline:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. 3 months to MVP`
- **Team Size:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Solo / 2 developers / Full team`
- **Expected Users:** &nbsp; `e.g. 100 users / 10K users / 1M+ users`
- **Budget:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. No budget / $100/month / Funded`
- **Revenue Model:** &nbsp;&nbsp; `e.g. Subscription / One-time / Free / Open Source`

---

## 🔒 SPECIAL REQUIREMENTS

> Leave blank if none apply

- **Compliance:** &nbsp;&nbsp;&nbsp; `e.g. GDPR, HIPAA, SOC2, PCI-DSS`
- **Integrations:** &nbsp;&nbsp; `e.g. Slack, GitHub, Stripe, Zapier`
- **Real-time:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Yes - live notifications / No`
- **Offline support:** `e.g. Yes - mobile app / No`
- **Multi-language:** `e.g. Yes - English + Hindi / No`
- **Accessibility:** &nbsp; `e.g. WCAG 2.1 AA required / Basic`

---

## 🎨 DESIGN PREFERENCES

- **Style:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Minimal, NeoBrutalism, Material, Corporate, Playful`
- **Colors:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `e.g. Dark theme, Blue + White, Custom: #3B82F6`
- **Reference:** &nbsp;&nbsp; `e.g. Linear.app, Vercel dashboard, Notion`

---

## 📂 PROJECT STRUCTURE (If Existing Project)

> Only fill if this is an existing project. Paste your current folder structure here.

```
paste your structure here
```

---

## 🗒️ ANYTHING ELSE AI SHOULD KNOW

> Add any context, constraints, or preferences that don't fit above

```
e.g. We already have a Stripe account set up.
     We cannot use Firebase because of privacy policy.
     The backend must be in Python because team knows Python only.
     This is a college project, keep it simple.
```

---

## 🤖 AI INSTRUCTION — READ THIS LAST

> After user fills above sections, AI must follow this:

**IF NEW PROJECT:**
1. Read everything above carefully.
2. **Tailored Questions Directive:** Before generating the rest of the workspace, analyze the project's type, scale, and requirements (e.g. if the user wants an ERP system, e-commerce, or SaaS). Identify missing parameters (e.g., multi-tenancy requirements, payment gateways, role hierarchy matrix) and formulate 3-5 specific, tailored questions to ask the user.
3. Once the user provides answers, generate ALL files in `.anchor.md/` folder one by one:
   - `@projectoverview.md` → Big picture summary
   - `ARCHITECTURE.md` → System design
   - `TECH_STACK.md` → Exact versions and libraries
   - `DATABASE_SCHEMA.md` → Data models
   - `SECURITY.md` → Security checklist
   - `UI_UX_GUIDELINES.md` → Design system
   - `DECISIONS.md` → Why we chose this stack
   - `CONTEXT_MEMORY.md` → Initialize with current state
   - `TODO.md` → Full task breakdown
4. After generating all files, confirm: "anchor.md system is ready. All context files generated."
5. From now on, ALWAYS read all `.anchor.md/` files before doing any task

**IF EXISTING PROJECT:**
1. Read everything above carefully
2. Analyze current project state
3. Generate all files based on CURRENT state (not ideal state)
4. In `CONTEXT_MEMORY.md` document what is already done
5. In `TODO.md` document only what is remaining
6. Ask clarifying questions if something is unclear before generating

**EVERY SESSION AFTER SETUP (MULTI-AGENT RULES):**
- Always read `.anchor.md/` files FIRST before doing anything
- **Strict Sync Rule:** IMMEDIATELY after completing every single task (no matter how small), update `CONTEXT_MEMORY.md` and `TODO.md` to prevent stale context for other agents working on the repository.
- If any architectural decision is made, update `DECISIONS.md`
- Never contradict what is written in `DECISIONS.md` unless user explicitly asks to change it
