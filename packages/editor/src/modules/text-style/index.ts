/**
 * @description text style entry
 * @author WebJeffery
 */

import { IModuleConf } from '@swc-editor/core'

import {
  boldMenuConf,
  // underlineMenuConf,
  // italicMenuConf,
  // throughMenuConf,
  // codeMenuConf,
  // subMenuConf,
  // supMenuConf,
} from './toolbar/index'

const textStyle: Partial<IModuleConf> = {
  toolbar: [boldMenuConf],
  // menu: []
}

export default textStyle
