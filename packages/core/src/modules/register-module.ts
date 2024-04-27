/**
 * @description 注册 module
 * @author WebJeffery
 */

import { EditorMangaer, IModuleConf } from '../editor'

export function registerModule(module: Partial<IModuleConf>) {
  const { toolbar } = module

  if (toolbar) {
    toolbar.forEach((item) => EditorMangaer.registerToolbar(item))
  }
}
