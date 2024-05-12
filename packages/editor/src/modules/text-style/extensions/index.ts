import TextStyle from '@tiptap/extension-text-style'
import { Bold } from '@tiptap/extension-bold'
import { Italic } from '@tiptap/extension-italic'
import { Code } from '@tiptap/extension-code'
import Underline from '@tiptap/extension-underline'
import { Strike } from '@tiptap/extension-strike'
import { Superscript } from '@tiptap/extension-superscript'
import { Subscript } from '@tiptap/extension-subscript'
import { FontFamily } from '@tiptap/extension-font-family'
import { Highlight } from '@tiptap/extension-highlight'
import { Color } from '@tiptap/extension-color'
import { TextAlign } from '@tiptap/extension-text-align'
import { Link } from '@tiptap/extension-link'

import { PainterExtension } from './extension/Painter'
import { IndentExtension } from './extension/IndentExt'

export const textExtensions = [
  Bold,
  Italic,
  Code,
  TextStyle,
  Underline,
  Strike,
  Superscript,
  Subscript,
  FontFamily,
  Highlight,
  Color,
  TextAlign,
  Link,
  PainterExtension,
  IndentExtension,
]

export default textExtensions
