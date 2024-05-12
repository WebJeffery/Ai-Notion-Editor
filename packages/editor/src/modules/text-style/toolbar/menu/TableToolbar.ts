import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class TableToolbar extends BaseToolbar {
  readonly mark = 'table'
  iconSvg = Svgs.table
  hotkey = 'mod+b'
  titleName = 'textStyle.table'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default TableToolbar
