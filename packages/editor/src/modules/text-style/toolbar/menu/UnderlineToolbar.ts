/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { UNDER_LINE_SVG } from '../../../../constants/icon-svg'
import BaseToolbar from '../BaseToolbar'

class UnderlineToolbar extends BaseToolbar {
  readonly mark = 'underline'
  iconSvg = UNDER_LINE_SVG
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
