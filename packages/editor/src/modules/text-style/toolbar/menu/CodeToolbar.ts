/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { CODE_SVG } from '../../../../constants/icon-svg'
import BaseToolbar from '../BaseToolbar'

class UnderlineToolbar extends BaseToolbar {
  readonly mark = 'code'
  iconSvg = CODE_SVG
  hotkey = 'mod+e'
  titleName = 'textStyle.code'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleCode()
    return editor
  }
}

export default UnderlineToolbar
