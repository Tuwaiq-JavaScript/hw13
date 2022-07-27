"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const static_1 = __importDefault(require("@fastify/static"));
const fastify_1 = __importDefault(require("fastify"));
const path_1 = require("path");
const interests_1 = require("./components/interests");
const page_1 = require("./components/page");
const resume_1 = require("./components/resume");
const server = (0, fastify_1.default)({ logger: true });
server.register(static_1.default, {
    root: (0, path_1.join)(__dirname, 'public'),
    prefix: '/public/',
});
server.get('/resume', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8');
    return (0, resume_1.Resumepage)('resume', 'red');
});
server.get('/interests', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8');
    return (0, interests_1.Interestspage)('interests', 'blue');
});
server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8');
    return (0, page_1.Page)('about', 'orange');
});
server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css');
});
server.get('/images/12', (req, reply) => {
    return reply.sendFile('images/12.jpg');
});
// server.listen({ port: 4002, host: '0.0.0.0' }, err => {
//     if (err) {
//         console.log(err);
//         process.exit(1);
//     }
// })
const port = process.env.PORT ?? process.env.$PORT ?? 4003;
server
    .listen({
    port: port,
    host: '0.0.0.0',
})
    .catch((err) => {
    server.log.error(err);
    process.exit(1);
});
