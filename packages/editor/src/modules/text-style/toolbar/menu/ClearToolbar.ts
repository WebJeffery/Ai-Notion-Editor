/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class ClearToolbar extends BaseToolbar {
  readonly mark = 'clear'
  iconSvg = Svgs.eraser
  titleName = 'textStyle.clear'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.unsetAllMarks()
    return editor
  }
}

export default ClearToolbar
