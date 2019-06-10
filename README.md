# Firebase Fiddler

Simple project for fiddling with Firebase Admin SDK. 

At the moment some basic functionality for testing Firebase Cloud Messaging (FCM) from the terminal is supported as an example.

This project has no ambition for futher development. I have developed it for personal purposes and I'm giving it out for anyone who might find it useful.

## How to run

1. Install Node.js

2. Download project dependencies

```sh
$ npm install
```

3. Obtain Firebase Admin SDK key from Firebase console and copy it to a file named `admin-sdk-credentials.json`

4. You are ready to go
```sh
./fbtool --help
fbtool <command>

Commands:
  fbtool send         Send a message to a device or a topic
  fbtool subscribe    Subscribe to a topic
  fbtool unsubscribe  Unsubscribe from a topic

Options:
  --version   Show version number                                      [boolean]
  --help, -h  Show help                                                [boolean]
```

> **Pro tip**: Use `./fbtool --help <command>` for command options.

## Examples
### Example 1: Send a message to a device

1. Edit message content in `sample-message-2.json`
2. Send it
```
./fbtool send --file ./sample-message-2.json
```
### Example 2: Subscribe to a topic and send a message to it

1. Subscribe a token to a topic
```
./fbtool subscribe --topic test-topic-2 --token xxx-yyy-zzz
```
2. Edit message content in `./sample-topic-message.json`
3. Send the message to the topic
```
./fbtool send --file ./sample-topic-message.json 
```