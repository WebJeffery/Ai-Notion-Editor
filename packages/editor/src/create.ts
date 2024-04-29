import { ICreateToolbarOption, coreCreateToolbar, IToolbarConfigKeys } from '@swc-editor/core'

export const createToolbar = (options: ICreateToolbarOption) => {
  const { editor, selector } = options

  if (!selector) {
    throw new Error(`Cannot find 'selector' when create toolbar`)
  }
  const wrap = typeof selector === 'string' ? document.querySelector(selector) : selector

  const toolbar = document.createElement('swc-toolbar')
  const toolbarConfig = coreCreateToolbar(options) as IToolbarConfigKeys

  toolbar.config = toolbarConfig
  toolbar.editor = editor
  wrap.appendChild(toolbar)
}
