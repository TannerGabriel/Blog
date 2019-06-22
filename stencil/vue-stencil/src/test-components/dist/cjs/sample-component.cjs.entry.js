'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');

class SampleComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.text = 'World';
        this.name = 'Name';
        this.state = false;
        this.isActive = false;
        this.internalState = true;
        this.active = __chunk_1.createEvent(this, "active", 7);
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
        return (__chunk_1.h("div", null, __chunk_1.h("h1", null, "Hello ", this.text)));
    }
    get messageDiv() { return __chunk_1.getElement(this); }
    static get style() { return ""; }
}

exports.sample_component = SampleComponent;
