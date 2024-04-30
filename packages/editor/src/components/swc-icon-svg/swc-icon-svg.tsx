import { Component, Host, h, Prop } from '@stencil/core'

export interface SwcIconProps {
  size?: string
  color?: string
  icon: string
}

@Component({
  tag: 'swc-icon-svg',
  styleUrl: 'swc-icon-svg.css',
  shadow: false,
})
export class SwcIconSvg {
  @Prop() icon: string

  render() {
    // const style: { width?: string; height?: string; fill?: string } = {}
    // if (props.size) {
    //   const val = Number.isNaN(Number(props.size))
    //   style.width = val ? props.size : props.size + 'px'
    //   style.height = val ? props.size : props.size + 'px'
    // }
    // if (props.color) {
    //   style.fill = props.color
    // }

    return (
      <Host>
        <div class="swc-icon-svg" innerHTML={this.icon}></div>
      </Host>
    )
  }
}
