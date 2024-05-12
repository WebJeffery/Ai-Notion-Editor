/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class SubToolbar extends BaseToolbar {
  readonly mark = 'subscript'
  iconSvg = Svgs.subscript
  tooltip = 'toolbar.subscript'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleSubscript().focus().run()
    return editor
  }
}

export default SubToolbar
