/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'
import { Mark } from 'prosemirror-model'

class PaintToolbar extends BaseToolbar {
  readonly mark = 'paint'
  iconSvg = Svgs.paint
  tooltip = 'toolbar.brush'

  isDisabled(editor: IBlockEditor): boolean {
    return !editor?.state.selection.$head.marks().length
  }

  exec(editor: IBlockEditor) {
    if (this.isDisabled(editor)) return
    const marks = editor?.state.selection.$head.marks().slice() as Mark[]
    editor.chain().setPainter(marks).focus().run()
    return editor
  }
}

export default PaintToolbar
