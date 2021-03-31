const request = require('supertest');
const app = require('../lib/app');

describe.skip('server', () => {
  it('checks that plain text is returned with the word hi after making a GET request to /', async () => {
    const response = await request(app)
      .get('/');

    console.log(response, 'RSPONSEEEEEEEEEEEEEEEE');
    expect(response.text).toEqual('hi');
  });

  it('checks that the status code and plain text with req body is returned after making a POST req to /echo', async () => {
    const response = await request(app)
      .post('/echo')
      .send({ body: 'hellloooooooooooooooo' })
      ;

    expect(response.text).toEqual('hellloooooooooooooooo');
    expect(response.status).toEqual(200);
  });

  it('checks that the word red is returned as html in a h1', async () => {
    const response = await request(app)
      .get('/red');
    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('checks that the word green is returned as html in a h1', async () => {
    const response = await request(app)
      .get('/green');
    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('checks that the word blue is returned as html in a h1', async () => {
    const response = await request(app)
      .get('/blue');
    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>');
  });

  it('checks that a plain text not found error is returned if route does not exist', async () => {
    const response = await request(app)
      .get('/purple');
    expect(response.text).toEqual('Not Found');
  });
});

describe('fs tests', () => {
  it('should return the contents of index.html after hitting the /index.html endpoint', async () => {
    const file1Res = await request(app)
      .get('/index.html');
    expect(file1Res.text.trim()).toEqual(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HELLO</title>
</head>

<body>
  this is index.html
</body>

</html>`);
  });
});
