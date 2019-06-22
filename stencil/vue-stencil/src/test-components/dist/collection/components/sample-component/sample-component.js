import { h } from '@stencil/core';
export class SampleComponent {
    constructor() {
        this.text = 'World';
        this.name = 'Name';
        this.state = false;
        this.isActive = false;
        this.internalState = true;
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
        return (h("div", null,
            h("h1", null,
                "Hello ",
                this.text)));
    }
    static get is() { return "sample-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["sample-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["sample-component.css"]
    }; }
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
            "defaultValue": "'World'"
        },
        "name": {
            "type": "string",
            "mutable": true,
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
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'Name'"
        },
        "state": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "state",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isActive": {}
    }; }
    static get events() { return [{
            "method": "active",
            "name": "active",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getState": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "messageDiv"; }
    static get listeners() { return [{
            "name": "active",
            "method": "activeStateHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}
