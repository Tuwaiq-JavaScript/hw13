import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/Page';


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

    return Page('home','blue')
})



server.get('/info', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('Hey there ^_^  my name is LAMIS ABDULLAH I m 22 years old ','info')
})

server.get('/wolf', (req, reply) => {
    return reply.sendFile('img/fav-image.jpeg')
})

server.get('/cv', (req, reply) => {
    return reply.sendFile('lamis-cv.pdf')
})

server.listen({ port: 4002, host: '127.0.0.1' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})