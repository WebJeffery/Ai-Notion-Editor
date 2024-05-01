/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class UndoToolbar extends BaseToolbar {
  readonly mark = 'undo'
  iconSvg = Svgs.undo
  hotkey = 'mod+b'
  titleName = 'textStyle.undo'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default UndoToolbar
