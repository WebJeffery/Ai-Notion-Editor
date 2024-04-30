import { Component, Host, h, Prop } from '@stencil/core'
import type { IBlockEditor, IToolbarBase } from '@swc-editor/core'

@Component({
  tag: 'swc-toolbar-button',
  // styleUrl: 'swc-toolbar.css',
  shadow: false,
})
export class SwcToolbarButton {
  @Prop() editor: IBlockEditor
  @Prop() config: IToolbarBase

  handleClick() {
    this.config.exec(this.editor)
  }

  render() {
    const toolbar = this.config
    return (
      <Host>
        <sl-tooltip content={toolbar.title}>
          <div class="swc-toolbar-item" onClick={() => this.handleClick()}>
            <swc-icon-svg icon={toolbar.iconSvg}></swc-icon-svg>
          </div>
        </sl-tooltip>
      </Host>
    )
  }
}
