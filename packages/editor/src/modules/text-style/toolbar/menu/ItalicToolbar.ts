/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class ItalicToolbar extends BaseToolbar {
  readonly mark = 'italic'
  iconSvg = Svgs.italic
  tooltip = 'toolbar.italic'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleItalic().focus().run()
    return editor
  }
}

export default ItalicToolbar
