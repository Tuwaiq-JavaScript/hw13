import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/Page';

const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
  
server.get('/', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('home','plum')
})

server.get('/contact', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('contact','pink')
})

server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('about','white')
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/images/cloud', (req, reply) => {
    return reply.sendFile('images/cloud.png')
})

server.get('/cv', (req, reply) => {
    return reply.sendFile('-CV- Fatimah alhuzaymi - CV.pdf')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})