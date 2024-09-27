import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { join } from 'path';
import { Page } from './components/Page';
import { Html } from './components/Html';
import { Aboutme } from "./components/Aboutme";
import { Interests } from "./components/Interests";




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

server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return Html(`
    ${Aboutme()}`)
})
// style
server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/contact.jpg', (req, reply) => {
    return reply.sendFile('images/contact.jpg')
})

// img 
server.get('/Netflix-Disney.jpg', (req, reply) => {
    return reply.sendFile('images/Netflix-Disney.jpg')
})
//my vc
server.get('/cv', (req, reply) => {
    return reply.sendFile('NorahAlsheaifi.pdf')
})

server.listen({ port: 4002, host: '127.0.0.1' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})





















// server.get('/style.css', (req, reply) => {
//     return reply.sendFile('style.css')
// })
  
// server.get('/', (req, reply) => {
//      reply.header('Content-Type', 'text/html; charset=utf-8')

//     return Page('home','red')

//     // return Html ('hi')
// })

// // server.get('/contact', (req, reply) => {
// //     reply.header('Content-Type', 'text/html; charset=utf-8')

// //     return Page('contact','blue')
// // })

// server.get('/about', (req, reply) => {
//     reply.header('Content-Type', 'text/html; charset=utf-8')
    
//     return Page('Hello ,Name: <br> Norah Mansour Alsheaifi<br> Email:<br>norahalsheaifi@gmail.com</p> <p>Phone number: <br> +966552845350</p> ','about')
//     // return Page('about','orange')
// })


// server.get('/images/riyadh', (req, reply) => {
//     return reply.sendFile('images/riyadh.jpeg')
// })

// server.get('/cv', (req, reply) => {
//     return reply.sendFile('hadi-cv.pdf')
// })

// server.listen({ port: 4002, host: '0.0.0.0' }, err => {
//     if (err) {
//         console.log(err);
//         process.exit(1);
//     }
// })