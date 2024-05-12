/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class RedoToolbar extends BaseToolbar {
  readonly mark = 'redo'
  iconSvg = Svgs.redo
  tooltip = 'toolbar.redo'

  onActive(): boolean {
    return false
  }

  isDisabled(editor: IBlockEditor): boolean {
    return !editor.can().redo()
  }

  exec(editor: IBlockEditor) {
    editor.chain().redo().focus().run()
    return editor
  }
}

export default RedoToolbar
