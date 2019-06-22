import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';

class EmbeddedComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.text = 'Hello World';
    }
    render() {
        return (h("div", null, this.text));
    }
}

export { EmbeddedComponent as embedded_component };
