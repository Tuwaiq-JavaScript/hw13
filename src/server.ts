import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Interestspage } from "./components/interests";
import { Page } from './components/page';
import { Resumepage } from "./components/resume";

const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})

server.get('/resume', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Resumepage('resume', 'red')
})

server.get('/interests', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Interestspage('interests', 'blue')
})

server.get('/about-me', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Page('about', 'orange')
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})

server.get('/images/12', (req, reply) => {
    return reply.sendFile('images/12.jpg')
})

server.get('/cv', (req, reply) => {
    return reply.sendFile('hadi-cv.pdf')
})

// server.listen({ port: 4002, host: '0.0.0.0' }, err => {
//     if (err) {
//         console.log(err);
//         process.exit(1);
//     }
// })

const port: any = process.env.PORT ?? process.env.$PORT ?? 4003;
export function listen() {
    server
        .listen({
            port: port,
            host: '0.0.0.0',
        })
        .catch((err) => {
            server.log.error(err);
            process.exit(1);
        });
}