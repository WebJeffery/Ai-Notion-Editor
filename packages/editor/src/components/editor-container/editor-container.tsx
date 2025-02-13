import { Component, h, Watch, Prop, Event, EventEmitter } from '@stencil/core';
import { Editor } from '@tiptap/core';
import '../../global/app.css';

@Component({
  tag: 'swc-editor-container',
  styleUrl: '../../global/app.css',
  shadow: false,
})
export class EditorContainer {
  // 接收 editor 实例
  @Prop() editor!: Editor;
  @Prop() editorStore!: any;
  // 定义事件，用于传递 editor 实例
  @Event({ eventName: 'editorInitialized' }) editorInitialized!: EventEmitter<any>;

  @Watch('editor')
  editorChanged(newValue: Editor) {
    if (newValue) {
      this.editorInitialized.emit({ editor: newValue, editorStore: this.editorStore });
    }
  }

  componentDidLoad() {
    // 触发事件，传递 editor 实例
    if (this.editor) {
      this.editorInitialized.emit({ editor: this.editor, editorStore: this.editorStore });
    }
  }

  render() {
    return (
      <div class="swc-tiptap-container">
        <div class="swc-editor-toolbar">
          <slot name="toolbar"></slot>
        </div>
        <div class="swc-editor-content">
          <slot name="content"></slot>
        </div>
        <slot name="footer"></slot>
        <slot></slot>
      </div>
    );
  }
}
