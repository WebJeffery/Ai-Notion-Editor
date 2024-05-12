import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class ImageToolbar extends BaseToolbar {
  readonly mark = 'image'
  iconSvg = Svgs.image
  hotkey = 'mod+b'
  titleName = 'textStyle.image'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default ImageToolbar
