const handler = require('../handler');

describe('lambdaService', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    test('test handler message', () => {
        handler.hello(undefined, undefined, function (error, response) {
            let body = JSON.parse(response.body);
            
            expect(body.message).toBe('Go Serverless v1.0! Your function executed successfully!');
        });
    });
  });
  