/**
 * @description Editor View class
 * @author WebJeffery
 */
import { Extensions } from '@tiptap/core'
import { registerToolbarMenu, getDefaultToolbarConfigKeys, IToolbarConfigKeys, ISingleToolbarConfig } from '../toolbar'
import { registerSlashMenu, ISingleSlashConfig, ISlashConfigKeys } from '../menu'
import { getBaseExtensions } from './baseExtensions'
import { IModuleConf } from './interface'

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

  // 编辑器扩展插件
  static tiptapExtensions: Extensions = getBaseExtensions()
  static addTiptapExtensions(extensions: Extensions) {
    this.tiptapExtensions.push(...extensions)
  }

  // toolbar 工具栏 key 默认配置
  static toolbarConfigKeys: Partial<IToolbarConfigKeys> = getDefaultToolbarConfigKeys()
  static setToolbarConfigKeys(newConfig: Partial<IToolbarConfigKeys> = {}) {
    this.toolbarConfigKeys = {
      ...this.toolbarConfigKeys,
      ...newConfig,
    }
  }

  // 注册工具栏 toolbar menu
  static registerToolbarMenu(toolbarMenu: ISingleToolbarConfig, customConfig?: { [key: string]: any }) {
    registerToolbarMenu(toolbarMenu, customConfig)
  }

  // slash 工具栏 key 默认配置
  static slashConfigKeys: Partial<ISlashConfigKeys> = {}
  static setSlashConfigKeys(newConfig: Partial<ISlashConfigKeys> = {}) {
    this.slashConfigKeys = {
      ...this.slashConfigKeys,
      ...newConfig,
    }
  }

  // 输入 / 斜杠菜单
  static registerSlashMenu(slashMenu: ISingleSlashConfig, customConfig?: { [key: string]: any }) {
    registerSlashMenu(slashMenu, customConfig)
  }

  // 注册插件
  // static plugins: PluginType[] = [];
  // static registerPlugin(plugin: PluginType) {
  //   this.plugins.push(plugin);
  // }

  // 注册 module
  static registerModule(module: Partial<IModuleConf>) {
    const { toolbar, extensions, slashMenu } = module

    if (toolbar) {
      toolbar.forEach((item) => EditorMangaer.registerToolbarMenu(item))
    }

    if (slashMenu) {
      slashMenu.forEach((item) => EditorMangaer.registerSlashMenu(item))
    }

    if (extensions) {
      EditorMangaer.addTiptapExtensions(extensions)
    }
  }
}
