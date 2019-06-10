const yargs = require('yargs');
const commands = require('./commands');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const argv = yargs
  .scriptName('fbtool')
  .command('send', 'Send a message to a device or a topic', (yargs) => {
    yargs.option('file', {
      type: 'string',
      demandOption: true,
      default: 'sample-message',
      describe: 'the json file with message content'
    })
  }, (argv) => {
    commands.send({ argv, admin });
  })
  .command('subscribe', 'Subscribe to a topic', (yargs) => {
    yargs.option('token', {
      type: 'string',
      demandOption: true,
      describe: 'Firebase Device Registration Token that will be subscribed to a topic'
    });
    yargs.option('topic', {
      type: 'string',
      demandOption: true,
      describe: 'The name of a topic'
    })
  }, (argv) => {
    commands.subscribe({ argv, admin });
  })
  .command('unsubscribe', 'Unsubscribe from a topic', (yargs) => {
    yargs.option('token', {
      type: 'string',
      demandOption: true,
      default: 'xxx-yyy-zzz',
      describe: 'Firebase Device Registration Token that will be unsubscribed from a topic'
    });
    yargs.option('topic', {
      type: 'string',
      demandOption: true,
      default: undefined,
      describe: 'The name of a topic'
    })
  }, (argv) => {
    commands.unsubscribe({ argv, admin });
  })
  .help()
  .alias('help', 'h')
  .showHelpOnFail(true)
  .demandCommand(1, '')
  .argv;