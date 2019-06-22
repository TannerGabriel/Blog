import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'embedded-component'
})
export class EmbeddedComponent {
  @Prop() text: string = 'Hello World';

  render() {
    return (
      <div>{ this.text }</div>
    );
  }
}

