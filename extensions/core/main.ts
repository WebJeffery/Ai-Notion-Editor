import { createEditor, createToolbar, EditorMangaer } from './src/index.ts'

const wrap = document.querySelector('#app') as HTMLElement

// @ts-ignore
window.editor = EditorMangaer
// @ts-ignore
window.aiEditor = createEditor({
  element: wrap,
  // editable:false,
  content:
    '![](https://files.chatartpro.com/web-draw-image/20240417/661f91c1116a7.png "article_generator_images") **test**',
  //   i18n: {
  //     zh: {
  //       undo: '撤销(可自定义国际化内容...)',
  //       redo: '重做(可自定义国际化内容!)',
  //     },
  //   },
  // onMentionQuery: (query) => {
  //     return [
  //         'Michael Yang', 'Jean Zhou', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 'Winona Ryder'
  //         , 'Christina Applegate', 'Alyssa Milano', 'Molly Ringwald', 'Ally Sheedy', 'Debbie Harry', 'Olivia Newton-John'
  //         , 'Elton John', 'Michael J. Fox', 'Axl Rose', 'Emilio Estevez', 'Ralph Macchio', 'Rob Lowe', 'Jennifer Grey'
  //         , 'Mickey Rourke', 'John Cusack', 'Matthew Broderick', 'Justine Bateman', 'Lisa Bonet',
  //     ]
  //     // .filter(item => item.toLowerCase().startsWith(query.toLowerCase())).slice(0, 5)
  // }
})

// @ts-ignore
window.createToolbar = createToolbar({
  editor: window.aiEditor,
  selector: '#wc-editor-toolbar',
})
