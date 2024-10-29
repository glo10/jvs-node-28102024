import request from 'supertest'
import app from '/0-exercices/corrections/ex5/src/app.mjs'
import { describe, it, expect } from 'vitest'
describe('Testing exercise 5 Web server with HTML', () => {
  describe('GET /', () => {
    describe('Testing HTML content', () => {
      it('Should have 200 status', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
      })
      it('Should be a HTML content type', async () => {
        const response = await request(app).get('/')
        expect(response.headers['content-type']).toMatch('text/html')
      })
      it('Should have "Bienvenue"', async () => {
        const response = await request(app).get('/')
        expect(response.text).toContain('Bienvenue')
      })
    })
    describe('Testing CSS request GET /css/*.css', () => {
      it('Should have 200 status', async () => {
        const response = await request(app).get('/css/main.css')
        expect(response.statusCode).toBe(200)
      })
      it('Should be a CSS content type', async () => {
        const response = await request(app).get('/css/main.css')
        expect(response.headers['content-type']).toMatch('text/css')
      })
      it('Should have CSS declarations', async () => {
        const response = await request(app).get('/css/main.css')
        expect(response.text).toContain('margin: auto;')
      })
      it('Should have 404 not found css file status', async () => {
        const response = await request(app).get('/css/style.css')
        expect(response.statusCode).toBe(404)
      })
    })

    describe('Testing image request GET /img/*.(jpeg|jpg|png)', () => {
      it('Should have 200 status', async () => {
        const response = await request(app).get('/img/coding.jpg')
        expect(response.statusCode).toBe(200)
      })
      it('Should be an image content type', async () => {
        const response = await request(app).get('/img/coding.jpg')
        expect(response.headers['content-type']).toMatch('image/jpg')
      })
      it('Should have 404 not found image', async () => {
        const response = await request(app).get('/img/test.png')
        expect(response.statusCode).toBe(404)
      })
    })

  })

  describe('GET /login', () => {
    it('Should have 404 status', async () => {
      const response = await request(app).get('/login')
      expect(response.statusCode).toBe(404)
    })
    it('Should be a HTML', async () => {
      const response = await request(app).get('/login')
      expect(response.headers['content-type']).toMatch('text/html')
    })
    it('Should have "Page 404"', async () => {
      const response = await request(app).get('/login')
      expect(response.text).toContain("Page 404")
    })
  })

  
})