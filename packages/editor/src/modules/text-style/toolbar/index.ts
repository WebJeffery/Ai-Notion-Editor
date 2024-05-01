import UndoToolbar from './menu/UndoToolbar'
import RedoToolbar from './menu/RedoToolbar'
import PaintToolbar from './menu/PaintToolbar'
import ClearToolbar from './menu/ClearToolbar'
import BoldToolbar from './menu/BoldToolbar'
import ItalicToolbar from './menu/ItalicToolbar'
import UnderlineToolbar from './menu/UnderlineToolbar'
import StrikeToolbar from './menu/StrikeToolbar'
import CodeToolbar from './menu/CodeToolbar'
import SubToolbar from './menu/SubToolbar'
import SupToolbar from './menu/SupToolbar'
import SeparatorToolbar from './menu/SeparatorToolbar'
import TaskToolbar from './menu/TaskToolbar'
import EmotionToolbar from './menu/EmotionToolbar'
import ColorToolbar from './menu/ColorToolbar'
import BackgroundToolbar from './menu/BackgroundToolbar'
import AlignToolbar from './menu/AlignToolbar'
import LineheightToolbar from './menu/LineheightToolbar'
import ListOrderedToolbar from './menu/ListOrderedToolbar'
import ListUnorderedToolbar from './menu/ListUnorderedToolbar'
import TextWrapToolbar from './menu/TextWrapToolbar'
import IndentDecreaseToolbar from './menu/IndentDecreaseToolbar'
import IndentIncreaseToolbar from './menu/IndentIncreaseToolbar'
import ImageToolbar from './menu/ImageToolbar'
import VideoToolbar from './menu/VideoToolbar'
import CodeBoxToolbar from './menu/CodeBoxToolbar'
import TableToolbar from './menu/TableToolbar'
import FullscreenToolbar from './menu/FullscreenToolbar'

const toolbar = [
  {
    key: 'undo',
    factory() {
      return new UndoToolbar()
    },
  },
  {
    key: 'redo',
    factory() {
      return new RedoToolbar()
    },
  },
  {
    key: 'paint',
    factory() {
      return new PaintToolbar()
    },
  },
  {
    key: 'clear',
    factory() {
      return new ClearToolbar()
    },
  },
  {
    key: 'bold',
    factory() {
      return new BoldToolbar()
    },
  },
  {
    key: 'italic',
    factory() {
      return new ItalicToolbar()
    },
  },
  {
    key: 'underline',
    factory() {
      return new UnderlineToolbar()
    },
  },
  {
    key: 'strike',
    factory() {
      return new StrikeToolbar()
    },
  },
  {
    key: 'code',
    factory() {
      return new CodeToolbar()
    },
  },
  {
    key: 'sub',
    factory() {
      return new SubToolbar()
    },
  },
  {
    key: 'sup',
    factory() {
      return new SupToolbar()
    },
  },
  {
    key: 'separator',
    factory() {
      return new SeparatorToolbar()
    },
  },
  {
    key: 'task',
    factory() {
      return new TaskToolbar()
    },
  },
  {
    key: 'emotion',
    factory() {
      return new EmotionToolbar()
    },
  },
  {
    key: 'background',
    factory() {
      return new BackgroundToolbar()
    },
  },
  {
    key: 'color',
    factory() {
      return new ColorToolbar()
    },
  },
  {
    key: 'align',
    factory() {
      return new AlignToolbar()
    },
  },
  {
    key: 'lineheight',
    factory() {
      return new LineheightToolbar()
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
  {
    key: 'textWrap',
    factory() {
      return new TextWrapToolbar()
    },
  },
  {
    key: 'indentDecrease',
    factory() {
      return new IndentDecreaseToolbar()
    },
  },
  {
    key: 'indentIncrease',
    factory() {
      return new IndentIncreaseToolbar()
    },
  },
  {
    key: 'image',
    factory() {
      return new ImageToolbar()
    },
  },
  {
    key: 'video',
    factory() {
      return new VideoToolbar()
    },
  },
  {
    key: 'codeBox',
    factory() {
      return new CodeBoxToolbar()
    },
  },
  {
    key: 'table',
    factory() {
      return new TableToolbar()
    },
  },
  {
    key: 'fullscreen',
    factory() {
      return new FullscreenToolbar()
    },
  },
]

export default toolbar
