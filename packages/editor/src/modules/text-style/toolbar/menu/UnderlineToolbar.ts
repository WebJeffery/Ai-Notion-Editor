/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class UnderlineToolbar extends BaseToolbar {
  readonly mark = 'underline'
  iconSvg = Svgs.underline
  tooltip = 'toolbar.underline'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleUnderline().focus().run()
    return editor
  }
}

export default UnderlineToolbar
