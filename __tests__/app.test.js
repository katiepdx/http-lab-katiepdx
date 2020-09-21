const request = require('supertest');
const app = require('../lib/app');

describe('server', () => {
  it('checks that plain text is returned with the word hi after making a GET request to /', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });

  it('checks that the word red is returned as html in a h1', async() => {
    const response = await request(app)
      .get('/red');
    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('checks that the word green is returned as html in a h1', async() => {
    const response = await request(app)
      .get('/green');
    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('checks that the word blue is returned as html in a h1', async() => {
    const response = await request(app)
      .get('/blue');
    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>');
  });

  it('checks that a plain text not found error is returned if route does not exist', async() => {
    const response = await request(app)
      .get('/purple');
    expect(response.text).toEqual('Not Found');
  });
});
