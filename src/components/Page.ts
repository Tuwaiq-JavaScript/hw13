import { Text } from './Text'
export function Page(content: string) {
    return `
        ${Text(content)}
    `
}