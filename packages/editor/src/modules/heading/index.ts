/**
 * @description text style entry
 * @author WebJeffery
 */

import { IModuleConf } from '@swc-editor/core'
import { Heading } from '@tiptap/extension-heading'

import HeadingToolbar from './toolbar/HeadingToolbar'

const textStyle: Partial<IModuleConf> = {
  toolbar: [
    {
      key: 'heading',
      factory() {
        return new HeadingToolbar()
      },
      config: {
        type: 'select',
      },
    },
  ],
  extensions: [Heading],
  // menu: []
}

export default textStyle
