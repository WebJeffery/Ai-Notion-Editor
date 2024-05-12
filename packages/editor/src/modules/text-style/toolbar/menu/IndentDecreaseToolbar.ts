import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class IndentDecreaseToolbar extends BaseToolbar {
  readonly mark = 'outdent'
  iconSvg = Svgs.indentDecrease
  tooltip = 'toolbar.indent-decrease'

  exec(editor: IBlockEditor) {
    editor.chain().outdent().focus().run()
    return editor
  }
}

export default IndentDecreaseToolbar
