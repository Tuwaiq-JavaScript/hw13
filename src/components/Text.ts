export function Text(text: string, color: string, link_my_web: String , phone: Number) {
    return `<div class="container">
        <h1 class="${color}">${text}</h1>
        <a href="${link_my_web}">my website</a>
        <h2 class="${color}">${phone}</h2>
    </div>
    `
}