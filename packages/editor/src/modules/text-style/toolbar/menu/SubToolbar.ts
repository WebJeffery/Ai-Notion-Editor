/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { SUP_SVG } from '../../../../constants/icon-svg'
import BaseToolbar from '../BaseToolbar'

class BoldMenu extends BaseToolbar {
  readonly mark = 'sup'
  iconSvg = SUP_SVG
  hotkey = 'mod+b'
  titleName = 'textStyle.sup'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleSubscript()
    return editor
  }
}

export default BoldMenu
