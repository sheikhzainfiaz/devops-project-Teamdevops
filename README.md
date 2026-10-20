# devops-project-Teamdevops

## Team Members

| Name | Roll Number |
|---|---|
| Muhammad Talha | 23-NTU-CS-1195 |
| Muhammad Zain Ul Abidin | 23-NTU-CS-1200 |
| Taha Manshoor | 23-NTU-CS-1213 |

## Pull Request Review Policy

All changes must be submitted through pull requests.
At least one team member must review each pull request.

## Markdown Build Tool

This project includes a Node.js tool that converts Markdown files into HTML.

### Requirements

- Node.js
- npm

### Install Dependencies

```bash
npm ci
```

### Build and Test

```bash
make ci
```

### Build a Single Markdown File

```bash
npm run build -- src/notes.md out/notes.html
```

### Run Tests

```bash
npm test
```

The Makefile manages build dependencies, tests, cleanup, and npm packaging. Generated HTML files, installed dependencies, and `.tgz` package archives are excluded from Git.
