function createLoginTracker(userInfo) {
  // Validate that userInfo is a non-null object with string username and password
  if (
    !userInfo ||
    typeof userInfo !== 'object' ||
    typeof userInfo.username !== 'string' ||
    typeof userInfo.password !== 'string'
  ) {
    throw new Error('userInfo must be an object with a username and password string');
  }

  // attemptCount is scoped here — only the inner arrow function can access it.
  // This closure keeps the count private and prevents external tampering.
  let attemptCount = 0;

  // Inner arrow function returned to the caller to handle each login attempt
  return (passwordAttempt) => {
    // Validate that the entered password is a string
    if (typeof passwordAttempt !== 'string') {
      throw new Error('passwordAttempt must be a string');
    }

    // Increment the attempt counter each time the function is called
    attemptCount++;
    console.log(`Attempt #${attemptCount} | Entered: "${passwordAttempt}" | Expected: "${userInfo.password}"`);

    // Lock the account once the attempt count exceeds 3
    if (attemptCount > 3) {
      return 'Account locked due to too many failed login attempts';
    }

    // If the entered password matches, grant access
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    }

    // Password did not match — return a numbered failure message
    return `Attempt ${attemptCount}: Login failed`;
  };
}

// --- Test Cases ---

console.log('\n-- Test: Successful login on first try --');
const user1 = createLoginTracker({ username: 'user1', password: 'password123' });
console.log(user1('password123'));

console.log('\n-- Test: Failed logins then successful --');
const user2 = createLoginTracker({ username: 'user2', password: 'password123' });
console.log(user2('wrongPass'));
console.log(user2('wrongPass'));
console.log(user2('password123'));

console.log('\n-- Test: Exceed max attempts (account lock) --');
const user3 = createLoginTracker({ username: 'user3', password: 'password123' });
console.log(user3('wrong'));
console.log(user3('wrong'));
console.log(user3('wrong'));
console.log(user3('wrong'));

console.log('\n-- Test: Invalid userInfo (error handling) --');
try {
  createLoginTracker({ username: 'user4' }); // missing password
} catch (e) {
  console.log('Caught error:', e.message);
}

console.log('\n-- Test: Invalid passwordAttempt (error handling) --');
try {
  const user5 = createLoginTracker({ username: 'user5', password: 'abc' });
  user5(12345); // number instead of string
} catch (e) {
  console.log('Caught error:', e.message);
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
