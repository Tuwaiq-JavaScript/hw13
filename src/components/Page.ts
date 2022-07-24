import { Navbar } from './Navbar';
import { Text } from './Text';
import { Myimg } from './Myimg';

export function Page(content: string, color: string ,img: string) {
    return `
        ${Navbar()}
        ${Text(content, color)}
        ${Myimg(img)}
    `
}