/**
 * @description Editor View class
 * @author WebJeffery
 */
import { Extensions } from '@tiptap/core'
import { registerToolbarConfig, IToolbarConfig, ISingleToolbarConfig } from '../toolbar'

export class EditorMangaer {
  constructor() {
    throw new Error('不能实例化\nCan not construct a instance')
  }

  // editor 配置
  // static editorConfig: Partial<IEditorConfig> = {};
  // static setEditorConfig(newConfig: Partial<IEditorConfig> = {}) {
  //   this.editorConfig = {
  //     ...this.editorConfig,
  //     ...newConfig,
  //   };
  // }

  // toolbar 配置
  static toolbarConfig: Partial<IToolbarConfig> = {}
  static setToolbarConfig(newConfig: Partial<IToolbarConfig> = {}) {
    this.toolbarConfig = {
      ...this.toolbarConfig,
      ...newConfig,
    }
  }

  // 编辑器扩展插件
  static extensionConfig: Extensions = []
  static setExtensionConfig(extensions: Extensions) {
    this.extensionConfig.push(...extensions)
  }

  // 注册插件
  // static plugins: PluginType[] = [];
  // static registerPlugin(plugin: PluginType) {
  //   this.plugins.push(plugin);
  // }

  // 注册 menu
  // TODO 可在注册时传入配置，在开发文档中说明
  static registerToolbar(toolbarConf: ISingleToolbarConfig, customConfig?: { [key: string]: any }) {
    registerToolbarConfig(toolbarConf, customConfig)
  }

  // // 注册 module
  // static registerModule(module: Partial<IModuleConf>) {
  //   registerModule(module);
  // }
}
