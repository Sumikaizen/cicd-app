const assert = require('assert');

// Simple test
function add(a, b) { return a + b; }

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(10, 20), 30);

console.log('All tests passed!');