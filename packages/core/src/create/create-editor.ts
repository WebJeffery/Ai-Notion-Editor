import { Editor } from '@tiptap/core';
import { AiEditorOptions } from '../editor/interface';


export const createEditor = (options: AiEditorOptions) => {
  const { extends } = options
  const defaultExtends = getExtensions()
  const editor = new Editor({
    ...options
  })

  return editor
}

export default createEditor