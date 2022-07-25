import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/Page';
import { Interests } from "./components/interests";
import { about } from "./components/about";
const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/cv', (req, reply) => {
    return reply.sendFile('Lamia-cv.pdf')
})

server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return Page(` ${about()} `)
})
server.get('/images', (req, reply) => {
    return reply.sendFile('images/preview.png')
})
server.get('/interests', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return Page(`
    ${Interests()}`)
})

server.listen({ port: 4002, host: '127.0.0.1' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})