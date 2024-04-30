/**
 * @description menu entry
 * @author wangfupeng
 */

import BoldMenu from './menu/BoldToolbar'
import UnderlineMenu from './menu/UnderlineToolbar'
import CodeToolbar from './menu/CodeToolbar'
import ItalicToolbar from './menu/ItalicToolbar'
import ThroughMenu from './menu/ThroughToolbar'
import SubMenu from './menu/SubToolbar'
import SupMenu from './menu/SupToolbar'
import ClearMenu from './menu/ClearToolbar'

export const boldMenuConf = {
  key: 'bold',
  factory() {
    return new BoldMenu()
  },
}

export const underlineMenuConf = {
  key: 'underline',
  factory() {
    return new UnderlineMenu()
  },
}

export const codeMenuConf = {
  key: 'code',
  factory() {
    return new CodeToolbar()
  },
}

export const italicMenuConf = {
  key: 'italic',
  factory() {
    return new ItalicToolbar()
  },
}

export const throughMenuConf = {
  key: 'through',
  factory() {
    return new ThroughMenu()
  },
}

export const supMenuConf = {
  key: 'sup',
  factory() {
    return new SupMenu()
  },
}

export const subMenuConf = {
  key: 'sub',
  factory() {
    return new SubMenu()
  },
}

export const clearMenuConf = {
  key: 'clear',
  factory() {
    return new ClearMenu()
  },
}
