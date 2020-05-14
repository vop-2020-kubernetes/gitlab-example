const request = require('supertest');
const app = require('../app');

describe('App', function() {
  it('has the default page', function(done) {
    request(app)
      .get('/')
      .expect(/Welcome to Express/, done);
  });
  it('has a users page', function(done) {
    request(app)
      .get('/users')
      .expect(/Users .../, done);
  });
}); 
