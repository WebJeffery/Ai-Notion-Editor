import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class TextWrapToolbar extends BaseToolbar {
  readonly mark = 'textWrap'
  iconSvg = Svgs.textWrap
  hotkey = 'mod+b'
  titleName = 'textStyle.textWrap'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default TextWrapToolbar
