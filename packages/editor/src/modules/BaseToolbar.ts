/**
 * @description simply style base menu
 * @author WebJeffery
 */
import { t } from 'i18next'
import type { IBlockEditor, IToolbarBase } from '@swc-editor/core'

// @ts-ignore
export function isMenuDisabled(editor?: IBlockEditor, mark?: string): boolean {
  return !editor && !!mark
}

export type ToolbarInfo = {
  icon?: string
  title?: string
  tooltip?: string
  value: string
}

abstract class BaseToolbar implements IToolbarBase {
  alwaysEnable?: boolean | undefined
  width?: number | undefined
  abstract readonly mark?: string
  protected readonly marksNeedToRemove?: string[] = [] // 增加 mark 的同时，需要移除哪些 mark （互斥，不能共存的）
  abstract readonly iconSvg: string
  hotkey?: string
  readonly tag = 'button'
  title: string = ''
  titleName?: string = ''
  tooltip?: string = 'default'

  getTitle() {
    return t(this.titleName)
  }

  /**
   * 获取：是否有 mark
   * @param editor editor
   */
  getValue(editor: IBlockEditor): string | boolean {
    return !!editor
  }

  isActive(editor: IBlockEditor): boolean {
    return isMenuDisabled(editor)
  }

  isDisabled(editor?: IBlockEditor): boolean {
    return isMenuDisabled(editor)
  }

  exec(editor: IBlockEditor, value: any): IBlockEditor {
    return editor && value
  }

  onTransaction(editor: IBlockEditor): IBlockEditor {
    return editor
  }
}

export default BaseToolbar
