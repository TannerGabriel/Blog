import { d as registerInstance, e as createEvent, f as h, g as getElement } from './sample-component-a67c1bd3.js';

class SampleComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.text = 'World';
        this.name = 'Name';
        this.state = false;
        this.isActive = false;
        this.internalState = true;
        this.active = createEvent(this, "active", 7);
    }
    updateStatement() {
        this.isActive = !this.isActive;
    }
    activeStateHandler(event) {
        console.log('Received the custom active event: ', event.detail);
    }
    handleClick() {
        console.log('click');
    }
    async getState() {
        // Get the state of the item
        this.state = true;
        return true;
    }
    getTheState() {
        return this.isActive;
    }
    showMessage() {
        this.messageDiv.style.display = 'block';
    }
    ;
    componentDidLoad() {
        console.log('Component successfully loaded');
        // Do something
    }
    render() {
        return (h("div", null, h("h1", null, "Hello ", this.text)));
    }
    get messageDiv() { return getElement(this); }
    static get style() { return ""; }
}

export { SampleComponent as sample_component };
