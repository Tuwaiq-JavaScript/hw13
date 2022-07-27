"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const header_1 = require("./header");
const text_1 = require("./text");
function Page(content, color) {
    return `
        ${(0, header_1.Header)()}
         ${(0, text_1.Text)(content, color)}
    `;
}
exports.Page = Page;
