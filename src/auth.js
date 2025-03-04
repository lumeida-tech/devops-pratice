export default async function authRoutes(fastify, options) {
    // Login route
    fastify.post('/login', async (request, reply) => {
      const { username, password } = request.body;
      if (!username || !password) {
        return reply.status(400).send({ error: 'Username and password are required' });
      }

      // Fake authentication logic
      if (username === 'admin' && password === 'password') {
        return { message: 'Login successful', token: 'fake-jwt-token' };
      }
      return reply.status(401).send({ error: 'Invalid credentials' });
    });
  
    // Register route
    fastify.post('/register', async (request, reply) => {
      const { username, password } = request.body;
      if (!username || !password) {
        return reply.status(400).send({ error: 'Username and password are required' });
      }
      // Fake registration logic
      return { message: `User ${username} registered successfully` };
    });
  }
  
  