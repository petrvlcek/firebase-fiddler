// https://firebase.google.com/docs/cloud-messaging/send-message
const path = require('path');

const send = async ({ argv, admin }) => {
  try {
    const message = require(path.resolve(argv.file));
    console.log('Sending message \n', message);
    const response = await admin.messaging().send(message);
    console.log('Request successful:\n', JSON.stringify(response));
    process.exit(0);
  } catch (error) {
    console.log('Error sending message:', JSON.stringify(error));
    process.exit(1);
  }
}

module.exports = send;