import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class LineheightToolbar extends BaseToolbar {
  readonly mark = 'lineHeight'
  iconSvg = Svgs.lineHeight
  hotkey = 'mod+b'
  titleName = 'textStyle.lineHeight'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default LineheightToolbar
