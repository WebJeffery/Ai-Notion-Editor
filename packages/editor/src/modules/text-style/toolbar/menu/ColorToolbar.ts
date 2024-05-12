import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class ColorToolbar extends BaseToolbar {
  readonly mark = 'fontColor'
  iconSvg = Svgs.fontColor
  hotkey = 'mod+b'
  titleName = 'textStyle.fontColor'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default ColorToolbar
