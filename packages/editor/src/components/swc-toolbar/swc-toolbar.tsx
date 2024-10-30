import { Component, Prop, h, State } from '@stencil/core'
import type { IBlockEditor, IToolbarConfigKeys, IToolbarBase } from '@swc-editor/core'

@Component({
  tag: 'swc-toolbar',
  styleUrl: 'swc-toolbar.css',
  shadow: false,
})
export class SwcToolbar {
  @Prop() editor: IBlockEditor
  @Prop() config: IToolbarConfigKeys

  @State() toolbarList: IToolbarBase[] = []

  connectedCallback() {
    const { toolbarKeysMapConfig, toolbarKeys, excludeKeys } = this.config
    // const toolbar = [
    //   'undo',
    //   'redo',
    //   'paint',
    //   'clear',
    //   'bold',
    //   'italic',
    //   'underline',
    //   'strike',
    //   'code',
    //   'sub',
    //   'sup',
    //   'separator',
    //   'task',
    //   'emotion',
    //   'background',
    //   'color',
    //   'align',
    //   'lineheight',
    //   'listOrdered',
    //   'listUnordered',
    //   'textWrap',
    //   'indentDecrease',
    //   'indentIncrease',
    //   'image',
    //   'video',
    //   'codeBox',
    //   'table',
    //   'fullscreen',
    // ]
    // console.log('toolbarKeys', toolbarKeys)
    // toolbar.push(...toolbarKeys)

    toolbarKeys.forEach((toolbar) => {
      if (typeof toolbar === 'string' && !excludeKeys.includes(toolbar)) {
        const toolbarConfig = toolbarKeysMapConfig[toolbar]
        if (toolbarConfig) {
          this.toolbarList.push(Object.assign(toolbarConfig.factory(), toolbarConfig.config))
        }
      }
    })
  }

  render() {
    return (
      <div class="swc-toolbar">
        {this.toolbarList.map((config) => {
          if (config.type === 'button') {
            return <swc-toolbar-button config={config} editor={this.editor}></swc-toolbar-button>
          } else if (config.type === 'dropdown') {
            return <swc-toolbar-dropdown config={config} editor={this.editor}></swc-toolbar-dropdown>
          }
        })}
      </div>
    )
  }
}
