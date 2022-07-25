import { Navbar } from './Navbar';
import { Text } from './Text';

export function Page(text: string, color: string, link_my_web: String , phone: Number) {
    return `
        ${Navbar()}
        ${Text(text, color, link_my_web, phone)}
    `
}