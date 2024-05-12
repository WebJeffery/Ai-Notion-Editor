/**
 * @description text style entry
 * @author WebJeffery
 */

import { IModuleConf } from '@swc-editor/core'
import { toolbar } from './toolbar'
import { blockExtensions } from './extensions'

const blockStyle: Partial<IModuleConf> = {
  toolbar,
  extensions: blockExtensions,
}

export default blockStyle
