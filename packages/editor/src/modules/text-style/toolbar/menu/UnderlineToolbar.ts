/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class UnderlineToolbar extends BaseToolbar {
  readonly mark = 'underline'
  iconSvg = Svgs.underline
  hotkey = 'mod+u'
  titleName = 'textStyle.underline'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleUnderline()
    return editor
  }
}

export default UnderlineToolbar
