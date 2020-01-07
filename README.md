# applause-a11y-fixer

This command line application runs [axe-core](https://www.npmjs.com/package/axe-core) accessibility checks against `html` files or urls.
It can return a report of accessibility problems or write the fixed `html` to a new or existing local file.

## Prerequisites

* `node@12.13.0`

## Quickstart

**Setup the application:**
```bash
npm run setup
```

**Run the linter(s):**
```bash
npm run lint
```

## Usage
**Report violation(s) for the example-file:**
```bash
node src/cli.js report example.html
```

**Fix violation(s) for the example-file:**
```bash
node src/cli.js fix example.html
```

## Options
```bash
$ node src/cli.js -h
```
```bash
Usage: a11y-fixer [options] [command]

Applause A11Y (Accessibility) Issue Reporter / Fixer

Options:
  -V, --version                              output the version number
  -h, --help                                 output usage information

Commands:
  report [options] <path-or-url>
  fix [options] <path-or-url> [target-file]
```
