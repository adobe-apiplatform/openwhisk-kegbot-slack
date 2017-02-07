OpenWhisk Action for Slack
==================================

This is a sample OpenWhisk project showing how to write actions that interact with Slack using [node-slack-sdk](https://github.com/slackapi/node-slack-sdk).
 

## Building

 ```bash
 npm install
 ```
 
 This command installs the node modules and generates the source code for the action at `slack-action-0.0.1.js`.
 
 The ES6 code for the action is found in [src/action/slack-action.js](src/action/slack-action.js) and the other files are bundled with the code of the action.
  
  The bundle eventually [exposes](package.json#14) the `main` variable/function in order for OpenWhisk to invoke the action correctly:
  ```javascript
  var main = require('main-action');
  ```
  
 
## Running the tests locally
 
 ```bash
  npm test
  ```
  
  
## Running the action in OpenWhisk

First make sure you have an [Incoming WebHook URL for a Slack Channel](https://my.slack.com/services/new/incoming-webhook/).  

Then create the action:

 ```bash
 > wsk -i action create slack-action ./slack-action-0.0.1.js --param slack_webhook_url https://hooks.slack.com/services/T000000/B00000000/V000000000

 ok: created action slack-action
 ```

Then invoke the action:

```bash
> wsk -i action invoke slack-action --blocking

```

 To delete the action:
  
  ```bash
  > wsk -i action delete slack-action
   
 ok: deleted action slack-action
  ```
  