// src/components/editor-content/editor-content.tsx
import { Component, h, Prop, Element, State, Watch, Listen } from '@stencil/core';
import { Editor } from '@tiptap/core';

@Component({
  tag: 'swc-editor-content',
  styleUrl: '../../global/app.css',
  shadow: false,
})
export class EditorContent {
  // 接收 editor 实例
  @Prop() editor: Editor;
  @State() currentEditor: any;
  @State() editorStore: any;
  // 获取组件根元素
  @Element() hostElement: HTMLElement;

  // 定义状态，用于强制更新
  @State() renderKey = 0;

  // 监听 editor 实例变化
  @Watch('editor')
  handleEditorChange() {
    this.mountEditor();
  }

  // 监听 editorInitialized 事件
  @Listen('editorInitialized', { target: 'body' })
  handleEditorInitialized(event: CustomEvent<any>) {
    this.currentEditor = event.detail.editor;
    this.editorStore = event.detail.editorStore;
    this.mountEditor();
  }

  componentDidLoad() {
    this.mountEditor();
  }

  // 挂载编辑器
  mountEditor() {
    if (this.editor) {
      this.currentEditor = this.editor;
    }
    if (this.currentEditor) {
      // 获取或创建编辑器容器
      let container = this.hostElement.querySelector('.ProseMirror-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'ProseMirror-container h-full';
        this.hostElement.appendChild(container);
      }
      // debugger;

      // 挂载编辑器
      // this.currentEditor.setOptions({
      //   element: container,
      // });
    }
  }

  render() {
    // 强制更新
    return <div class="h-full" key={this.renderKey}></div>;
  }
}
