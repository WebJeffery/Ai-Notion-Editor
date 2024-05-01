import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class CodeBoxToolbar extends BaseToolbar {
  readonly mark = 'codeBox'
  iconSvg = Svgs.codeBox
  hotkey = 'mod+b'
  titleName = 'textStyle.codeBox'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default CodeBoxToolbar
