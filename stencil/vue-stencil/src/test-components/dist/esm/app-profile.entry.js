import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';

class AppProfile {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-profile" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
        }
    }
    static get style() { return ".app-profile{padding:10px}"; }
}

export { AppProfile as app_profile };
