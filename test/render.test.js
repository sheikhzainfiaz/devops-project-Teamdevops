// test/render.test.js
// Unit tests for tools/build.js

const { test } = require('node:test');
const assert = require('node:assert');
const { renderPage, main } = require('../tools/build');

test('a heading becomes an h1', () => {
  const html = renderPage('# Hello', 'test');

  assert.match(html, /<h1>Hello<\/h1>/);
});

test('the title is the one we pass in', () => {
  const html = renderPage('Some text', 'notes');

  assert.match(html, /<title>notes<\/title>/);
});

test('normal text becomes a paragraph', () => {
  const html = renderPage('Hello world', 'test');

  assert.match(html, /<p>Hello world<\/p>/);
});

test('main returns 2 when source or destination is missing', () => {
  const result = main([]);

  assert.strictEqual(result, 2);
});
