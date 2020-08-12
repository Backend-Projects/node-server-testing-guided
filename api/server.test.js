const server = require('./server.js');
const supertest = require('supertest');

//calls to a server are by nature asynchronus

describe('server', function () {
  it('runs the tests', function () {
    expect(true).toBe(true);
  });

  //always test for http status codes
  it('should respond with 200 OK', function () {
    return supertest(server)
      .get('/')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });

  it('should respond with JSON', function () {
    return supertest(server)
      .get('/')
      .then((res) => {
        expect(res.type).toMatch(/json/i);
      });
  });
});
