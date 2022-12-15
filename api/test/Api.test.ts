import app from '../main';
import request from 'supertest';

describe('Health Check', () => {
    it('check server should return OK', async () => {
        const response = await request(app.callback()).get('/api/health-check');
        expect(response.text).toBe('OK');
    });
});

describe('Result', () => {
    it('get list results should return 200', async () => {
        const response = await request(app.callback()).get('/api/result');
        // console.log(response)
        expect(response.status).toBe(200);
    });
    it('get detail should return 200', async () => {
        const response = await request(app.callback()).get('/api/result/1');
        expect(response.status).toBe(200);
    });
    it('create result should return 200', async () => {
        const response = await request(app.callback()).post('/api/result').send({
            repository: 'testing',
        });
        expect(response.status).toBe(200);
    });
    it('update result should return 200', async () => {
        const response = await request(app.callback()).put('/api/result/2').send({
            status: 'IN_PROGRESS',
            
        });
        expect(response.status).toBe(200);
    });
    it('delete result should return 200', async () => {
        const response = await request(app.callback()).delete('/api/result/1');
        expect(response.status).toBe(200);
    });
});