# Security Policy

## Supported Versions

We actively support the following versions of the Hotel Corona project:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Hotel Corona seriously. If you have discovered a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### Please Do Not:

- Open a public GitHub issue for security vulnerabilities
- Disclose the vulnerability publicly before it has been addressed
- Exploit the vulnerability beyond what is necessary to demonstrate it

### Please Do:

**Report security vulnerabilities to:** security@hotelcorona.com

Include the following information in your report:

- Type of vulnerability (e.g., XSS, SQL injection, authentication bypass)
- Full paths of source file(s) related to the manifestation of the vulnerability
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- **Initial Response**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Assessment**: We will assess the vulnerability and determine its impact within 5 business days
- **Fix Development**: We will work to develop a fix as quickly as possible
- **Disclosure**: Once a fix is deployed, we will publicly disclose the vulnerability (with credit to you if desired)

## Security Best Practices

### For Contributors

When contributing to this project, please follow these security best practices:

1. **Dependencies**
   - Keep dependencies up to date
   - Run `npm audit` regularly to check for vulnerabilities
   - Review security advisories for packages we use

2. **Code Practices**
   - Never commit sensitive data (API keys, passwords, tokens)
   - Use environment variables for configuration
   - Validate and sanitize all user inputs
   - Implement proper authentication and authorization
   - Use HTTPS for all external API calls

3. **Data Handling**
   - Follow GDPR guidelines for personal data
   - Implement proper data encryption where necessary
   - Use secure session management
   - Implement rate limiting on forms and APIs

4. **Frontend Security**
   - Prevent XSS attacks by sanitizing user input
   - Use Content Security Policy (CSP) headers
   - Implement CSRF protection on forms
   - Avoid exposing sensitive information in client-side code

5. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.example` for documentation
   - Rotate secrets regularly
   - Use different credentials for development and production

### For Deployment

1. **Vercel Security**
   - Keep Vercel CLI and dependencies updated
   - Use environment variables for sensitive configuration
   - Enable Vercel's security features (DDoS protection, etc.)
   - Monitor deployment logs for suspicious activity

2. **Domain Security**
   - Use HTTPS exclusively (enforced by Vercel)
   - Implement proper CORS policies
   - Set secure headers (HSTS, X-Frame-Options, etc.)

3. **Monitoring**
   - Set up error tracking (Sentry, LogRocket, etc.)
   - Monitor for unusual traffic patterns
   - Review logs regularly for security incidents
   - Set up alerts for critical errors

## Known Security Considerations

### Current Status

1. **Client-Side Only** (Phase 1)
   - No server-side authentication yet
   - No database connections yet
   - Forms are UI-only (backend integration pending)
   - No sensitive data processing

2. **Future Considerations** (Phase 2+)
   - Will implement proper authentication system
   - Will add rate limiting for API endpoints
   - Will implement CSRF protection
   - Will add input validation and sanitization
   - Will implement secure payment processing

## Security Checklist for Production

Before deploying to production, ensure:

- [ ] All dependencies are up to date and audited
- [ ] No sensitive data in source code or commits
- [ ] Environment variables properly configured
- [ ] HTTPS enforced across the site
- [ ] Security headers configured
- [ ] CORS policy properly set
- [ ] Rate limiting implemented (when APIs added)
- [ ] Input validation on all forms
- [ ] XSS protection in place
- [ ] CSRF protection on forms (when backend added)
- [ ] Error messages don't expose sensitive info
- [ ] Logging configured but doesn't log sensitive data
- [ ] Monitoring and alerting set up

## Vulnerability Disclosure Policy

We believe in responsible disclosure and will:

1. Acknowledge your report within 48 hours
2. Keep you informed of our progress
3. Credit you for the discovery (if desired) once the issue is resolved
4. Not take legal action against researchers who follow this policy

### Scope

This policy applies to the following:

**In Scope:**
- The Hotel Corona website (production and staging)
- Associated APIs and services
- Mobile responsive versions

**Out of Scope:**
- Third-party services we integrate with
- Social engineering attacks
- Physical security
- Denial of service attacks

## Security Updates

We will announce security updates through:

- GitHub Security Advisories
- Release notes
- Email to registered users (when user system implemented)

To stay informed about security updates:
- Watch this repository
- Check release notes regularly
- Subscribe to security advisories

## Contact

For security-related questions or concerns:

- **Email**: security@hotelcorona.com
- **Response Time**: Within 48 hours

For general questions, please use the regular contact methods outlined in the README.

---

**Last Updated**: November 2025

Thank you for helping keep Hotel Corona and our users safe!

