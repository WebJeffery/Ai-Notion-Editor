/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class PaintToolbar extends BaseToolbar {
  readonly mark = 'paint'
  iconSvg = Svgs.paint
  titleName = 'textStyle.paint'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.unsetAllMarks()
    return editor
  }
}

export default PaintToolbar
