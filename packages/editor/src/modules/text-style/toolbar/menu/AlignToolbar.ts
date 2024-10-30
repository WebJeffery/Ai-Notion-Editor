import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar, { ToolbarInfo } from '../../../BaseToolbar'

class AlignToolbar extends BaseToolbar {
  readonly mark = 'align'
  iconSvg = Svgs.alignLeft
  tooltip = 'toolbar.align'
  defaultIndex = 0
  options: ToolbarInfo[] = [
    {
      icon: '<imy-icon-align-left></imy-icon-align-left>',
      title: 'align-left',
      value: 'left',
    },
    {
      icon: '<imy-icon-align-center></imy-icon-align-center>',
      title: 'align-center',
      value: 'center',
    },
    {
      icon: '<imy-icon-align-right></imy-icon-align-right>',
      title: 'align-right',
      value: 'right',
    },
  ]

  onActive(editor: IBlockEditor, index: number): boolean {
    return editor.isActive({ textAlign: this.options[index].value })
  }

  onMenuTextRender(index: number): Element | string {
    const value = index == null ? this.defaultIndex : index
    return this.options[value].icon
  }

  exec(editor: IBlockEditor, index: number) {
    editor!.chain().focus().setTextAlign(this.options[index].value).run()
    return editor
  }
}

export default AlignToolbar
