import mongoose from 'mongoose';
import supertest from 'supertest';
import app from 'src/api';
import constants from 'src/config/constants';

const request = supertest(app);

describe('API tests', () => {
  beforeAll(async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(constants.MONGODB_URL);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('GET /', async () => {
    const result = await request.get('/');

    expect(result.status).toEqual(200);
  });

  it('GET /api/custom', async () => {
    const result = await request.get('/api/custom');

    expect(result.status).toEqual(200);
  });
});
