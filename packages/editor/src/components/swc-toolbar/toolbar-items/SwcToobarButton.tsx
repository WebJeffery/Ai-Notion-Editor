import { Component, Host, h, Prop, State } from '@stencil/core'
import type { IBlockEditor, IToolbarBase } from '@swc-editor/core'
import { t } from '@swc-editor/core'
import classnames from 'classnames'
import { throttle } from 'lodash-es'

@Component({
  tag: 'swc-toolbar-button',
  // styleUrl: 'swc-toolbar.css',
  shadow: false,
})
export class SwcToolbarButton {
  @Prop() editor: IBlockEditor
  @Prop() config: IToolbarBase
  @State() isDisable: boolean
  @State() isActive: boolean

  handleClick() {
    this.config.exec(this.editor)
  }

  connectedCallback() {
    this.isDisable = this.config.isDisabled(this.editor)

    this.editor.on(
      'transaction',
      throttle(() => {
        this.isDisable = this.config.isDisabled(this.editor)
        this.isActive = this.config.isActive(this.editor)
      }, 300),
    )
  }

  render() {
    const toolbar = this.config
    const cName = classnames(
      'swc-toolbar-item',
      this.isDisable ? 'swc-disabled' : '',
      this.isActive ? 'swc-toolbar-active' : '',
    )
    return (
      <Host>
        <sl-tooltip content={t(toolbar.tooltip)}>
          <div class={cName} onClick={() => this.handleClick()}>
            <swc-icon-svg icon={toolbar.iconSvg}></swc-icon-svg>
          </div>
        </sl-tooltip>
      </Host>
    )
  }
}
