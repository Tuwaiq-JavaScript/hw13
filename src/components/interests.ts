import { Header } from "./header";

export function Interestspage(content: string, color: string) {
    return `
       ${Header()}
       <!DOCTYPE html>
       <html lang="en">
       
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Document</title>
           <link rel="stylesheet" href="https://hw-thirteen.herokuapp.com/style.css">
       
       </head>
       
       <body id="app">
       
       <section class="container font ">
       <div class="txt-up">
   <h1 class="header"> Productivity doesn't have to be hard.</h1>
   <p> Motivato is a productivity app tailored towards helping you achieve your goals in the most efficient way
   while not feeling burned out. Say goodbye to procrastination.</p>
   </div>
      
       <img class="img" width="380px" height="250px" src="https://hw-thirteen.herokuapp.com/public/images/cyber.jpg" alt="">
   </section>
 

   <section class="container-down font ">
   <img class="img2" width="380px" height="250px" src="https://hw-thirteen.herokuapp.com/public/images/design.jpg" alt="">
   <div class="txt-down">
   <h1 class="header"> Productivity doesn't have to be hard.</h1>
   <p> Motivato is a productivity app tailored towards helping you achieve your goals in the most efficient way
   while not feeling burned out. Say goodbye to procrastination.</p>
   </div>
   </section>
       
       
       </body>
       
       </html>`
}