import { Mark } from '@tiptap/core'
import { Plugin, PluginKey, TextSelection } from '@tiptap/pm/state'

const HighlightInputExtension = Mark.create({
    name: 'highlightInput',
    inclusive: false,
    excludes: '_',
    exitable: true,
    spanning: false,
    addOptions () {
        return {}
    },
    parseHTML () {
        return [{ tag: 'highlight-input' }]
    },
    addAttributes () {
        return {
            class: {
                default: 'highlight-input',
                renderHTML: function (e: any) {
                    return {
                        class: e.class
                    }
                }
            }
        }
    },
    renderHTML ({ HTMLAttributes }: any) {
        return ['highlight-input', HTMLAttributes, 0]
    },
    addProseMirrorPlugins () {
        return [
            new Plugin({
                key: new PluginKey('highlightInputPlugin'),
                props: {
                    handleClick: (editor: any, offset) => {
                        if (!editor.editable) { // 不可编辑
                            return true
                        }
                        const state = editor.state
                        const selection = editor.state.selection
                        const markArr = selection.$anchor.marks() // mark标记的集合
                        const markItem:any = markArr[0] ?? [] // 当前mark
                        const isHighMark = 'highlightInput' === (markItem?.type?.name ?? '') // 是否highlightInput标记
                        if (selection.head === selection.anchor) {
                            const markType = editor.state.schema.marks.highlightInput
                            const transaction = setAllTransaction(editor, markType, {
                                class: 'highlight-input'
                            }) // 设置所有mark默认状态

                            if (isHighMark) {
                                const clickSelection = setClickSelection(transaction, selection.$anchor, state, {
                                    class: 'highlight-input focused'
                                }) // 设置被点击mark选中
                                editor.dispatch(clickSelection)
                            } else {
                                editor.dispatch(transaction)
                            }
                        } else if (!editor.state.selection.empty && !editor.trackWrites?.parentElement?.classList.contains('highlight-input')) { //
                            // 解决，ctrl + a 全选，没办法取消选中聚焦到输入框，选中高亮不处理
                            const { pos } = editor.state.selection.$anchor
                            const transaction = editor.state.tr.setSelection(TextSelection.create(editor.state.doc, pos + offset - 1))
                            editor.dispatch(transaction)
                        }
                        return true
                    },
                    handleDOMEvents: {
                        blur: function (editor: any) {
                            const markType = editor.state.schema.marks.highlightInput
                            const transaction = setAllTransaction(editor, markType, {
                                class: 'highlight-input'
                            }) // 设置所有mark默认状态
                            editor.dispatch(transaction)
                        },
                        keydown: function (editor: any) {
                            // 解决点击高亮块连续不能输入，判断点击是高亮块，删除选区
                            if (!editor.state.selection.empty) {
                                const { state, dispatch } = editor
                                if (editor.trackWrites?.parentElement?.classList.contains('highlight-input')) {
                                    const tr = state.tr.deleteSelection()
                                    dispatch(tr)
                                }
                                // 阻止事件继续传播
                                return true
                            }
                        }
                    }
                }
            })
        ]
    }
})
/**
 * @name 获取与传入mark类型相同的node
 * @param marksArr mark数组
 * @param mark 需要获取的mark
 */
const isInSet = (marksArr: any[], mark: any) => {
    for (const item of marksArr) {
        if (item.type === mark) {
            return item
        }
    }
}

/**
 * @name 设置所有mark类型跟传入markType相等的标记的样式
 * @param editor 编辑器实例
 * @param markType 需要设置mark的类型
 * @param option 需要配置的对象
 */
const setAllTransaction = function (editor: any, markType: any, option: any) {
    const transaction = editor.state.tr // 更改编辑器文档结构内容等的对象
    const markArr:any = []

    // descendants方法：遍历 node，获取所有 highlightInput 类型的mark标记
    editor.state.doc.descendants((node: any, pos: number) => {
        const item = isInSet(node.marks, markType)
        if (item) {
            markArr.push({
                node,
                pos
            })
        }
    })

    // 将所有highlightInput 类型的mark样式设置为高亮
    markArr.forEach((function (item: any) {
        transaction.addMark(item.pos, item.pos + item.node.nodeSize, markType.create(option))
    }))
    return transaction
}

/**
 * @name 设置被点击元素选中状态
 * @param transaction 更改编辑器文档结构内容等的对象
 * @param resolvedPos 表示解析后的文档位置的对象。它提供了关于文档结构、节点、位置和标记等信息的访问和操作方法。
 * @param state 编辑器状态的对象,它包含了与编辑器相关的文档内容、选区信息、历史记录等。
 * @param option 需要配置的对象
 */
const setClickSelection = function (transaction:any, resolvedPos:any, editorState:any, option: any) {
    const startPos = resolvedPos.pos - resolvedPos.textOffset // 被点击元素起点,包含
    const endPos = startPos + resolvedPos.parent.child(resolvedPos.index()).nodeSize // 被点击元素结尾,不包含
    const selectionPos = TextSelection.create(transaction.doc, startPos, endPos) // 设置被选中的范围参数
    transaction.setSelection(selectionPos) // 设置选中
    transaction.addMark(startPos, endPos, editorState.schema.marks.highlightInput.create(option)) // 选中元素加配置对象
    return transaction
}

export default HighlightInputExtension