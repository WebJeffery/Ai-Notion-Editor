import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { createEditorStore } from '../store/editor';

export interface UseEditorOptions {
  element?: HTMLElement;
  content?: string;
  placeholder?: string;
  autofocus?: boolean;
  editable?: boolean;
  onUpdate?: ({ editor }: { editor: Editor }) => void;
  extensions?: any[];
}

export const useEditor = (options: UseEditorOptions = {}) => {
  const { content = '', placeholder = '请输入内容...', autofocus = false, editable = true, onUpdate, extensions = [] } = options;
  const { store, setEditor } = createEditorStore();

  const editor = new Editor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
      ...extensions,
    ],
    content,
    autofocus,
    editable,
    onUpdate: ({ editor }) => {
      onUpdate?.({ editor });
    },
  });
  setEditor(editor);

  return {
    tiptapEditor: editor,
    editorStore: store,
  };
};
