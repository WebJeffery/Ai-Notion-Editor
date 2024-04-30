/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { ITALIC_SVG } from '../../../../constants/icon-svg'
import BaseToolbar from '../BaseToolbar'

class ItalicToolbar extends BaseToolbar {
  readonly mark = 'italic'
  iconSvg = ITALIC_SVG
  hotkey = 'mod+i'
  titleName = 'textStyle.italic'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleItalic()
    return editor
  }
}

export default ItalicToolbar
