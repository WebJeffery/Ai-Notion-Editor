// 创建编辑器实例、导航栏实例
export * from './create'
export * from './editor'
// i18n
export * from './i18n'
export { registerModule } from './modules/register-module'
import { EditorMangaer, getBaseExtensions } from './editor'
import { getDefaultToolbarConfig } from './toolbar/default-config'

// init i18n
import './i18n/locale'

// 注册模块，如加粗、斜体、删除线等行内工具，以及段落、列表、图片等元素插件
import './modules'
// 工具栏默认配置
EditorMangaer.setToolbarConfig(getDefaultToolbarConfig())
// 基础扩展插件
EditorMangaer.setExtensionConfig(getBaseExtensions())

export { EditorMangaer }
