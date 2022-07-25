import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { hobby } from "./components/hobby";
import { HTML } from "./components/HTML";
import { about } from "./components/About";

const server = Fastify({ logger: true });

server.register(fastifyStatic, {
    root: join(__dirname, 'public'),
    prefix: '/public/',
})
  
// for style 
server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
// for cv 
server.get('/cv', (req, reply) => {
    return reply.sendFile('sample-cv.pdf')
})

//about me 
server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return HTML(about('About me <br> <br>Name :Latefah <br> phone number:05555555<br>DOB:18/12/1997','text') )
})


// for images
server.get('/hobby', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return HTML(`
    ${hobby()}`)
})

// server
const port: any = process.env.PORT ?? process.env.$PORT ?? 4004;

server
	.listen({
		port: port,
		host: '0.0.0.0',
	})
	.catch((err) => {
		server.log.error(err);
		process.exit(1);
	});