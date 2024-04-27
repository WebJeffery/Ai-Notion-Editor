/**
 * @description helper
 * @author WebJeffery
 */
import { IBlockEditor } from '@swc-editor/core'

// @ts-ignore
export function isMenuDisabled(editor: IBlockEditor, mark?: string): boolean {
  return !!editor && !!mark
}
