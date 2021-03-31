const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const fs = require('fs/promises');

const app = net.createServer(socket => {
  socket.on('data', rawHttpRequest => {
    console.log('client has connected to server');

    const request = parseRequest(rawHttpRequest.toString());

    if (request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));

    } else if (request.path === '/echo' && request.method === 'POST') {

      socket.end(createResponse({ body: request.body, status: '200 OK' }));

    } else if (request.path === '/red' && request.method === 'GET') {
      socket.end(createResponse({ body: '<html><body><h1>red</h1></body></html>', status: '200 OK', contentType: 'text/html' }));

    } else if (request.path === '/green' && request.method === 'GET') {
      socket.end(createResponse({ body: '<html><body><h1>green</h1></body></html>', status: '200 OK', contentType: 'text/html' }));

    } else if (request.path === '/blue' && request.method === 'GET') {
      socket.end(createResponse({ body: '<html><body><h1>blue</h1></body></html>', status: '200 OK', contentType: 'text/html' }));

    } else if (request.path === '/index.html' && request.method === 'GET') {
      fs.readFile('./public/index.html')
        .then(data => socket.end(createResponse({ body: data, status: '200 OK', contentType: 'text/html' })));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
