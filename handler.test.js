const handler = require('./handler');

test('test handler message', () => {
    handler.hello(undefined, undefined, function (error, response) {
        let body = JSON.parse(response.body);
        body.message.should.be.equal('Go Serverless v1.0! Your function executed successfully!');

        expect(body.message).toBe('Go Serverless v1.0! Your function executed successfully!');
    });
});