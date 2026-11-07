// test/duplicates.test.js unit tests for tools/duplicates.js
const { test } = require('node:test');
const assert = require('node:assert');
const { isDuplicate } = require('../tools/duplicates');

test('pages with identical titles are flagged as duplicates', () => {
  const pageA = { title: 'Home' };
  const pageB = { title: 'Home' };
  assert.strictEqual(isDuplicate(pageA, pageB), true);
});

test('pages with different titles are not duplicates', () => {
  const pageA = { title: 'Home' };
  const pageB = { title: 'About' };
  assert.strictEqual(isDuplicate(pageA, pageB), false);
});
