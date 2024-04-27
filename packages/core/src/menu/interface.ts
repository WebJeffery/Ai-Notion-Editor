import { IBlockEditor } from '../editor/interface'

export interface ISlashGroup {
  key: string
  title: string
  iconSvg?: string
  menuKeys: string[]
}

export interface ISlashMenu {
  readonly title: string
  readonly subTitle?: string
  readonly desc?: string
  readonly group: string // 所属分组
  readonly leftIcon?: string
  readonly rightIcon?: string
  readonly hotkey?: string // 快捷键，使用 https://www.npmjs.com/package/is-hotkey
  readonly alwaysEnable?: boolean // 永远不 disabled ，如“全屏”

  readonly tag: string // 'button' | 'select'
  readonly width?: number // 设置 button 宽度

  getTitle?: () => string // 获取标题
  getValue: (editor: IBlockEditor) => string | boolean // 获取菜单相关的 val 。如是否加粗、颜色值、h1/h2/h3 等
  isActive: (editor: IBlockEditor) => boolean // 是否激活菜单，如选区处于加粗文本时，激活 bold
  isDisabled: (editor: IBlockEditor) => boolean // 是否禁用菜单，如选区处于 code-block 时，禁用 bold 等样式操作

  exec: (editor: IBlockEditor, value: string | boolean) => void // button click 或 select change 时触发
}

export type ISlashFactory = () => ISlashMenu

export interface ISingleSlashConfig {
  key: string
  factory: ISlashFactory
  config?: Record<string, any>
}

export interface slashKeysMapConfig {
  [key: string]: ISingleSlashConfig
}

export interface ISlashConfigKeys {
  slashKeys: Array<string | ISlashGroup>
  insertKeys: { index: number; keys: string | Array<string | ISlashGroup> }
  excludeKeys: Array<string> // 排除哪些菜单
  modalAppendToBody: boolean // modal append 到 body ，而非 $textAreaContainer 内
  slashKeysMapConfig: slashKeysMapConfig
}
