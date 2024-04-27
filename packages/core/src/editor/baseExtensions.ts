import { Document } from '@tiptap/extension-document'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Text } from '@tiptap/extension-text'

export const getBaseExtensions = () => {
  return [Document, Paragraph, Text]
}
