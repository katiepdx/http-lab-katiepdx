module.exports = rawRequest => {
  rawRequest = {
    method: rawRequest.split('\n')[0].split(' ')[0], 
    path: rawRequest.split(' ')[1],
    body: rawRequest.split('\n')[4]
  };

  return rawRequest;
};
