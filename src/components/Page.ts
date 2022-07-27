export function Page(children:any) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="http://0.0.0.0:4002/style.css">
        <title>HW13</title>
    </head>
    <body>
    ${children}  
 </body>
    </html>`
 }
