import { Html } from './Html';
import { Navbar } from './Navbar';
import { AboutMe } from './about';

// export function Page(content: string, color: string) {
//     return Html(`
//         ${Navbar()}
//         ${AboutMe()}
//     `)
// }
export function Interest(){
    return `<h1 >My Interests</h1> 

     <div class="my-inerests first">
     <div class="shopping"> 
     <h2 class="shop">Shopping </h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eaque recusandae corporis <br>aliquid mollitia, reprehenderit quam in ducimus repudiandae ipsa veritatis, deleniti quis.<br> Voluptatum dolores quidem quo iste harum itaque.
</p>
     </div>
   
    <br>
    
    <img src="public/images/sh.jpeg" width="500"alt="shopping" class="shop-image">
    
 </div>  
    
 <br> 
  <div class="my-inerests second">
  <img src="public/images/travel.jpeg" width="400" alt="travel" class="travel-image">
  <div> <h2 class="travel">Travelling</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eaque recusandae corporis <br>aliquid mollitia, reprehenderit quam in ducimus repudiandae ipsa veritatis, deleniti quis.<br> Voluptatum dolores quidem quo iste harum itaque.
  </p>
   </div>
   
  </div>  `
}