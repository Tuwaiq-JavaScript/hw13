import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/Page';

const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
  

server.get('/cv', (req, reply) => {
    return reply.sendFile('public/cv.pdf')
})

server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page(' abuot me  mame:rana qaboos number:0500720216 birthday:15/7/1998','orange')
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/images', (req, reply) => {
    return reply.sendFile('images/ranaqaboos.jpeg')
})


server.listen({ port: 3000, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})