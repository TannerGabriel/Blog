import { h } from '@stencil/core';
export class EmbeddedComponent {
    constructor() {
        this.text = 'Hello World';
    }
    render() {
        return (h("div", null, this.text));
    }
    static get is() { return "embedded-component"; }
    static get properties() { return {
        "text": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "text",
            "reflect": false,
            "defaultValue": "'Hello World'"
        }
    }; }
}
