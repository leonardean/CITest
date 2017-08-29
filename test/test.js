var request = require('supertest'),
    should = require('should'),
    app = require('../index.js')

describe('CI Test App', () => {
	const agent = request.agent(app);
	it('should return hello world', (done) => {
		agent.get('/')
		.expect(200)
		.expect('Hello World', done)
	})
	it('should return Pong', (done) => {
		agent.get('/')
		.expect(200)
		.expect('pong', done)
	})
})