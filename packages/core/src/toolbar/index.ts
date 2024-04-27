/**
 * @description config register
 * @author WebJeffery
 */
export * from './interface'

import { toolbarKeysMapConfig, ISingleToolbarConfig } from './interface'

// 全局的菜单配置
export const GLOBAL_Toolbar_CONF: toolbarKeysMapConfig = {}

/**
 * 注册菜单配置
 * @param registerMenuConf { key, factory, config } ，各个 menu key 不能重复
 * @param customConfig 自定义 menu config
 */
export function registerToolbarConfig(registerMenuConf: ISingleToolbarConfig, customConfig?: { [key: string]: any }) {
  const { key, factory, config } = registerMenuConf

  // 合并 config
  const newConfig = { type: 'button', ...config, ...(customConfig || {}) }

  // 注册 menu
  if (GLOBAL_Toolbar_CONF[key] != null) {
    console.error(`Duplicated key '${key}' in toolbar items`)
  }
  GLOBAL_Toolbar_CONF[key] = {
    key,
    factory,
    config: newConfig,
  }
}
