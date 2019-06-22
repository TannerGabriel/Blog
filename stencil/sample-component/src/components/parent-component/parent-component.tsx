import { Component, h } from '@stencil/core';

@Component({
  tag: 'parent-component'
})
export class MyParentComponent {

  render() {
    return (
      <div>
        <embedded-component text="Hello Stencil"></embedded-component>
        <sample-component text="Test"></sample-component>
      </div>
    );
  }
}