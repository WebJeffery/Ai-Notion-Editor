import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class ListUnorderedToolbar extends BaseToolbar {
  readonly mark = 'bulletList'
  iconSvg = Svgs.listUnordered
  tooltip = 'toolbar.bullet-list'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleBulletList().focus().run()
    return editor
  }
}

export default ListUnorderedToolbar
