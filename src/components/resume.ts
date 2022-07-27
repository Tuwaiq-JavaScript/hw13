import { Header } from "./header";

export function Resumepage(content: string, color: string) {
    return `
       ${Header()}
       <!DOCTYPE html>
       <html>
       
       <head>
         <meta charset="UTF-8">
         <title>CV - Essa</title>
         <meta name="description" content="simple CV example created with HTML and CSS">
         <meta name="author" content="Fly Nerd">
         <link rel="icon" href="./img/favicon.ico">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
           integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
           <link rel="stylesheet" href="https://hw-thirteen.herokuapp.com//style.css">
           </head>
       
       <body>
        
         <main>
           <section class="point">
             <h3>Experience</h3>
             <article>
       
               <div class='job-title'>
                 <span class="jooob">07.2020 - Present</span> <strong>Albaha University.</strong><br>
                 <strong>Position:</strong> Computer
                 Programmer.
               </div>
               <div>
                 <p><strong>Tech stack:</strong> HTML5 / CSS / JavaScript / Sql /jQuery.</p>
                 <ul class="job-description">
                   <li>Develop web application for Octopoda departments</li>
                   <li>Implement UI (front-end site) based on received graphic design and requirements</li>
                   <li>Co-operate with the back-end team </li>
                 </ul>
               </div>
               <div class='job-title'>
                 <span class="jooob">01.2021 - 09-2021</span> <strong>the Institute for Development and Training in the (ICG
                   projec witn MCIT).</strong><br> <strong>Position:</strong> Learning and Development Specialist.
               </div>
               <div>
                 <p><strong>Tech stack:</strong> Courses / Reports / JavaScript / Sql /jQuery.</p>
                 <ul class="job-description">
                   <li>Taught supervisor and coordinator of training courses.</li>
                   <li>Perform routine activities within the specified scope.</li>
                   <li>Review standard reports prepared by supervisors and forward them
                     <br> to senior officials, which can assist
                     in executive decision making.
                   </li>
                   <li>Assist with routine work and escalation of problems, as necessary.</li>
                   <li>Participate in the analysis of best practices in the field of management.</li>
                   <li>Creating the final PowerPoint files for the ministry.</li>
                   <li>Liaise with other team members to build effective working relationships.</li>
                   <li>Solve technical support problems for trainees and help close them.</li>
                 </ul>
               </div>
             </article>
           </section>
           <section>
             <h3>Education</h3>
             <article>
               <div class='school'>
                 <span>2016-2020</span> <strong> Bachelor of Information Technology</strong>
               </div>
               <div class="descrition">
       
                 I graduated with "excellent" grade with honors from Albaha University -in the academic year 2020 and hold a
                 bachelor degree in Information Technology from the faculty of Computer Science and Information Technology with
                 a GPA 3.83 out of 4.
               </div>
             </article>
             <article>
               <div class='school'>
                 <span>2018-2019</span> <strong> Diploma in cyber security</strong>
               </div>
               <div>
                 Main subject: Cyber Security
               </div>
             </article>
           </section>
           <section>
             <h3>Courses & Workshops</h3>
             <article class='course'>
               <div class='title'>
                 <span>07.2020</span> <strong>St Giles of Brighton:</strong>
               </div>
               <div class="descrition">
                 <p> English language In St Giles of Brighton, Brighton, UK for 5 Months.</p>
               </div>
             </article>
             <article class='course'>
               <div class='title'>
                 <span>07.2020 </span> <strong>Kaspersky: </strong>
               </div>
               <div class="descrition">
                 <p>Introduction to Cyber Security.</p>
               </div>
             </article>
             <article class='course'>
               <div class='title'>
                 <span>07.2020 </span> <strong>SAFCSP: </strong>
               </div>
               <div class="descrition">
                 <p>Front-End Web Development Bootcamp with React.</p>
               </div>
             </article>
             <article class='course'>
               <div class='title'>
                 <span>07.2020 </span> <strong>Udemy: </strong>
               </div>
               <div class="descrition">
                 <p>Front End Web Development for Beginners.</p>
               </div>
             </article>
           </section>
           <section>
             <h3>Skills</h3>
             <div class='skills'>
               <div class='column'>
                 <h4>Good knowledge In</h4>
                 <ul>
                   <li>HTML5</li>
                   <li>CSS</li>
                   <li>JavaScript</li>
                   <li>SQL</li>
                 </ul>
               </div>
               <div class='column'>
                 <h4>Basic knowledge In</h4>
                 <ul>
                   <li>jQuery</li>
                   <li>De</li>
                   <li>OracleDB</li>
                   <li>Anlysis</li>
                 </ul>
       
               </div>
             </div>
           </section>
           </div>
           <section>
             <h3>Lunguages</h3>
             <article>
               <div class='school'>
                 <span>English</span> <strong> Bachelor of Information Technology</strong>
               </div>
             </article>
             <article>
               <div class='school'>
                 <span>Arabic</span> <strong> Diploma in cyber security</strong>
               </div>
             </article>
           </section>
       
       
         </main>
         <footer>
           <p>Created by: <a href="">@Essa ALalshahi</a> / <a
               href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3BmkXDk3TUQ0mzni2m4QXeLQ%3D%3D">LinkedIn</a>
             / 2022 </p>
         </footer>
       </body>
       
       </html>

         
    `
}