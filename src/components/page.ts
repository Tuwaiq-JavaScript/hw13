import { Header } from "./header";
import { Text } from "./text";
export function Page(content: string, color: string) {
    return `
        ${Header()}
         ${Text(content, color)}
    `
}