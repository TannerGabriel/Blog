import { Component, h } from '@stencil/core';

@Component({
    tag: 'sample-component',
    styleUrl: 'sample-component.css',
    shadow: true
})
export class SampleComponent{
    render() {
        return (
          <div>
            <h1>Sample Component</h1>
          </div>
        );
      }
}

