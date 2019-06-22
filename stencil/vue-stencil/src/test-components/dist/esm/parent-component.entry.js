import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';

class MyParentComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("embedded-component", { text: "Hello Stencil" }), h("sample-component", { text: "Test" })));
    }
}

export { MyParentComponent as parent_component };
