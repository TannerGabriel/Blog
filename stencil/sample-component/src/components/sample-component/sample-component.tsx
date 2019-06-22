import { Component, h, Prop, State, Event, EventEmitter, Method, Element, Listen } from '@stencil/core';
@Component({
    tag: 'sample-component',
    styleUrl: 'sample-component.css',
    shadow: true
})
export class SampleComponent{
    @Prop() text: string = 'World'
    @Prop({ mutable: true }) name: string = 'Name';
    @Prop() state: boolean = false

    @State() isActive = false

    updateStatement() {
      this.isActive = !this.isActive
    }

    @Event() active: EventEmitter;

    @Listen('active')
    activeStateHandler(event: CustomEvent) {
      console.log('Received the custom active event: ', event.detail);
    }

    @Listen('click', { capture: true })
    handleClick() {
      console.log('click');
    }

    @Method()
    async getState() {
      // Get the state of the item
      this.state = true
      return true
    }

    getTheState() {
      return this.isActive
    }

    @Element() messageDiv: HTMLElement;
    
    showMessage() {
        this.messageDiv.style.display = 'block';
    };

    internalState: boolean = true

    componentDidLoad() {
      console.log('Component successfully loaded')
      // Do something
    }
  

    render() {
      return (
        <div>
          <h1>Hello {this.text}</h1>
        </div>
      );
    }
}