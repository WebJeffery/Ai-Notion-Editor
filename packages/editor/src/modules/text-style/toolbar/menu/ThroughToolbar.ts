/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { THROUGH_SVG } from '../../../../constants/icon-svg'
import BaseToolbar from '../BaseToolbar'

class ThroughToolbar extends BaseToolbar {
  readonly mark = 'through'
  iconSvg = THROUGH_SVG
  hotkey = 'mod+u'
  titleName = 'textStyle.through'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleStrike()
    return editor
  }
}

export default ThroughToolbar
