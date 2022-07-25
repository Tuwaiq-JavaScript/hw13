import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Interest } from './components/interests.ts';
import { Html } from './components/Html';
import { AboutMe } from "./components/about";

const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
  
server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Html(`${AboutMe()}`)
  
})
server.get('/interest', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Html(`${Interest()}`)
  
})


// server.get('/about', (req, reply) => {
//     reply.header('Content-Type', 'text/html; charset=utf-8')

//     return Page('aboutme','blue')
// })

// server.get('/interest', (req, reply) => {
//     reply.header('Content-Type', 'text/html; charset=utf-8')

//     return Page('interests','pink')
// })

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
// // server.get('/images/riyadh', (req, reply) => {
// //     return reply.sendFile('images/riyadh.jpeg')
// // })

server.get('/cv', (req, reply) => {
    return reply.sendFile('cvDaad.pdf')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})