/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class CodeToolbar extends BaseToolbar {
  readonly mark = 'code'
  iconSvg = Svgs.code
  tooltip = 'toolbar.code'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleCode().focus().run()
    return editor
  }
}

export default CodeToolbar
