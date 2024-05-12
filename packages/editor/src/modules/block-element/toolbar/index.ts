import TaskToolbar from './menu/TaskToolbar'
import ListOrderedToolbar from './menu/ListOrderedToolbar'
import ListUnorderedToolbar from './menu/ListUnorderedToolbar'

export const toolbar = [
  {
    key: 'task',
    factory() {
      return new TaskToolbar()
    },
  },
  {
    key: 'listOrdered',
    factory() {
      return new ListOrderedToolbar()
    },
  },
  {
    key: 'listUnordered',
    factory() {
      return new ListUnorderedToolbar()
    },
  },
]
