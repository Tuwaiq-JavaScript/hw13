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

    return Page('home','red','https://www.w3schools.com/w3css/img_lights.jpg')
})

server.get('/contact', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('contact','blue','https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')
})

server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('about','orange','https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/images/riyadh', (req, reply) => {
    return reply.sendFile('images/riyadh.jpeg')
})

server.get('/cv', (req, reply) => {
    return reply.sendFile('AlisCv.pdf')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})