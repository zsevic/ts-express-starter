import mongoose from 'mongoose';
import supertest from 'supertest';
import app from 'api/server';
import constants from 'config/constants';

const request = supertest(app);

describe('API tests', () => {
  beforeAll(async () => {
    await mongoose.connect(constants.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll( () => {
    mongoose.connection.close();
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
