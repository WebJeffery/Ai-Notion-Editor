/**
 * @description bold menu
 * @author WebJeffery
 */

import { IBlockEditor } from '../../../editor'
import { BOLD_SVG } from '../../../constants/icon-svg'
import BaseMenu from './BaseMenu'

class BoldMenu extends BaseMenu {
  readonly mark = 'bold'
  iconSvg = BOLD_SVG
  hotkey = 'mod+b'
  titleName = 'textStyle.bold'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    // @ts-ignore
    editor.commands.toggleBold?.()
    return editor
  }
}

export default BoldMenu
