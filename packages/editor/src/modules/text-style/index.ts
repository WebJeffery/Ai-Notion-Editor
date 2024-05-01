/**
 * @description text style entry
 * @author WebJeffery
 */

import { IModuleConf } from '@swc-editor/core'
import toolbar from './toolbar'
import textExtensions from './extensions'

const textStyle: Partial<IModuleConf> = {
  toolbar,
  extensions: textExtensions,
}

export default textStyle
