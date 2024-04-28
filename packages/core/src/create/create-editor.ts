import { Editor } from '@tiptap/core'
import { IBlockEditor, IEditorOptions } from '../editor/interface'
import { EditorMangaer } from '../editor'
import { i18nChangeLanguage } from '../i18n'
import ee, { Emitter } from 'event-emitter'

class BlockEditor extends Editor {
  eventEmit: Emitter = ee()
  i18nChangeLanguage(lang: string) {
    i18nChangeLanguage(lang)
    this.eventEmit.emit('onChangeLanguage', lang)
  }
}

export const createEditor = (options: Partial<IEditorOptions>) => {
  const { extensions = [], ...opt } = options

  const editor: IBlockEditor = new BlockEditor({
    ...opt,
    extensions: [...EditorMangaer.tiptapExtensions, ...extensions],
    // editable: this.options.editable,
    // onCreate: (props) => this.onCreate(props),
    // onTransaction: (props) => this.onTransaction(props),
    // onDestroy: () => this.onDestroy,
    editorProps: {
      attributes: {
        class: 'wc-editor-content',
      },
    },
  })

  return editor
}
