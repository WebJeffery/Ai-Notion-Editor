/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import BaseToolbar from '../../base/BaseToolbar'

class HeadingToolbar extends BaseToolbar {
  readonly mark = 'heading'
  iconSvg = ''
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

export default HeadingToolbar
