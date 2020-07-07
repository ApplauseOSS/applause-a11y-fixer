# applause-a11y-fixer

This command line application runs [axe-core](https://www.npmjs.com/package/axe-core) accessibility checks against `html` files or urls.
It can return a report of accessibility problems or write the fixed `html` to a new or existing local file.

(*if you are looking for the curated version of the plug-in please visit:
https://www.applause.com/accessibility-tool#solutionsContact and fill out the
form*)

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
node src/cli.js fix example.html example-fixed.html
```

### Options

**Review the help to see various options**
```bash
$ node src/cli.js -h
$ node src/cli.js fix -h
$ node src/cli.js report -h
```
**Flags:**

* Global
    * `-r, --rules <rules>`  Only run checks or fixes against this list of comma separated rule id's.
    Example: `-r "button-name, valid-lang"`
* `fix`
    * `-p, --preview`  Print the fixed html to the console. When using this rule a target file does not need to be specified.
* `report`
    * `-j, --json` Print the raw Axe violation json data instead of the human readable version.
