import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class TaskToolbar extends BaseToolbar {
  readonly mark = 'task'
  iconSvg = Svgs.task
  hotkey = 'mod+b'
  titleName = 'textStyle.task'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default TaskToolbar
