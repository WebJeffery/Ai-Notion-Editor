// src/components/editor-toolbar/editor-toolbar.tsx
import { Component, h, State, Listen } from '@stencil/core';
import { Editor } from '@tiptap/core';

@Component({
  tag: 'swc-editor-toolbar',
  styleUrl: '../../global/app.css',
  shadow: false,
})
export class EditorToolbar {
  // 定义 editor 实例
  @State() editor: Editor;
  @State() editorStore: any;

  // 监听 editorInitialized 事件
  @Listen('editorInitialized', { target: 'body' })
  handleEditorInitialized(event: CustomEvent<any>) {
    this.editor = event.detail.editor as Editor;
    this.editorStore = event.detail.editorStore;
  }

  render() {
    if (!this.editor) {
      return <slot name="loading">加载中...</slot>;
    }

    return (
      <div class="flex items-center gap-2">
        <button
          class="px-2 py-1 rounded hover:bg-gray-200 transition-colors"
          onClick={() => this.editor.chain().focus().toggleBold().run()}
          data-active={this.editor.isActive('bold')}
        >
          加粗
        </button>
        <button
          class="px-2 py-1 rounded hover:bg-gray-200 transition-colors"
          onClick={() => this.editor.chain().focus().toggleItalic().run()}
          data-active={this.editor.isActive('italic')}
        >
          斜体
        </button>
      </div>
    );
  }
}
