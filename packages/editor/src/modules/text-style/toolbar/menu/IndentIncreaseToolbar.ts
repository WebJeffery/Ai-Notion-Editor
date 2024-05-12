import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class IndentIncreaseToolbar extends BaseToolbar {
  readonly mark = 'indent'
  iconSvg = Svgs.indentIncrease
  tooltip = 'toolbar.indent-increase'

  exec(editor: IBlockEditor) {
    editor.chain().indent().focus().run()
    return editor
  }
}

export default IndentIncreaseToolbar
