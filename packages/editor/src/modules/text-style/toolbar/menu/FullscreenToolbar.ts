import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class FullscreenToolbar extends BaseToolbar {
  readonly mark = 'fullscreen'
  iconSvg = Svgs.fullscreen
  hotkey = 'mod+b'
  titleName = 'textStyle.fullscreen'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default FullscreenToolbar
