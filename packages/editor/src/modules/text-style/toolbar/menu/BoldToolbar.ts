import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class BoldToolbar extends BaseToolbar {
  readonly mark = 'bold'
  iconSvg = Svgs.bold
  tooltip = 'toolbar.bold'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleBold().focus().run()
    return editor
  }
}

export default BoldToolbar
