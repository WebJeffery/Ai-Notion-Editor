/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class CodeToolbar extends BaseToolbar {
  readonly mark = 'code'
  iconSvg = Svgs.code
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

export default CodeToolbar
