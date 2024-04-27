/**
 * @description editor interface
 * @author WebJeffery
 */

import { Editor, EditorOptions } from '@tiptap/core'
import { ISingleToolbarConfig } from '../toolbar'

// import ee from 'event-emitter'
// import { IEditorConfig, AlertType, ISingleMenuConfig } from '../config/interface'
// import { IPositionStyle } from '../menus/interface'
// import { DOMElement } from '../utils/dom'

export type ElementWithId = Element & { id: string }

export interface IEditorOptions extends EditorOptions {}

/**
 * 扩展 tiptap Editor 接口
 */
export interface IBlockEditor extends Editor {
  // data 相关（粘贴、拖拽等）
  // insertData: (data: DataTransfer) => void
  // setFragmentData: (data: Pick<DataTransfer, 'getData' | 'setData'>) => void

  // config
  // getConfig: () => IEditorConfig
  // getMenuConfig: (menuKey: string) => ISingleMenuConfig
  // getAllMenuKeys: () => string[]
  // alert: (info: string, type: AlertType) => void

  // 内容处理
  // handleTab: () => void
  // getHtml: () => string
  // getText: () => string
  // getSelectionText: () => string // 获取选区文字
  // getElemsByTypePrefix: (typePrefix: string) => ElementWithId[]
  // getElemsByType: (type: string, isPrefix?: boolean) => ElementWithId[]
  // clear: () => void
  // dangerouslyInsertHtml: (html: string, isRecursive?: boolean) => void
  // setHtml: (html: string) => void
  i18nChangeLanguage: (lang: string) => void
}

export interface IEditorConfig {
  onCreated?: (editor: IBlockEditor) => void
  onChange?: (editor: IBlockEditor) => void
  onDestroyed?: (editor: IBlockEditor) => void

  onMaxLength?: (editor: IBlockEditor) => void
  onFocus?: (editor: IBlockEditor) => void
  onBlur?: (editor: IBlockEditor) => void

  /**
   * 自定义粘贴。返回 true 则继续粘贴，返回 false 则自行实现粘贴，阻止默认粘贴
   */
  customPaste?: (editor: IBlockEditor, e: ClipboardEvent) => boolean

  // edit state
  scroll: boolean
  placeholder?: string
  readOnly: boolean
  autoFocus: boolean
  // decorate?: (nodeEntry: NodeEntry) => Range[];
  maxLength?: number

  // 各个 menu 的配置汇总，可以通过 key 获取单个 menu 的配置
  // MENU_CONF?: IMenuConfig

  // 自由扩展其他配置
  EXTEND_CONF?: any
}

export interface IModuleConf {
  // 注册toolbar
  toolbar: Array<ISingleToolbarConfig>
  // menus: Array<IRegisterMenuConf>

  // 注册插件
  editorPlugin: <T extends IBlockEditor>(editor: T) => T
}
