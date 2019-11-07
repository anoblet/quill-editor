import { html } from "lit-element";

export default function() {
  return html`
    <link
      href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
      rel="stylesheet"
    />
    <div id="editor"></div>
  `;
}
