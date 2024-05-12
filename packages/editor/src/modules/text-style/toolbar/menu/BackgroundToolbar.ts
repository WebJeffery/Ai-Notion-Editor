import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class BackgroundToolbar extends BaseToolbar {
  readonly mark = 'highlight'
  iconSvg = Svgs.background
  hotkey = 'mod+b'
  titleName = 'textStyle.highlight'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default BackgroundToolbar
