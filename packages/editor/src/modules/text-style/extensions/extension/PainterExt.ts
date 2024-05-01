import { Plugin } from 'prosemirror-state'
import { Extension } from '@tiptap/core'
import { PluginKey } from '@tiptap/pm/state'
import { Mark } from 'prosemirror-model'
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    painter: {
      setPainter: (marks: Mark[]) => ReturnType
    }
  }
}
export type PainterAction = {
  type: 'start' | 'end'
  marks: Mark[]
}

export const PainterExt = Extension.create({
  name: 'painter',

  addCommands() {
    return {
      setPainter: (marks: Mark[]) => (obj) => {
        const {
          view: {
            dispatch,
            state: { tr },
            dom,
          },
        } = obj
        dom.style.cursor = 'context-menu'
        dispatch(tr.setMeta('painterAction', { type: 'start', marks }))
        return true
      },
    }
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('aie-painter'),
        state: {
          init: () => [] as Mark[],
          apply: (tr, set) => {
            const action = tr.getMeta('painterAction') as PainterAction
            if (action && action.type === 'start') {
              set = action.marks
            } else if (action && action.type === 'end') {
              set = []
            }
            return set
          },
        },
        props: {
          handleDOMEvents: {
            mousedown(view) {
              const marks = this.getState(view.state) as Mark[]
              if (!marks || marks.length == 0) {
                return false
              }
              const mouseup = () => {
                document.removeEventListener('mouseup', mouseup)

                const {
                  dispatch,
                  state: { tr: transition, selection },
                  dom,
                } = view
                dom.style.cursor = ''

                let tr = transition.removeMark(selection.from, selection.to)
                for (const mark of marks) {
                  if (mark.type.name != 'link') {
                    tr = tr.addMark(selection.from, selection.to, mark)
                  }
                }

                dispatch(tr.setMeta('painterAction', { type: 'end' }))
              }

              document.addEventListener('mouseup', mouseup)
              return true
            },
          },
        },
      }),
    ]
  },
})
