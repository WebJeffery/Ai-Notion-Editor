import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class AlignToolbar extends BaseToolbar {
  readonly mark = 'align'
  iconSvg = Svgs.alignLeft
  hotkey = 'mod+b'
  titleName = 'textStyle.align'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default AlignToolbar
