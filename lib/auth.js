import bcrypt from 'bcryptjs';

// You can change this password by setting PATTERNS_PASSWORD environment variable
const PATTERNS_PASSWORD_HASH = process.env.PATTERNS_PASSWORD_HASH ||
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // 'patterns123'

export function validatePassword(password) {
  return bcrypt.compareSync(password, PATTERNS_PASSWORD_HASH);
}

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

// Simple session store (in production, use Redis or database)
const sessions = new Map();

export function createSession(sessionId) {
  const expiresAt = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
  sessions.set(sessionId, { expiresAt });
  return sessionId;
}

export function isValidSession(sessionId) {
  const session = sessions.get(sessionId);
  if (!session) return false;

  if (Date.now() > session.expiresAt) {
    sessions.delete(sessionId);
    return false;
  }

  return true;
}