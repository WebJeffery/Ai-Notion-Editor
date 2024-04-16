import { Editor, EditorEvents, EditorOptions, Extensions, getTextBetween } from '@tiptap/core';
import { DOMParser } from '@tiptap/pm/model';
import { AiEditorType, TiptapEditorType, AiEditorOptions } from '@/types/core/AiEditor';

export class TiptapEditor extends Editor {
  aiEditor: TiptapEditorType;
  userOptions: AiEditorOptions;

  constructor(aiEditor: AiEditorType, editorOptions: AiEditorOptions, options: Partial<EditorOptions> = {}) {
    super(options);
    this.aiEditor = aiEditor;
    this.userOptions = editorOptions;
  }

  parseHtml(html: string) {
    function bodyElement(value: string): HTMLElement {
      return new window.DOMParser().parseFromString(`<body>${value}</body>`, 'text/html').body;
    }

    const parser = DOMParser.fromSchema(this.schema);
    return parser.parse(bodyElement(html), {}).content;
  }

  parseMarkdown(markdown: string) {
    const html = this.storage.markdown?.parser?.parse?.(markdown, {
      inline: false,
    });
    return this.parseHtml(html);
  }
}
