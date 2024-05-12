import { EditorMangaer } from '@swc-editor/core'

import baseModule from './base'
import textStyle from './text-style'
import blockStyle from './block-element'

EditorMangaer.registerModule(baseModule)
EditorMangaer.registerModule(textStyle)
EditorMangaer.registerModule(blockStyle)
