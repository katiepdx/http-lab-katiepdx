const request = require('supertest');
const app = require('../lib/app');

describe('server', () => {
  it('checks that plain text is returned with the word hi after making a GET request to /', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });
});
