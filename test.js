const { isBurnerEmail } = require('./index');
const assert = require('assert');

assert(isBurnerEmail('inu@gmail.com') === false, 'valid ✅');
assert(isBurnerEmail('inu@yopmail') === true, 'invalid ❌');