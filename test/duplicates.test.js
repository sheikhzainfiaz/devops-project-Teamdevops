const { test } = require('node:test');
const assert = require('node:assert');
const { isDuplicate } = require('../tools/duplicates');

test('pages with identical titles are flagged as duplicates', () => {
  assert.strictEqual(isDuplicate({ title: 'Home' }, { title: 'Home' }), true);
});

test('pages with different titles are not duplicates', () => {
  assert.strictEqual(isDuplicate({ title: 'Home' }, { title: 'About' }), false);
});

test('returns false if arguments are missing', () => {
  assert.strictEqual(isDuplicate(null, { title: 'Home' }), false);
  assert.strictEqual(isDuplicate({ title: 'Home' }, null), false);
});
