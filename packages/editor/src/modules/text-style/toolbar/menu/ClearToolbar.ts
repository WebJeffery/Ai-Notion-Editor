/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { ERASER_SVG } from '../../../../constants/icon-svg'
import BaseToolbar from '../BaseToolbar'

class BoldMenu extends BaseToolbar {
  readonly mark = 'bold'
  iconSvg = ERASER_SVG
  titleName = 'textStyle.clear'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.unsetAllMarks()
    return editor
  }
}

export default BoldMenu
