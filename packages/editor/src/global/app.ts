import { useEditor } from '../hooks/use-editor';
import { createEditorStore } from '../store/editor';

declare global {
  interface Window {
    swcTiptap: {
      useEditor: typeof useEditor;
      createEditorStore: typeof createEditorStore;
    };
  }
}

// 导出到全局变量
window.swcTiptap = {
  useEditor,
  createEditorStore,
};
