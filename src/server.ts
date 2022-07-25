import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { About } from "./components/About";
import { Interests } from "./components/Interests";

import { MakePage } from "./components/MakePage";

const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
  
server.get('/interests', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return MakePage(`
    ${Interests()}`)
})

server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return MakePage(`
    ${About()}`)
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/contact.png', (req, reply) => {
    return reply.sendFile('images/contact.png')
})
server.get('/2521.jpg', (req, reply) => {
    return reply.sendFile('images/2521.jpg')
})
server.get('/running-man.jpg', (req, reply) => {
    return reply.sendFile('images/running-man.jpg')
})

server.get('/cv', (req, reply) => {
    return reply.sendFile('CV2.pdf')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})