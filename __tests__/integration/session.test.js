const request = require('supertest');
const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authenthication', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('Should authenticate with validate credentials', async () => {
    const user = await User.create({
      name: 'Diego',
      email: 'diego@rocketseat.com.br',
      password: '123456',
    });
    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456',
    });

    expect(response.status).toBe(200);
  });

  it('Should not authenticate with invalid credentials', async () => {
    const user = await User.create({
      name: 'Diego',
      email: 'diego@rocketseat.com.br',
      password: '123456',
    });
    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456789',
    });
    expect(response.status).toBe(401);
  });

  it('Should return a JWT Token when authenticate', async () => {
    const user = await User.create({
      name: 'Diego',
      email: 'diego@rocketseat.com.br',
      password: '123456',
    });
    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456',
    });
    expect(response.body).toHaveProperty('token');
  });
});
