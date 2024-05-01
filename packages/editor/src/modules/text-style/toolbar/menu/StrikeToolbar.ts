import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class StrikeToolbar extends BaseToolbar {
  readonly mark = 'bold'
  iconSvg = Svgs.strikethrough
  titleName = 'textStyle.strike'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default StrikeToolbar
