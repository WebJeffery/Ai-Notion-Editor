/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class SubToolbar extends BaseToolbar {
  readonly mark = 'sub'
  iconSvg = Svgs.subscript
  titleName = 'textStyle.sub'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleSubscript()
    return editor
  }
}

export default SubToolbar
