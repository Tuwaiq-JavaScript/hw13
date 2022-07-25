import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { About } from "./components/About";
import { Interests} from "./components/Interests";
import { Html } from "./components/Html";
const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
  
server.get('/interests', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return Html(`
    ${Interests()}`)
})

server.get('/', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return Html(`
    ${About()}`)
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/cv', (req, reply) => {
    return reply.sendFile('wasayf-cv.pdf')
})


server.listen({ port: 4002, host: '127.0.0.1' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})