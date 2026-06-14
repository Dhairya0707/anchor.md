# SECURITY.md — Security Guidelines & Checklist
> ⚠️ AI GENERATED FILE — Review and add project-specific requirements.
> Generated from: `@main.md` + `ARCHITECTURE.md`
> Last Updated: `[AI fills date]`
> Updated By: `[AI fills model name]`
> Connected Files: `ARCHITECTURE.md` `TECH_STACK.md` `DATABASE_SCHEMA.md`

---
> 📌 **RULE FOR AI**
> This file is NON-NEGOTIABLE.
> Every feature you build MUST comply with this checklist.
> If a feature conflicts with this file → flag it to user BEFORE writing code.
> Never skip a security requirement even if user doesn't mention it.
---

## 🔐 AUTHENTICATION SECURITY

### Password Security
- [ ] Hash all passwords using bcrypt with **minimum 12 rounds**
- [ ] Never log passwords anywhere
- [ ] Never store plain text passwords
- [ ] Enforce minimum password length: **8 characters**
- [ ] Enforce complexity: at least 1 uppercase, 1 number

### Token Security
- [ ] Access token expiry: **15 minutes**
- [ ] Refresh token expiry: **7 days**
- [ ] Store refresh tokens in **httpOnly cookies** (not localStorage)
- [ ] Rotate refresh token on every use
- [ ] Invalidate all tokens on password change
- [ ] Implement token blacklist on logout

### Login Security
- [ ] Rate limit login attempts: **5 attempts per 15 minutes per IP**
- [ ] Lock account after **10 failed attempts**
- [ ] Log all failed login attempts
- [ ] Implement CAPTCHA for repeated failures (optional per project)

### Session Security
- [ ] Expire sessions after inactivity: **30 minutes** (configurable)
- [ ] Allow users to see active sessions
- [ ] Allow users to terminate all sessions

---

## 🛡️ AUTHORIZATION SECURITY

### Role-Based Access Control (RBAC)
> [AI fills roles based on @main.md project type]

| Role | Access Level | Description |
|------|-------------|-------------|
| | | |

### Authorization Rules
- [ ] Check permissions on **every API endpoint** — no exceptions
- [ ] Never trust client-side role claims
- [ ] Implement middleware for authorization checks
- [ ] Return `403 Forbidden` (not 404) for unauthorized resources
- [ ] Never expose admin routes to regular users

---

## 🌐 API SECURITY

### Rate Limiting
- [ ] Global rate limit: **100 requests per minute per IP**
- [ ] Auth endpoints: **5 requests per 15 minutes per IP**
- [ ] Search endpoints: **30 requests per minute per user**
- [ ] File upload endpoints: **10 requests per hour per user**

### Input Validation
- [ ] Validate ALL inputs server-side using schema validation (Zod/Joi)
- [ ] Never trust client-side validation alone
- [ ] Reject requests with unexpected fields
- [ ] Sanitize all string inputs
- [ ] Validate file types and sizes on upload

### CORS Configuration
- [ ] Allow only trusted origins (never `*` in production)
- [ ] Allowed origins:
  ```
  Development: http://localhost:3000
  Production: https://[your-domain].com
  ```
- [ ] Only allow necessary HTTP methods

### HTTP Security Headers
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Strict-Transport-Security` (HTTPS enforcement)
- [ ] `Content-Security-Policy` configured properly

---

## 💉 INJECTION PREVENTION

### SQL / NoSQL Injection
- [ ] Use ORM/ODM for all database operations (never raw queries)
- [ ] If raw queries needed → use parameterized queries only
- [ ] Validate all database inputs before querying

### XSS Prevention
- [ ] Sanitize all HTML inputs (use DOMPurify or equivalent)
- [ ] Use Content Security Policy headers
- [ ] Encode output in templates

### Command Injection
- [ ] Never pass user input to shell commands
- [ ] Validate file names and paths strictly

---

## 🔑 SECRETS & ENVIRONMENT SECURITY

- [ ] All secrets in environment variables — **NEVER hardcoded**
- [ ] `.env` files in `.gitignore` — **NEVER committed to repo**
- [ ] Different secrets for dev/staging/production
- [ ] Rotate secrets regularly (every 90 days minimum)
- [ ] Use secret manager in production (AWS Secrets Manager / Doppler)

### Required Environment Variables
> [AI fills based on project's integrations]
```
[List all env vars needed — no values, just keys and descriptions]
```

---

## 🗄️ DATABASE SECURITY

- [ ] Never expose database directly to internet
- [ ] Use connection string with credentials from env vars
- [ ] Enable authentication on database
- [ ] Use least-privilege database user (not root/admin)
- [ ] Encrypt sensitive fields in database (see below)
- [ ] Regular automated backups (daily minimum)
- [ ] Test backup restoration regularly

### Fields That Must Be Encrypted
> [AI fills based on project's data]

| Field | Encryption Method | Reason |
|-------|------------------|--------|
| password | bcrypt hash | Authentication |
| | | |

---

## 📁 FILE UPLOAD SECURITY

> [Only if project has file uploads]

- [ ] Validate file type by **MIME type** (not just extension)
- [ ] Limit file size: **[AI fills based on project type]**
- [ ] Scan files for malware if sensitive project
- [ ] Store files outside web root
- [ ] Generate random file names (never use original name)
- [ ] Serve files through authenticated endpoints only

---

## 📋 COMPLIANCE REQUIREMENTS

> [AI fills based on compliance noted in @main.md]

### GDPR (If applicable)
- [ ] Right to deletion — endpoint to delete all user data
- [ ] Right to export — endpoint to export all user data
- [ ] Explicit consent for data collection
- [ ] Privacy policy accessible before signup
- [ ] Cookie consent banner

### PCI-DSS (If handling payments)
- [ ] Never store raw card numbers
- [ ] Use Stripe/payment gateway — never process cards directly
- [ ] Log all payment transactions

---

## 🔍 LOGGING & MONITORING

### What to Log
- [ ] All authentication events (login, logout, failed attempts)
- [ ] All authorization failures
- [ ] All data modifications (create, update, delete)
- [ ] All API errors (500s)
- [ ] All payment events

### What to NEVER Log
- [ ] Passwords (even hashed)
- [ ] Full credit card numbers
- [ ] Full API keys or tokens
- [ ] Personal health information

### Monitoring Alerts
- [ ] Alert on 100+ failed logins in 5 minutes
- [ ] Alert on unusual data access patterns
- [ ] Alert on server errors spike

---

## 🧪 SECURITY TESTING CHECKLIST

> Run this before every major release:

- [ ] Check all inputs for injection vulnerabilities
- [ ] Test rate limiting is working
- [ ] Test unauthorized access to protected routes
- [ ] Test token expiry and rotation
- [ ] Check for exposed sensitive data in responses
- [ ] Run `npm audit` or equivalent — fix critical vulnerabilities
- [ ] Check all env vars are not exposed in client code

---

## ⚠️ SECURITY INCIDENT RESPONSE

> If a security issue is discovered:

1. **Immediately** rotate all exposed secrets
2. **Invalidate** all active sessions
3. **Document** what was exposed and for how long
4. **Patch** the vulnerability
5. **Notify** affected users if data was exposed
6. **Add** prevention to this checklist

---

## 🔗 RELATED FILES

- Implementation details → `ARCHITECTURE.md`
- Database security → `DATABASE_SCHEMA.md`
- Why security decisions → `DECISIONS.md`
