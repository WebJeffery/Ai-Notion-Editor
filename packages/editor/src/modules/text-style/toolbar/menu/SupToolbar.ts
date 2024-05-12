/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class SupToolbar extends BaseToolbar {
  readonly mark = 'superscript'
  iconSvg = Svgs.supscript
  tooltip = 'toolbar.superscript'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleSuperscript().focus().run()
    return editor
  }
}

export default SupToolbar
