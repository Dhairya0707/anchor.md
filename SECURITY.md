# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in anchor.md, please **do not** open a public issue. Instead, email the maintainer directly:

**Dhairya Darji** — dhairyadarji@gmail.com

Please include:
- A description of the vulnerability
- Steps to reproduce (if applicable)
- Potential impact

You will receive a response within 72 hours. Once the vulnerability is confirmed, we will work on a fix and disclose it responsibly after the patch is released.

## Scope

This security policy covers:
- The `create-anchor-md` npm package (CLI)
- The `install.sh` script
- The `anchor.md/` template files
- The website source code in `website/`

## Best Practices

- `anchor.md/` is added to `.gitignore` by default — do not remove this unless you understand the risks
- Never store API keys, tokens, or production credentials inside `anchor.md/` context files
- The `share-to-ai.md` export file is also git-ignored by default — review its contents before sharing
