/**
 * @description bold menu
 * @author WebJeffery
 */

import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../base/BaseToolbar'

class EmotionToolbar extends BaseToolbar {
  readonly mark = 'through'
  iconSvg = Svgs.emotion
  titleName = 'textStyle.emotion'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleStrike()
    return editor
  }
}

export default EmotionToolbar
