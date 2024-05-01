/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class SupToolbar extends BaseToolbar {
  readonly mark = 'sup'
  iconSvg = Svgs.supscript
  titleName = 'textStyle.sup'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleSuperscript()
    return editor
  }
}

export default SupToolbar
