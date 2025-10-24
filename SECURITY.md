# Security Policy

## Supported Versions

We actively support and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 5.x     | :white_check_mark: |
| 4.x     | :warning: Limited  |
| < 4.0   | :x:                |

> **Note:** Only the `latest` version receives security updates. Old releases are not maintained.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you think you have found a vulnerability (or are not sure) in Auth.js or any of the related packages (i.e., Adapters), please follow these steps:

### 1. Email Report

Send an email to **security@authjs.dev** with:

- A description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Any suggested fixes (if available)

### 2. Response Time

- Initial response: Within 48 hours
- Status updates: Every 5-7 days
- Resolution timeline: Depends on severity

### 3. Disclosure Policy

- We follow coordinated disclosure
- We'll work with you to understand and resolve the issue
- We'll notify users once a fix is available
- We'll credit you in the advisory (unless you prefer to remain anonymous)

## Security Best Practices

When using Auth.js:

1. **Always use the latest version** - Security updates are only released for current versions
2. **Set a strong secret** - Use at least 32 characters (`openssl rand -hex 32`)
3. **Enable HTTPS** - Always use HTTPS in production
4. **Configure CSP headers** - Set proper Content Security Policy headers
5. **Review provider configuration** - Ensure OAuth providers are properly configured
6. **Database security** - Secure your database connection strings
7. **Regular audits** - Run `pnpm audit` or `npm audit` regularly

## Known Security Considerations

### Credentials Provider

The Credentials provider is intentionally limited due to inherent security risks. OAuth providers are recommended instead as they:

- Provide built-in abuse detection
- Handle password management
- Implement data security best practices

### Session Strategy

- **JWT sessions** - Ensure your secret is properly secured
- **Database sessions** - Ensure proper database security and connection encryption

### CSRF Protection

Auth.js includes CSRF protection by default. Do not disable it unless you fully understand the implications.

## Security Advisories

Security advisories are published on:

- [GitHub Security Advisories](https://github.com/nextauthjs/next-auth/security/advisories)
- [Auth.js Security Page](https://authjs.dev/security)

## Resources

- [Auth.js Documentation](https://authjs.dev)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OAuth 2.0 Security Best Practices](https://tools.ietf.org/html/draft-ietf-oauth-security-topics)

---

Thank you for helping keep Auth.js and the community safe!
