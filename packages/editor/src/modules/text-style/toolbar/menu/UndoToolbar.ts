/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class UndoToolbar extends BaseToolbar {
  readonly mark = 'undo'
  iconSvg = Svgs.undo
  tooltip = 'toolbar.undo'

  onActive(): boolean {
    return false
  }

  isDisabled(editor: IBlockEditor): boolean {
    return !editor.can().undo()
  }

  exec(editor: IBlockEditor) {
    editor.chain().undo().focus().run()
    return editor
  }
}

export default UndoToolbar
