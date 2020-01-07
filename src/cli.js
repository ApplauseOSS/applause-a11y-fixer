const program = require('commander');
const report = require('./commands/report');
const fix = require('./commands/fix');
const pjson = require('./../package.json');

program
    .name(pjson.name)
    .version(pjson.version)
    .description(pjson.description);

/**
 * Report Command
 * Prints an accessibility report either in human-readable or json format
 */
program
    .command('report <path-or-url>')
    .option('-j, --json', 'Print output as json.')
    .action(async function(path, command) {
      try {
        await report(path, command.json);
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
    .option('-p, --preview', 'Print a preview of the output only.')
    .action(async function(path, target, command) {
      try {
        await fix(path, target, command.preview);
      } catch (err) {
        process.stderr.write(`Error: ${err.message}\n\n`);
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
program.parse(process.argv);

// Errors
if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}
