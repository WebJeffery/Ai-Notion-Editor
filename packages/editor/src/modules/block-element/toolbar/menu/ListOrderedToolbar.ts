import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class ListOrderedToolbar extends BaseToolbar {
  readonly mark = 'orderedList'
  iconSvg = Svgs.listOrdered
  tooltip = 'toolbar.ordered-list'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleOrderedList().focus().run()
    return editor
  }
}

export default ListOrderedToolbar
