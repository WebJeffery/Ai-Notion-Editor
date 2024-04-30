/**
 * @description text style entry
 * @author WebJeffery
 */

import { IModuleConf } from '@swc-editor/core'

import {
  boldMenuConf,
  underlineMenuConf,
  italicMenuConf,
  throughMenuConf,
  codeMenuConf,
  subMenuConf,
  supMenuConf,
  clearMenuConf,
} from './toolbar/index'
import textExtensions from './extensions'

const textStyle: Partial<IModuleConf> = {
  toolbar: [
    boldMenuConf,
    underlineMenuConf,
    italicMenuConf,
    throughMenuConf,
    codeMenuConf,
    subMenuConf,
    supMenuConf,
    clearMenuConf,
  ],
  extensions: textExtensions,
  // menu: []
}

export default textStyle
