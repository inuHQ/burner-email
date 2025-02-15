const allowedEmails = require('./generated-file.js');

/**
 * Checks whether the given email address is a known disposable/burner email.
 * @param {string} email the email address to check
 * @returns {boolean} true if the email is a known disposable/burner email, false otherwise
 */
function isBurnerEmail(email) {
  return allowedEmails[email.split('@')[1]] !== undefined;
}

/**
 * Checks whether the given domain is a known disposable/burner domain.
 * @param {string} domain the domain to check
 * @returns {boolean} true if the domain is a known disposable/burner domain, false otherwise
 */
function isBurnerDomain(domain) {
  return allowedEmails[domain] !== undefined;
}

module.exports = {
  isBurnerEmail,
  isBurnerDomain
};