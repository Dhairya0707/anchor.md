# ARCHITECTURE.md — System Architecture
> ⚠️ AI GENERATED FILE — Review and approve after generation.
> Generated from: `@main.md` + `TECH_STACK.md`
> Last Updated: `[AI fills date]`
> Updated By: `[AI fills model name]`
> Connected Files: `DATABASE_SCHEMA.md` `TECH_STACK.md` `DECISIONS.md`

---

## 🗺️ HIGH LEVEL OVERVIEW

> [AI fills: plain English description of how the whole system fits together]

```
[AI fills: ASCII diagram showing system components]

Example:
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│   Backend   │────▶│  Database   │
│  (Next.js)  │◀────│  (Node.js)  │◀────│  (MongoDB)  │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    │    Cache    │
                    │   (Redis)   │
                    └─────────────┘
```

---

## 🖥️ FRONTEND ARCHITECTURE

> [AI fills based on frontend tech stack]

### Component Structure
```
[AI fills folder/component tree]

Example:
src/
├── app/                    (Next.js App Router)
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/
│   └── layout.tsx
├── components/
│   ├── ui/                 (shadcn base components)
│   ├── forms/
│   └── shared/
├── hooks/                  (custom React hooks)
├── lib/                    (utilities, API client)
├── store/                  (Zustand state)
└── types/                  (TypeScript types)
```

### State Management
> [AI fills: what state is managed where and how]

### API Communication
> [AI fills: how frontend talks to backend — REST / GraphQL / tRPC / etc.]

---

## ⚙️ BACKEND ARCHITECTURE

> [AI fills based on backend tech stack]

### Service Structure
```
[AI fills folder/service tree]

Example:
src/
├── routes/
│   ├── auth.routes.ts
│   ├── user.routes.ts
│   └── project.routes.ts
├── controllers/
├── services/               (business logic)
├── models/                 (database models)
├── middleware/
│   ├── auth.middleware.ts
│   └── rateLimit.middleware.ts
├── utils/
└── types/
```

### Request Flow
```
[AI fills: request lifecycle from client to response]

Example:
Request
  → Rate Limiter Middleware
  → Auth Middleware (verify JWT)
  → Route Handler
  → Controller (validate input with Zod)
  → Service (business logic)
  → Database / Cache
  → Response
```

### Background Jobs
> [AI fills: any queues, cron jobs, background tasks]

---

## 🗄️ DATABASE ARCHITECTURE

> See `DATABASE_SCHEMA.md` for detailed schema.
> This section covers relationships and design decisions only.

### Database Choice
> [AI fills: why this database for this project]

### Data Relationships
```
[AI fills: entity relationship overview]

Example:
Users (1) ──────── (N) Projects
Projects (1) ────── (N) Tasks
Users (N) ─────────(N) Teams [through TeamMembers]
```

### Indexing Strategy
> [AI fills: which fields are indexed and why]

### Caching Strategy
> [AI fills: what gets cached, for how long, cache invalidation rules]

---

## 🔌 THIRD PARTY INTEGRATIONS

> [AI fills based on integrations listed in @main.md]

| Service | Purpose | Integration Type |
|---------|---------|-----------------|
| | | REST API / Webhook / SDK |

---

## 🚀 DEPLOYMENT ARCHITECTURE

> [AI fills based on hosting choices in @main.md]

```
[AI fills: deployment diagram]

Example:
GitHub Push
  → GitHub Actions (CI/CD)
  → Run Tests
  → Build
  → Deploy Frontend → Vercel
  → Deploy Backend → Railway
  → Database → MongoDB Atlas (always running)
  → Cache → Upstash Redis (always running)
```

### Environment Strategy
```
Development  → Local machine + .env.local
Staging      → [AI fills hosting choice]
Production   → [AI fills hosting choice]
```

---

## 📡 API STRUCTURE

> [AI fills: API design overview]

### Base URL
```
Development: http://localhost:3001/api/v1
Production:  https://api.[project].com/v1
```

### Standard Response Format
```json
{
  "success": true,
  "data": {},
  "error": null,
  "message": "Optional message"
}
```

### Error Response Format
```json
{
  "success": false,
  "data": null,
  "error": "Error description",
  "code": "ERROR_CODE"
}
```

### API Modules
> [AI fills: list of API modules and their base routes]

| Module | Base Route | Description |
|--------|-----------|-------------|
| Auth | `/api/v1/auth` | |
| Users | `/api/v1/users` | |
| | | |

---

## ⚠️ ARCHITECTURAL CONSTRAINTS

> Things that MUST NOT change without updating DECISIONS.md

- [AI fills: e.g. "All API responses must follow standard format above"]
- [AI fills: e.g. "Frontend and backend must be deployed separately"]
- [AI fills: e.g. "No direct database access from frontend"]
- [AI fills: e.g. "All auth must go through `/api/v1/auth` only"]

---

## 🔗 RELATED FILES

- Tech stack details → `TECH_STACK.md`
- Database schemas → `DATABASE_SCHEMA.md`
- Security design → `SECURITY.md`
- Why we built it this way → `DECISIONS.md`
