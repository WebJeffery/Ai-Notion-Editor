import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class VideoToolbar extends BaseToolbar {
  readonly mark = 'video'
  iconSvg = Svgs.video
  hotkey = 'mod+b'
  titleName = 'textStyle.video'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default VideoToolbar
