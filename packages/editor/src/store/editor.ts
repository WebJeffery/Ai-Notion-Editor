// src/store/editor.store.ts
import { createStore } from '@stencil/store';
// import { defaultOptions, ojbectSchema } from '@/options';
// import type { PageOption, UmoEditorOptions } from '@/types';
import type { Mark } from '@tiptap/pm/model';
import type { Editor } from '@tiptap/core';
// import type { TableOfContentDataItem } from '@tiptap-pro/extension-table-of-contents';
// import { isRecord } from '@tool-belt/type-predicates';

// export type TableOfContentItem = TableOfContentDataItem & { title: string };

export const createEditorStore = () => {
  const store = createStore({
    toolbarKey: 'twc-toolbar-' + new Date().getTime(),
    contentKey: 'twc-content-' + new Date().getTime(),
    // options: defaultOptions as UmoEditorOptions,
    // page: defaultOptions.page as PageOption,
    editor: null as Editor | null,
    painter: {
      enabled: false,
      once: true,
      marks: [] as Mark[],
    },
    bookmark: true,
    blockMenu: false,
    assistantBox: false,
    // tableOfContents: [] as TableOfContentItem[],
    imageViewer: {
      visible: false,
      current: null,
    },
    searchReplace: false,
    savedAt: null as number | null,
    printing: false,
    exportImage: false,
    exportPDF: false,
    editorDestroyed: false,
  });

  // 状态操作方法
  const setOptions = (value: unknown) => {
    // const opts = isRecord(value) && Object.keys(value).includes('value') ? value.value : value;
    // state.options = ojbectSchema.merge(
    //   state.options,
    //   Object.keys(opts).reduce<Record<string, unknown>>((acc, key) => {
    //     if (opts[key] !== undefined) {
    //       acc[key] = opts[key];
    //     }
    //     return acc;
    //   }, {}),
    // );
  };

  const setPainter = ({ enabled, once, marks }: { enabled: boolean; once: boolean; marks: Mark[] }) => {
    store.set('painter', { enabled, once, marks });
  };

  const setEditor = (editorInstance: Editor) => {
    store.set('editor', editorInstance);
  };

  const resetStore = () => {
    store.reset();
  };

  // 监听状态变化
  // onChange('options', newValue => {
  //   const { defaultBackground, defaultMargin, defaultOrientation, watermark, showBreakMarks } = newValue.page;
  //   state.page = {
  //     size: newValue.dicts?.pageSizes.find((item: { default: boolean }) => item.default),
  //     margin: defaultMargin,
  //     background: defaultBackground,
  //     orientation: defaultOrientation,
  //     showBreakMarks,
  //     watermark,
  //     showLineNumber: false,
  //     showToc: false,
  //     zoomLevel: 100,
  //     autoWidth: false,
  //     preview: {
  //       enabled: false,
  //       laserPointer: true,
  //     },
  //   };
  // });

  return { store, setOptions, setPainter, setEditor, resetStore };
};
