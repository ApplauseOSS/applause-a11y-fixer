# applause-a11y-fixer

## Prerequisites

* `node@12.13.0`

## Quickstart

**Setup the application:**
```bash
npm install

# or

npm run setup
```

**Run the linter(s):**
```bash
npx eslint *.js

# or

npm run lint
```

**Report violation(s) for the example-file:**
```bash
node a11y-fixer.js example.html

# or

npm start example.html
```

**Fix violation(s) for the example-file:**
```bash
node a11y-fixer.js example.html --fix

# or

npm start example.html -- --fix
```

## Usage

```bash
Usage: node a11y-fixer.js <path-or-url> [--fix] [<source-code-directory>]

<path-or-url>
    path to a HTML file or URL to check for violations / fix (required)

--fix
    apply the applicable fixes and output the result (optional)

<source-code-directory>
    path to the source-directory (optional, though required for source-code fixes)
```
