import { h } from '@stencil/core';
export class AppProfile {
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-profile" },
                h("p", null,
                    "Hello! My name is ",
                    this.normalize(this.match.params.name),
                    ". My name was passed in through a route param!")));
        }
    }
    static get is() { return "app-profile"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-profile.css"]
    }; }
    static get styleUrls() { return {
        "$": ["app-profile.css"]
    }; }
    static get properties() { return {
        "match": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "MatchResults",
                "resolved": "MatchResults",
                "references": {
                    "MatchResults": {
                        "location": "import",
                        "path": "@stencil/router"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
