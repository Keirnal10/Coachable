import request from 'supertest';
import app from '../app';

describe('API Tests', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Welcome to Coachable API' });
    });
  });

  describe('Error Handling', () => {
    it('should handle 404 errors', async () => {
      const response = await request(app).get('/nonexistent-route');
      expect(response.status).toBe(404);
    });
  });
}); 