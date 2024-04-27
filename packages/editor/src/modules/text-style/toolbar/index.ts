/**
 * @description menu entry
 * @author wangfupeng
 */

import BoldMenu from './BoldToolbar'
import CodeMenu from './CodeMenu'
import ItalicMenu from './ItalicToolbar'
import ThroughMenu from './ThroughToolbar'
import UnderlineMenu from './UnderlineToolbar'
import SubMenu from './SubToolbar'
import SupMenu from './SupToolbar'

export const boldMenuConf = {
  key: 'bold',
  factory() {
    return new BoldMenu()
  },
}

export const codeMenuConf = {
  key: 'code',
  factory() {
    return new CodeMenu()
  },
}

export const italicMenuConf = {
  key: 'italic',
  factory() {
    return new ItalicMenu()
  },
}

export const throughMenuConf = {
  key: 'through',
  factory() {
    return new ThroughMenu()
  },
}

export const underlineMenuConf = {
  key: 'underline',
  factory() {
    return new UnderlineMenu()
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
