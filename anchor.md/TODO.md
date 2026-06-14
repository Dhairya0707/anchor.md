# TODO.md — Tasks & Roadmap
> 🤖 AI MAINTAINED — AI updates this after every session.
> Last Updated: `[AI fills date]`
> Connected Files: `CONTEXT_MEMORY.md` `@projectoverview.md`

---
> 📌 **RULE FOR AI (MULTI-AGENT SYNC)**
> Immediately after completing EVERY single task (no matter how small):
> - Mark completed tasks with ✅
> - Add any new tasks discovered
> - Adjust priorities if needed
> - Never remove tasks — only mark them complete
>
> At the START of every session:
> - If this file is not already in your context, read it from the workspace (anchor.md/TODO.md) to know exactly where to continue
> - Pick up from the IN PROGRESS section first
---

## 🔴 CRITICAL — Must Complete Before Launch

> [AI fills based on @main.md features and ARCHITECTURE.md]

### 🔐 Authentication
- [ ] User signup with email/password
- [ ] User login
- [ ] JWT token generation
- [ ] Refresh token rotation
- [ ] Email verification
- [ ] Password reset flow
- [ ] Rate limiting on auth endpoints
- [ ] Logout + token invalidation

### 🏗️ Core Features
> [AI fills core features from @main.md]

- [ ] [Feature 1]
  - [ ] Subtask
  - [ ] Subtask
- [ ] [Feature 2]
  - [ ] Subtask
- [ ] [Feature 3]

### 🔒 Security
- [ ] Input validation on all endpoints
- [ ] CORS configuration
- [ ] Rate limiting (global)
- [ ] Security headers
- [ ] Environment variables secured
- [ ] Database access restricted

### 🚀 Deployment
- [ ] Environment variables configured
- [ ] Database production setup
- [ ] Frontend deployed
- [ ] Backend deployed
- [ ] Domain configured
- [ ] SSL/HTTPS enabled
- [ ] Error monitoring setup (Sentry)

---

## 🟡 HIGH — Complete in First 2 Weeks Post-Launch

### Features
> [AI fills from @main.md]

- [ ] [Feature]
- [ ] [Feature]

### Performance
- [ ] Database indexes optimized
- [ ] API response times < 500ms
- [ ] Frontend bundle size optimized
- [ ] Images optimized

### User Experience
- [ ] Loading states on all async operations
- [ ] Error messages for all failure cases
- [ ] Empty states for all lists
- [ ] Mobile responsiveness verified

---

## 🟢 MEDIUM — Next Month

- [ ] [Feature]
- [ ] [Feature]
- [ ] Analytics integration
- [ ] Admin dashboard basics
- [ ] API documentation

---

## 🔵 LOW — Post-MVP / Nice to Have

- [ ] [Feature]
- [ ] [Feature]
- [ ] Automated testing suite
- [ ] CI/CD pipeline
- [ ] Performance monitoring dashboard

---

## ⏳ CURRENTLY IN PROGRESS

> [AI updates this section actively]

| Task | Started | Progress | Blocked By | Who |
|------|---------|----------|-----------|-----|
| | [date] | X% | — | AI/User |

---

## ✅ COMPLETED

> Moved here when done. Keep this list — it shows progress.

| Task | Completed On | Notes |
|------|-------------|-------|
| | | |

---

## 🚫 BLOCKED

> Tasks that can't proceed until something else is resolved

| Task | Blocked By | Since | Resolution Plan |
|------|-----------|-------|----------------|
| | | | |

---

## 💡 BACKLOG (IDEAS)

> Future ideas — not committed to yet

- [ ] [Idea]
- [ ] [Idea]
- [ ] [Idea]

---

## 📊 PROGRESS SUMMARY

> AI updates after every session

```
Total Tasks:      [X]
Completed:        [X] ([X]%)
In Progress:      [X]
Not Started:      [X]
Blocked:          [X]

Estimated Completion: [date estimate]
```

---

## 🤖 AI INSTRUCTION (MULTI-AGENT SYNC)

> Immediately after completing EVERY single task, update:
> 1. Move newly completed tasks to ✅ COMPLETED section
> 2. Update ⏳ CURRENTLY IN PROGRESS with latest state
> 3. Add any new tasks discovered in correct priority section
> 4. Update 📊 PROGRESS SUMMARY numbers
> 5. If something is blocking progress, add to 🚫 BLOCKED
> 
> ⚠️ **IMPORTANT:** In multi-agent environments, updating this file after EVERY single task is non-negotiable to prevent race conditions or stale contexts for other agents.
