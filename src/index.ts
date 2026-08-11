import { Elysia } from 'elysia';

const port = process.env.PORT || 3000;

const app = new Elysia()
  .get('/', () => ({
    status: 'ok',
    message: 'Welcome to Bun + ElysiaJS + Drizzle ORM + MySQL API',
  }))
  .get('/health', () => ({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  }))
  .listen(port);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
