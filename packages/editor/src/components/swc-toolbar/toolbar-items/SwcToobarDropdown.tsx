import { Component, Host, h, Prop, State } from '@stencil/core'
import type { IBlockEditor, IToolbarBase } from '@swc-editor/core'
import { t } from '@swc-editor/core'
import classnames from 'classnames'
import { throttle } from 'lodash-es'

@Component({
  tag: 'swc-toolbar-dropdown',
  // styleUrl: 'swc-toolbar.css',
  shadow: false,
})
export class SwcToobarDropdown {
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

  onSelect() {
    console.log(333)
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
          <div class={cName}>
            <sl-dropdown distance="10" placement="bottom">
              <div slot="trigger">
                <swc-icon-svg icon={toolbar.iconSvg}></swc-icon-svg>
              </div>
              <sl-menu>
                <sl-menu-item>Dropdown Item 1</sl-menu-item>
                <sl-menu-item>Dropdown Item 2</sl-menu-item>
                <sl-menu-item>Dropdown Item 3</sl-menu-item>
                <sl-divider></sl-divider>
                <sl-menu-item type="checkbox" checked>
                  Checkbox
                </sl-menu-item>
                <sl-menu-item disabled>Disabled</sl-menu-item>
              </sl-menu>
            </sl-dropdown>
          </div>
        </sl-tooltip>
      </Host>
    )
  }
}
