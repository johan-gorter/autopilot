import request from 'supertest';
import server from '../../server/src/server';

describe('GET /', () => {
  it('responds with Hello, world!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});