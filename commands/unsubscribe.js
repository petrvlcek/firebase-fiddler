// https://firebase.google.com/docs/cloud-messaging/send-message
const path = require('path');

const send = async ({ argv, admin }) => {
  try {
    console.log('Subscribing %s to topic %s', argv.token, argv.topic);
    const response = await admin.messaging().subscribeToTopic(argv.token, argv.topic);
    console.log('Request successful:\n%s\n', JSON.stringify(response));
    process.exit(0);
  } catch (error) {
    console.log('Error subscribing to topic:', JSON.stringify(error));
    process.exit(1);
  }
}

module.exports = send;