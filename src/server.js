import Fastify from 'fastify'
import authRoutes from './auth.js';
const fastify = Fastify({
  logger: true
})
// Register auth routes
fastify.register(authRoutes, { prefix: '/auth' });

// Entry endpoint
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

// Run the server!
try {
  
  await fastify.listen({
    port: 3000,
    host: '0.0.0.0' 
  })

  fastify.log.info(`Server running on http://localhost:3000`);

} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}