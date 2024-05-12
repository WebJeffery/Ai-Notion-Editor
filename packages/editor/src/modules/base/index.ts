import { History } from '@tiptap/extension-history'
import { IModuleConf } from '@swc-editor/core'

const baseModule: Partial<IModuleConf> = {
  extensions: [History],
}

export default baseModule
