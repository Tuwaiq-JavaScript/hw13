import { Html } from "./Html";
import { Nsvbar } from "./Navbar";
import { Text } from "./Text";

export function Page(content:string,color:string){
    return Html( `  
    ${Nsvbar()}
   ${Text(content, color)}    
   `)
   }