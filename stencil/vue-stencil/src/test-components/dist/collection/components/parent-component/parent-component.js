import { h } from '@stencil/core';
export class MyParentComponent {
    render() {
        return (h("div", null,
            h("embedded-component", { text: "Hello Stencil" }),
            h("sample-component", { text: "Test" })));
    }
    static get is() { return "parent-component"; }
}
