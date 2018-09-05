const app = require('../app.js'); // ou server... ou app.
const request = require('supertest');
const chai = require('chai');
const mocha = require('mocha')

  describe('GET /users', function() {
    it('responds with json', function() {
      return request(app)
        .get('/user/Mariana-1/received')
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            console.log(response)
        })
    });
  });