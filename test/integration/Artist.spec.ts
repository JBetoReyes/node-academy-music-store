import * as request from 'supertest';
import { app } from '../../src/server';

describe('GET all Artists', () => {
    it('Should get all the artist in the db', (done) => {
        request(app)
            .get('/artists')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});