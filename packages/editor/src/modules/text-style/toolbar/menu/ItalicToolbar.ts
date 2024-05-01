/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class ItalicToolbar extends BaseToolbar {
  readonly mark = 'italic'
  iconSvg = Svgs.italic
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
