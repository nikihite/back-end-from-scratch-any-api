const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /animals should return a lost of animals', async () => {
    const resp = await request(app).get('/animals');
    expect(resp.body.length).toEqual(4);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('GET /animals/:id should return the animal detail', async () => {
    const resp = await request(app).get('/animals/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'Alex',
      type: 'Lion',
      gender: 'Male',
      voice: 'Ben Stiller'
    });
  });
  afterAll(() => {
    pool.end();
  });
});
