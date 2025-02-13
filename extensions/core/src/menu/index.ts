/**
 * @description config register
 * @author WebJeffery
 */
export * from './interface'

import { slashKeysMapConfig, ISingleSlashConfig } from './interface'

// 全局的slash配置
export const GLOBAL_Slash_CONF: slashKeysMapConfig = {}

/**
 * 注册 slash 菜单配置
 * @param registerMenuConf { key, factory, config } ，各个 menu key 不能重复
 * @param customConfig 自定义 menu config
 */
export function registerSlashMenu(registerSlashConf: ISingleSlashConfig, customConfig?: { [key: string]: any }) {
  const { key, factory, config } = registerSlashConf

  // 合并 config
  const newConfig = { group: 'base', ...config, ...(customConfig || {}) }

  // 注册 menu
  if (GLOBAL_Slash_CONF[key] != null) {
    console.error(`Duplicated key '${key}' in slash items`)
  }
  GLOBAL_Slash_CONF[key] = {
    key,
    factory,
    config: newConfig,
  }
}
