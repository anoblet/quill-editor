import { LitElement, customElement, query } from "lit-element";
import {
  getNativeRange,
  handleDragging,
  hasFocus,
  setNativeRange,
  update
} from "./QuillFix";

// import Quill from "./quill";
import Quill from "quill";
import style from "./style";
import template from "./template";
import theme from "./quill.snow.css";

@customElement("quill-editor")
export class QuillEditor extends LitElement {
  public static styles = [theme, style];
  public render = template.bind(this);
  @query("#editor") editor;

  firstUpdated() {
    var toolbarOptions = [
      ["bold", "italic", "underline" /*, "strike"*/],
      [{ list: "ordered" }, { list: "bullet" }],
      [/*"blockquote",*/ "code-block"]
      // [{ header: 1 }, { header: 2 }],
      /*[{ script: "sub" }, { script: "super" }],*/
      // [{ indent: "-1" }, { indent: "+1" }],
      // [{ direction: "rtl" }],
      // [{ size: ["small", false, "large", "huge"] }],
      // [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // [{ color: [] }, { background: [] }],
      // [{ font: [] }],
      // [{ align: [] }],
      // ["clean"]
    ];

    var editor = new Quill(this.editor, {
      modules: {
        toolbar: toolbarOptions
      },
      theme: "snow"
    });

    editor.selection.context = this.shadowRoot;
    editor.selection.getNativeRange = getNativeRange;
    editor.selection.setNativeRange = setNativeRange;
    editor.selection.hasFocus = hasFocus;
    editor.selection.update = update;
    editor.selection.handleDragging = handleDragging;
    editor.selection.handleDragging();
  }
}
