/**
 * Checks whether the given email address is a known disposable/burner email.
 * @param email the email address to check
 * @returns true if the email is a known disposable/burner email, false otherwise
 */
function isBurnerEmail(email: string): boolean {
  return allowedEmails[email.split('@')[1]] !== undefined;
}

/**
 * Checks whether the given domain is a known disposable/burner domain.
 * @param domain the domain to check
 * @returns true if the domain is a known disposable/burner domain, false otherwise
 */
function isBurnerDomain(domain: string): boolean {
  return allowedEmails[domain] !== undefined;
}

export default isBurnerEmail;