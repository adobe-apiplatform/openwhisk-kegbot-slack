/**
 * The entry point for the action.
 * @param params Input object
 * @returns {Promise}
 */
function main(params) {
    return new Promise(
        (resolve, reject) => {
            //send message to slack channel

            try {
                var IncomingWebhook = require("@slack/client").IncomingWebhook;
            } catch (err) {
                console.log(err);
                reject({
                        "message": "Could not load @slack/client",
                        "error": err.toString()
                    }
                );
            }

            var url = params.slack_webhook_url;

            var webhook = new IncomingWebhook(url);

            webhook.send('Hello there from JS',
                function (err, res) {
                    if (err) {
                        console.log('Error:', err);
                        reject(params);
                    } else {
                        console.log('Message sent: ', res);
                        resolve(params);
                    }
                });

        }
    );
}

export default main;