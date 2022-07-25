import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { About } from './components/About';
import { Interests } from './components/Interests';



const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
  
server.get('/', (req, reply) => {
    console.log("hellllo")
})


server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8' )

    return  (`
    ${About()}`)})
    server.get('/interests', (req, reply) => {
        reply.header('Content-Type', 'text/html; charset=utf-8' )
    
        return  (`
        ${Interests()}`)})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})


server.get('/cv', (req, reply) => {
    return reply.sendFile('cv.png')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})