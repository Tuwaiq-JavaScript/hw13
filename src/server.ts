import Fastify, { fastify } from 'fastify';
import { join } from 'path';
import { Html } from './component/Html';
import { Page } from './component/Page';
import fastifyStatic from '@fastify/static';
import { Files } from './component/resume';


const server=Fastify({logger:true});
//coloring package in server
server.register(fastifyStatic,{
    root: join(__dirname,'public'),
    prefix:'/public/',
})
// <!-- <div>    <img src="/src/public/9791.jpeg">
// <p>The Appalachian Trail trail stretches from Georgia to Maine and covers some of the most breathtaking terrain in America-majestic mountains, silent forests, sparking lakes. If you're going to take a hike, it's probably the place to go.</p>
//     </div>
//     <div style="direction: rtl;">   
//          <img src="/src/public/33777.jpeg">
//         <p> Venice is a many-layered confection of history. The writers here have captured what is most important to them in pieces ranging from the city's foundation up to the present time.</p>
//     <div> -->


// routes
server.get('/',(req,reply)=>{
    reply.header('content-type','text/html; charset=utf-8');
    return Page('This is home page','red')
})

server.get('/contact',(req,reply)=>{
    reply.header('content-type','text/html; charset=utf-8');
    return Page('Contact Me:gh@gmail.com','blue')
})

server.get('/about',(req,reply)=>{
    reply.header('content-type','text/html; charset=utf-8');
    return Page('about','orange')
})

server.get('/style.css',(req,reply)=>{
    return reply.sendFile('style.css')
})

server.get('/flamingo.png',(req,reply)=>{
    return reply.sendFile('http://0.0.0.0:4002/public/flamingo.png');

})


server.get('/gh.95.pdf',(req,reply)=>{
    return Files('http://0.0.0.0:4002/public/gh.95.pdf')
})



server.listen({ port:4002, host:'0.0.0.0'},err=>{
    if(err){
    console.log(err);
    process.exit(1);
}
})