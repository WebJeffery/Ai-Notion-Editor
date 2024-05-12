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
  tooltip = 'toolbar.eraser'

  exec(editor: IBlockEditor) {
    editor.chain().unsetAllMarks().focus().run()
    return editor
  }
}

export default ClearToolbar
