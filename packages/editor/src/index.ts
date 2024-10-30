export type * from '@swc-editor/core'
export * from '@swc-editor/core'
export type * from './components.d.ts'
export * from './create'

import { i18nAddResources, EditorMangaer } from '@swc-editor/core'
import enResources from './lang/en'
import zhResources from './lang/zh-CN'

i18nAddResources('en', enResources)
i18nAddResources('zh-CN', zhResources)
EditorMangaer.setToolbarConfigKeys({
  toolbarKeys: [
    'undo',
    'redo',
    'paint',
    'clear',
    'bold',
    'italic',
    'underline',
    'strike',
    'code',
    'sub',
    'sup',
    'separator',
    'task',
    'emotion',
    'background',
    'color',
    'align',
    'lineheight',
    'listOrdered',
    'listUnordered',
    // 'textWrap',
    'indentDecrease',
    'indentIncrease',
    // 'image',
    // 'codeBox',
    // 'table',
    // 'fullscreen',
  ],
})
