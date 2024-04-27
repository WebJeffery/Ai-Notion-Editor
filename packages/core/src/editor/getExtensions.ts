import { Document } from '@tiptap/extension-document'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Text } from '@tiptap/extension-text'
// import { Extensions } from '@tiptap/core'

export const getBaseExtensions = () => {
  return [Document, Paragraph, Text]
}
