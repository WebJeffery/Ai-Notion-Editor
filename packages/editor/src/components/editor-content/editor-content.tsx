// src/components/editor-content/editor-content.tsx
import { Component, h, Prop, Element, State, Watch, Listen } from '@stencil/core';
import { Editor } from '@tiptap/core';

@Component({
  tag: 'swc-editor-content',
  styleUrl: 'editor-content.css',
  shadow: false,
})
export class EditorContent {
  // 接收 editor 实例
  @Prop() editor: Editor;

  // 内部状态
  @State() private currentEditor: Editor;
  @State() private editorStore: any;
  @State() private isEditorMounted: boolean = false;

  // 获取组件根元素
  @Element() private hostElement: HTMLElement;
  private editorContainer: HTMLElement;

  // 监听 editor 属性变化
  @Watch('editor')
  handleEditorChange(newValue: Editor, oldValue: Editor) {
    if (newValue !== oldValue) {
      if (oldValue) {
        this.unmountEditor();
      }
      this.currentEditor = newValue;
      this.mountEditor();
    }
  }

  // 组件生命周期方法
  componentDidLoad() {
    if (this.editor) {
      this.currentEditor = this.editor;
      this.mountEditor();
    }
  }

  disconnectedCallback() {
    this.unmountEditor();
  }

  // 挂载编辑器
  private mountEditor() {
    if (!this.currentEditor || this.isEditorMounted) {
      return;
    }

    try {
      // 创建或获取编辑器容器
      if (!this.editorContainer) {
        this.editorContainer = document.createElement('div');
        this.editorContainer.className = 'ProseMirror-container';
        this.hostElement.firstChild.appendChild(this.editorContainer);
      }

      // 确保编辑器实例已经初始化
      if (!this.currentEditor.options.element) {
        this.currentEditor.setOptions({
          element: this.editorContainer,
        });
      }

      // 如果编辑器已有内容，迁移内容
      const sourceElement = this.currentEditor.options.element;
      if (sourceElement && sourceElement !== this.editorContainer) {
        // 清空目标容器
        this.editorContainer.innerHTML = '';

        // 复制内容
        if (sourceElement.firstChild) {
          // @ts-ignore
          this.editorContainer.append(...sourceElement.childNodes);
        }

        // 更新编辑器选项
        this.currentEditor.setOptions({
          element: this.editorContainer,
        });
      }

      // 重新创建 NodeViews
      this.currentEditor.createNodeViews();

      // 强制更新编辑器视图
      requestAnimationFrame(() => {
        this.currentEditor.commands.focus('end');
      });

      this.isEditorMounted = true;
    } catch (error) {
      console.error('Error mounting editor:', error);
    }
  }

  // 卸载编辑器
  private unmountEditor() {
    if (!this.isEditorMounted) {
      return;
    }

    try {
      if (this.currentEditor) {
        // 保存当前内容状态
        const content = this.currentEditor.getHTML();

        // 清理编辑器状态
        this.currentEditor.setOptions({
          element: null,
        });

        // 存储内容以供后续使用
        if (content) {
          this.editorContainer.innerHTML = content;
        }
      }

      this.isEditorMounted = false;
    } catch (error) {
      console.error('Error unmounting editor:', error);
    }
  }

  render() {
    const containerClass = {
      'tiptap-editor-content': true,
      'editor-mounted': this.isEditorMounted,
    };

    return <div class={containerClass}>{/* ProseMirror 编辑器将被动态挂载到这里 */}</div>;
  }
}
