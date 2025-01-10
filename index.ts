function isBurnerEmail(email: string): boolean {
  return allowedEmails[email.split('@')[1]] !== undefined;
}