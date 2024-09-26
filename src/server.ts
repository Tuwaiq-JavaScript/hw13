import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/page';


const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})

server.get('/', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('Hello')
})

server.get('/cv',(req, reply) => {
    return reply.sendFile('cv.pdf')
})

server.get('/abutMe', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('Hello My name is : omar')
})

server.get('/img', (req, reply) => {
    return reply.sendFile('images/ss.png')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})