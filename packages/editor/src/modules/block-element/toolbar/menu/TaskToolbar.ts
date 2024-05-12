import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class TaskToolbar extends BaseToolbar {
  readonly mark = 'taskList'
  iconSvg = Svgs.task
  tooltip = 'toolbar.todo'

  isActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.chain().toggleTaskList().focus().run()
    return editor
  }
}

export default TaskToolbar
