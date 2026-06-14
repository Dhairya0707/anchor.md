# CONTEXT_MEMORY.md — Project Memory & Context
> 🤖 AI MAINTAINED — AI updates this after EVERY session without fail.
> Last Updated: `[AI fills: date + time]`
> Last AI Used: `[AI fills: model name e.g. Claude 3.5 Sonnet]`
> Connected Files: ALL files in `.anchor.md/`

---
> 📌 **RULE FOR AI**
> This file is your MEMORY. Read it at the START of every session.
> Update it at the END of every session — even small sessions.
> Without this file, the next AI session starts blind.
> Treat this as the MOST IMPORTANT file in the entire system.
>
> **At session start:** If this file is not already in your context, locate and read it from the workspace (.anchor.md/CONTEXT_MEMORY.md) first to understand the current state.
> **At session end:** Update every section that changed.
---

## 📊 PROJECT HEALTH SNAPSHOT

> AI updates this every session

```
Last Updated:     [date + time]
Session Count:    [increment by 1 each session]
Overall Progress: [X]%

Frontend:  [X]% — [one line current status]
Backend:   [X]% — [one line current status]
Database:  [X]% — [one line current status]
DevOps:    [X]% — [one line current status]
Testing:   [X]% — [one line current status]
```

---

## 🕐 LAST SESSION SUMMARY

> AI fills after each session. Previous session moves to SESSION HISTORY below.

```
Date:         [date]
Duration:     [approximate]
AI Model:     [model name]
Focus Area:   [e.g. Backend Auth / Frontend Dashboard / Database Schema]
```

### What Was Accomplished
> [AI fills: bullet list of everything completed this session]

- ✅
- ✅
- ✅

### What Was Started But Not Finished
> [AI fills: in-progress items with current state]

- ⏳ [Task] — Current state: [description of where it stopped]
- ⏳ [Task] — Current state: [description]

### Decisions Made This Session
> [AI fills: any architectural/product decisions made]

- [Decision]: [reason]

### Problems Encountered
> [AI fills: issues hit during the session]

| Problem | Root Cause | Status | Fix Applied |
|---------|-----------|--------|------------|
| | | Solved / Pending | |

---

## 📍 CURRENT PROJECT STATE

> AI maintains this as the LIVE source of truth

### Feature Completion Status

| Feature | Status | Progress | Notes |
|---------|--------|----------|-------|
| | 🔲 Not Started | 0% | |
| | ⏳ In Progress | X% | |
| | ✅ Complete | 100% | |

### What Works RIGHT NOW
> [AI fills: features/endpoints/components that are fully working]

- ✅ [Feature/Endpoint/Component]
- ✅
- ✅

### What Is Broken / Not Working
> [AI fills: known broken things — never hide this]

- ❌ [Issue] — Cause: [reason] — Fix: [planned fix]
- ❌

### What Is In Progress
> [AI fills: things currently being built]

- ⏳ [Task] — [X]% done — Next step: [what to do next]
- ⏳

---

## 🗂️ CODEBASE MAP

> AI fills and updates this so next AI knows where everything is

### Backend Code Locations

| What | Location | Notes |
|------|---------|-------|
| Auth routes | `/backend/src/routes/auth.js` | |
| User model | `/backend/src/models/User.js` | |
| Auth middleware | `/backend/src/middleware/auth.js` | |
| | | |

### Frontend Code Locations

| What | Location | Notes |
|------|---------|-------|
| Auth hook | `/frontend/src/hooks/useAuth.js` | |
| Dashboard page | `/frontend/src/app/dashboard/page.tsx` | |
| API client | `/frontend/src/lib/api.js` | |
| | | |

### Config Files

| What | Location | Notes |
|------|---------|-------|
| Environment template | `/.env.example` | |
| Database config | | |
| | | |

---

## ⚠️ CRITICAL CONTEXT FOR NEXT SESSION

> [AI fills: the most important things the next AI MUST know before starting]
> This is like a handoff note to the next developer

```
1. [Critical thing #1 — e.g. "The auth system uses httpOnly cookies, NOT localStorage"]
2. [Critical thing #2 — e.g. "We use pnpm, not npm — always use pnpm commands"]
3. [Critical thing #3 — e.g. "MongoDB is on Atlas free tier — don't add heavy queries"]
4. [Critical thing #4]
5. [Critical thing #5]
```

---

## 🐛 KNOWN BUGS & ISSUES

> AI maintains this list. Add bugs, mark fixed bugs.

| # | Bug | Severity | Status | File Location |
|---|-----|----------|--------|--------------|
| 1 | | High/Med/Low | Open/Fixed | |
| 2 | | | | |

---

## 🔧 ENVIRONMENT & SETUP NOTES

> [AI fills: any quirks about the development environment]

```
Node Version:     [e.g. 22.x — required for X feature]
Package Manager:  [e.g. pnpm — use pnpm not npm]
Dev Server:       [e.g. Frontend: localhost:3000 / Backend: localhost:3001]
Database:         [e.g. MongoDB Atlas / local MongoDB on port 27017]
Special Setup:    [e.g. Need to run `pnpm db:seed` on first run]
```

---

## 📦 LAST KNOWN WORKING STATE

> AI updates this whenever a stable checkpoint is reached

```
Date of Last Stable State:  [date]
Git Commit / Branch:        [if applicable]
What Was Working:           [list of working features at this point]
```

---

## 📝 SESSION HISTORY

> Previous sessions moved here. Keep last 5 sessions minimum.

### Session [N-1] — [Date]
```
AI Model: [model]
Accomplished: [brief summary]
Key Changes: [what changed in codebase]
```

### Session [N-2] — [Date]
```
AI Model: [model]
Accomplished: [brief summary]
Key Changes: [what changed in codebase]
```

### Session [N-3] — [Date]
```
AI Model: [model]
Accomplished: [brief summary]
Key Changes: [what changed in codebase]
```

---

## 🤖 AI INSTRUCTION — AFTER EVERY SINGLE TASK (MULTI-AGENT SAFETY)

> IMMEDIATELY after completing every single task, AI must:

1. Update **PROJECT HEALTH SNAPSHOT** with new percentages
2. Move current **LAST SESSION SUMMARY** to **SESSION HISTORY** if session ends
3. Write new **LAST SESSION SUMMARY** for the completed task
4. Update **CURRENT PROJECT STATE** feature completion table
5. Update **CODEBASE MAP** if files were created or modified
6. Update **KNOWN BUGS & ISSUES** with any new bugs found or fixed
7. Update **CRITICAL CONTEXT FOR NEXT SESSION** if anything important changed
8. Update `TODO.md` to reflect completed tasks

> ⚠️ **IMPORTANT:** In multi-agent environments, updating this file after EVERY single task is non-negotiable to prevent race conditions or stale contexts for other agents.
