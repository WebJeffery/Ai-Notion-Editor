import { TaskItem } from '@tiptap/extension-task-item'
import { TaskList } from '@tiptap/extension-task-list'
import { BulletList } from '@tiptap/extension-bullet-list'
import { OrderedList } from '@tiptap/extension-ordered-list'
import { ListItem } from '@tiptap/extension-list-item'
import { HorizontalRule } from '@tiptap/extension-horizontal-rule'

export const blockExtensions = [TaskList, TaskItem, BulletList, OrderedList, ListItem, HorizontalRule]
