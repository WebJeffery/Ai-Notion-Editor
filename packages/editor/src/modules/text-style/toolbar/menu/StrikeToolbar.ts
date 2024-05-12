import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class StrikeToolbar extends BaseToolbar {
  readonly mark = 'strike'
  iconSvg = Svgs.strikethrough
  tooltip = 'toolbar.strike'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleStrike().focus().run()
    return editor
  }
}

export default StrikeToolbar
