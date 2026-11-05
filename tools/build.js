#!/usr/bin/env node

// tools/build.js - renders one Markdown source into one HTML page.

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
});

// Convert Markdown text into a complete HTML page.
function renderPage(markdown, title) {
  const body = md.render(markdown);

  return `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<title>${title}</title>
${body}</html>
`;
}

// Run the build command.
function main(argv) {
  const [src, dest] = argv;

  if (!src || !dest) {
    console.error('usage: build.js <source.md> <dest.html>');
    return 2;
  }

  const title = path.basename(src, '.md')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const html = renderPage(
    fs.readFileSync(src, 'utf8'),
    title
  );

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);

  return 0;
}

// Export functions so tests can load them.
module.exports = { renderPage, main };

// Run main only when this file is executed directly.
if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}
