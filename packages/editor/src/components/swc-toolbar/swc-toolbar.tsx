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
          }
        })}
      </div>
    )
  }
}
