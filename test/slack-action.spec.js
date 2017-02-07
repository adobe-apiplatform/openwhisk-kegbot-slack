import chai from 'chai';
import { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import action from '../src/action/slack-action.js';

chai.config.includeStack = true;
chai.use(chaiAsPromised);
chai.should();

describe('Send Slack message', () => {
    describe('on channel', () => {
        it('should respond successfully', (done) => {
            var params = {
                "slack_webhook_url":"https://hooks.slack.com/services/T000000/B00000000/V000000000"
            };

            // The action returns a Promise and we can use "eventually" to wait for it.
            // If the action doesn't return a Promise we can remove "eventually"
            //   and write instead "should.deep.equal"
            action(params).should.eventually.deep.equal({"slack_webhook_url": "https://hooks.slack.com/services/T000000/B00000000/V000000000"}).notify(done);
        });
    })
});
