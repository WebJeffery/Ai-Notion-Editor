import { Editor, EditorEvents, EditorOptions, Extensions, getTextBetween } from '@tiptap/core';
export type AiEditorType = {
  tiptapEditor: Editor;
};

export type TiptapEditorType = {
  aiEditor: AiEditorType;
  userOptions: AiEditorOptions;
};

export interface CustomMenu {
  id?: string;
  title: string;
  className?: string;
  icon?: string;
  html?: string;
  tip?: string;
  onClick?: (event: MouseEvent, editor: AiEditorType, value?: any) => void;
  onCreate?: (button: HTMLElement, editor: AiEditorType) => void;
}

export interface AiEditorEvent {
  onCreate: (props: EditorEvents['create'], options: AiEditorOptions) => void;
  onTransaction: (props: EditorEvents['transaction']) => void;
}

export interface UploaderEvent {
  onUploadBefore: (file: File, uploadUrl: string, headers: Record<string, any>) => void | boolean;
  onSuccess: (file: File, response: any) => any;
  onFailed: (file: File, response: any) => void;
  onError: (file: File, err: any) => void;
}

export type AiEditorOptions = {
  mode?: string;
  element: string | Element;
  content?: string;
  contentRetention?: boolean;
  contentRetentionKey?: string;
  header: Element | boolean;
  footer: Element | boolean;
  lang?: string;
  editable?: boolean;
  i18n?: Record<string, Record<string, string>>;
  placeholder?: string;
  theme?: 'light' | 'dark';
  cbName?: string;
  cbUrl?: string;
  onMentionQuery?: (query: string) => any[] | Promise<any[]>;
  onCreateBefore?: (editor: AiEditorType, extensions: Extensions) => void | Extensions;
  onDestroy?: (editor: AiEditorType) => void;
  onCreated?: (editor: AiEditorType) => void;
  onChange?: (editor: AiEditorType) => void;
  onSave?: (editor: AiEditorType) => boolean;
  toolbarKeys?: (string | CustomMenu)[];
  link?: {
    autolink?: boolean;
    rel?: string;
    class?: string;
  };
  uploader?: (
    file: File,
    uploadUrl: string,
    headers: Record<string, any>,
    formName: string,
  ) => Promise<Record<string, any>>;
  image?: {
    customMenuInvoke?: (editor: AiEditorType) => void;
    uploadUrl?: string;
    uploadHeaders?: Record<string, any>;
    uploader?: (
      file: File,
      uploadUrl: string,
      headers: Record<string, any>,
      formName: string,
    ) => Promise<Record<string, any>>;
    uploaderEvent?: UploaderEvent;
    defaultSize?: number;
    allowBase64: boolean;
  };
  video?: {
    customMenuInvoke?: (editor: AiEditorType) => void;
    uploadUrl?: string;
    uploadHeaders?: Record<string, any>;
    uploader?: (
      file: File,
      uploadUrl: string,
      headers: Record<string, any>,
      formName: string,
    ) => Promise<Record<string, any>>;
    uploaderEvent?: UploaderEvent;
  };
  attachment?: {
    customMenuInvoke?: (editor: AiEditorType) => void;
    uploadUrl?: string;
    uploadHeaders?: Record<string, any>;
    uploader?: (
      file: File,
      uploadUrl: string,
      headers: Record<string, any>,
      formName: string,
    ) => Promise<Record<string, any>>;
    uploaderEvent?: UploaderEvent;
  };
  // fontFamily?: {
  //   values: NameAndValue[];
  // };
  // fontSize?: {
  //   values: NameAndValue[];
  // };
  // ai?: AiGlobalConfig;
};
