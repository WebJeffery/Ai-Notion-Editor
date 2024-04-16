import { Extensions } from '@tiptap/core';
import { StarterKit } from '../extensions/StarterKit.ts';
import { GetExtionsKit } from '../extensions/GetExtionsKit.ts';
import { AiEditor } from '../editor/interface.ts';

export const getExtensions = (editor: AiEditor, options: any): Extensions => {
  const { mode, extensionOptions = {} } = options;
  // 基础插件
  const ret: Extensions = [StarterKit.configure(extensionOptions)];

    if (mode === 'all') {
      ret.push(...GetExtionsKit(editor, extensionOptions));
    }

  return ret;
};
