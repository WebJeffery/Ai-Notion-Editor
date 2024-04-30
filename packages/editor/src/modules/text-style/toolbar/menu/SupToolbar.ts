/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { SUB_SVG } from '../../../../constants/icon-svg'
import BaseToolbar from '../BaseToolbar'

class BoldMenu extends BaseToolbar {
  readonly mark = 'sub'
  iconSvg = SUB_SVG
  hotkey = 'mod+b'
  titleName = 'textStyle.sub'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleSuperscript()
    return editor
  }
}

export default BoldMenu
