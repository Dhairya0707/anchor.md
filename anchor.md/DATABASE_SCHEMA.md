# DATABASE_SCHEMA.md — Database Schema
> ⚠️ AI GENERATED FILE — User must review and approve schemas before building.
> Generated from: `@main.md` + `ARCHITECTURE.md`
> Last Updated: `[AI fills date]`
> Updated By: `[AI fills model name]`
> Connected Files: `ARCHITECTURE.md` `TECH_STACK.md` `SECURITY.md`

---
> 📌 **RULE FOR AI**
> Before creating ANY database model or writing ANY query,
> read this file completely. Never create a field that isn't here.
> If a new field is needed → ask user → update this file first → then code.
---

## 🗂️ COLLECTIONS / TABLES OVERVIEW

> [AI fills: list of all collections/tables with one-line description]

| Name | Description | Est. Records |
|------|-------------|-------------|
| | | |
| | | |

---

## 📋 SCHEMAS

> [AI fills all schemas based on features in @main.md]
> Format adapts based on database type: MongoDB (JSON) / PostgreSQL (SQL) / etc.

---

### [Collection/Table Name]

> [AI fills description of what this stores]

```
[AI fills schema in appropriate format]

MongoDB Example:
{
  _id: ObjectId,                    // Auto-generated
  fieldName: Type,                  // Description
  createdAt: Date,                  // Auto-set on create
  updatedAt: Date,                  // Auto-set on update
}

PostgreSQL Example:
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  field_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Field Rules:**
| Field | Type | Required | Unique | Default |
|-------|------|----------|--------|---------|
| | | | | |

**Indexes:**
```
[AI fills: indexes for this collection]
Example: db.users.createIndex({ email: 1 }, { unique: true })
```

---

### [Next Collection/Table]

> [Repeat pattern above for each collection/table]

---

## 🔗 RELATIONSHIPS

> [AI fills: how collections/tables relate to each other]

```
[AI fills diagram]

Example:
Users (1) ──────── (N) Projects
  │
  └── (N) ──── (N) Teams [through TeamMembers join table]

Projects (1) ────── (N) Tasks
Tasks (1) ─────────(N) Comments
```

### Relationship Rules
> [AI fills: important rules about relationships]

- [e.g. Deleting a User → cascade delete all their Projects]
- [e.g. Deleting a Project → soft delete (mark as deleted, don't remove)]
- [e.g. A User can belong to many Teams but one Team per Project]

---

## 🔍 INDEXING STRATEGY

> [AI fills: complete list of all indexes across all collections]

| Collection | Field(s) | Type | Reason |
|-----------|---------|------|--------|
| | | Unique / Regular / Compound | |
| | | | |

---

## 🏷️ ENUM VALUES

> [AI fills: all enum/constant values used across schemas]

| Field | Allowed Values | Default |
|-------|---------------|---------|
| user.role | `['user', 'admin', 'moderator']` | `'user'` |
| | | |

---

## 🚫 VALIDATION RULES

> [AI fills: important validation rules to enforce at DB level]

| Field | Rule | Error Message |
|-------|------|--------------|
| email | Must be valid email format | "Invalid email address" |
| password | Min 8 chars | "Password too short" |
| | | |

---

## 🌱 SEED DATA

> [AI fills: initial data needed to start the app]

```
[AI fills: seed data scripts or descriptions]

Example:
Admin User:
{
  email: "admin@[project].com",
  role: "admin",
  name: "Admin"
}

Default Subscription Plans:
- Free: 0/month, 3 projects, 1 user
- Pro: $9/month, unlimited projects, 5 users
- Enterprise: Custom
```

---

## 📊 DATA MIGRATION NOTES

> [Only relevant for existing projects]
> [AI fills: any data migration needed from old schema to new]

---

## ⚠️ SCHEMA CHANGE RULES

> Follow this process when schema changes are needed:

1. Discuss with user
2. Update this file first
3. Add entry in `DECISIONS.md` explaining why
4. Write migration script if needed
5. Update `ARCHITECTURE.md` relationships section
6. Then write code

> **Never change schema in code without updating this file first.**

---

## 🔗 RELATED FILES

- System architecture → `ARCHITECTURE.md`
- Security for data → `SECURITY.md`
- Why this schema design → `DECISIONS.md`
