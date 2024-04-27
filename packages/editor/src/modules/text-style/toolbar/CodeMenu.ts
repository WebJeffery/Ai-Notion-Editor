/**
 * @description bold menu
 * @author WebJeffery
 */

import { t } from 'i18next'
import { BOLD_SVG } from '../../../constants/icon-svg'
import type { IBlockEditor } from '@swc-editor/core'
import { isMenuDisabled } from '../helper'

class BoldMenu {
  readonly mark = 'bold'
  protected readonly marksNeedToRemove: string[] = [] // 增加 mark 的同时，需要移除哪些 mark （互斥，不能共存的）
  iconSvg = BOLD_SVG
  hotkey = 'mod+b'

  get title() {
    return t('textStyle.bold')
  }

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive('bold')
  }

  getValue(editor: IBlockEditor): string | boolean {
    return !!editor
  }

  isDisabled(editor: IBlockEditor): boolean {
    return isMenuDisabled(editor, this.mark)
  }

  exec(editor: IBlockEditor) {
    // @ts-ignore
    editor.commands.toggleBold?.()
    return editor
  }
}

export default BoldMenu
