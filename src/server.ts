import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/Page';

const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('fff','red','https://www.linkedin.com/in/fawaz-aldarqi-b2181a189/',123)
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/cv', (req, reply) => {
    return reply.sendFile('resume-sample.pdf')
})
server.listen({ port: 8082, host: '127.0.0.1' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})