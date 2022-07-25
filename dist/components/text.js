"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
function Text(text, color) {
    return ` <div class="container">
    <p class="${color}">${text}</p>
    </div>
    `;
}
exports.Text = Text;
