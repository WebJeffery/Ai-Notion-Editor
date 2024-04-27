/**
 * @description text style entry
 * @author WebJeffery
 */

import { IModuleConf } from '../../editor/interface'

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
}

export default textStyle
