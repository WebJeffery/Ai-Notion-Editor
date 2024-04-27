/**
 * @description create toolbar
 * @author WebJeffery
 */

import { IBlockEditor } from '../editor/interface'
import { GLOBAL_Toolbar_CONF, IToolbarConfigKeys } from '../toolbar'
// import { TOOLBAR_TO_EDITOR, EDITOR_TO_TOOLBAR } from '../utils/weak-maps'
import { EditorMangaer } from '../editor'

export interface ICreateToolbarOption {
  editor: IBlockEditor | null
  selector: string | HTMLElement
  config?: Partial<IToolbarConfigKeys>
}

export const createToolbar = (option: ICreateToolbarOption) => {
  const { selector, editor, config = {} } = option
  if (editor == null) {
    throw new Error(`Cannot create toolbar, because editor is null`)
  }
  if (selector == null) {
    throw new Error(`Cannot create toolbar, because selector is null`)
  }

  // 处理配置
  const toolbarConfig = {
    ...EditorMangaer.toolbarConfigKeys,
    toolbarKeysMapConfig: GLOBAL_Toolbar_CONF,
    ...config,
  }

  // 创建 toolbar ，并记录和 editor 关系
  // TOOLBAR_TO_EDITOR.set(toolbar, editor)
  // EDITOR_TO_TOOLBAR.set(editor, toolbar)

  return toolbarConfig
}
