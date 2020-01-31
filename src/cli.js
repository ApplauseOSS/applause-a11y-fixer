const program = require('commander');
const report = require('./commands/report');
const fix = require('./commands/fix');
const pjson = require('./../package.json');
const errors = require('./errors/errors');
const {commaSeparatedListProcessor} = require('./processors/argumentProcessors');
const logger = require('./logging/logger');

program
  .name(pjson.name)
  .version(pjson.version)
  .description(pjson.description)
  .option('-v, --verbose', 'Show log messages below error level.')
  // .on('option:verbose', () => {
  //   logger.level = 'debug';
  // })
  .option('-r, --rules <rules...>', 'Only check these Axe rules (comma-separated)', commaSeparatedListProcessor)
  .option('-u, --user-agent <userAgent>',
    'Custom User-Agent Header for use when input is url. ' +
    'If omitted user-agent will be automatically generated as a "desktop".');

/**
 * Report Command
 * Prints an accessibility report either in human-readable or json format
 */
program
  .command('report <path-or-url>')
  .option('-j, --json', 'Print output as raw Axe json.')
  .action(async function(path, command) {
    try {
      await report(path, command.json, program.rules, program.userAgent);
    } catch (err) {
      process.stderr.write(`Error: ${err.message}\n\n`);
      program.outputHelp();
    }
  });

/**
 * Fix Command
 * Applies fixes to the html and optionally saves it to a file.
 */
program
  .command('fix <path-or-url> [target-file]')
  .option('-p, --preview', 'Print a preview of the output to the console.')
  .action(async function(path, target, command) {
    try {
      await fix(path, target, command.preview, program.rules, program.userAgent);
    } catch (err) {
      process.stderr.write(`${err.name}: ${err.message}\n`);
      program.outputHelp();
    }
  });

// Handler for unknown commands
program.on('command:*', function() {
  process.stderr.write(
    `Invalid command: ${program.args.join(' ')}\nSee --help for a list of available commands.\n`,
    'utf-8',
  );
  process.exit(1);
});

// Execute
try {
  program.parse(process.argv);
} catch (err) {
  if ([errors.ProcessorError].some((item) => err instanceof item)) {
    process.stderr.write(`${err.name}: ${err.message}\n`);
  }
}

// Errors
if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}
