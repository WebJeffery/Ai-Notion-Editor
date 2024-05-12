import { EditorMangaer } from '@swc-editor/core'

import baseModule from './base'
import textStyle from './text-style'

EditorMangaer.registerModule(baseModule)
EditorMangaer.registerModule(textStyle)
