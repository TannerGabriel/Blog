'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');

class AppProfile {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        if (this.match && this.match.params.name) {
            return (__chunk_1.h("div", { class: "app-profile" }, __chunk_1.h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
        }
    }
    static get style() { return ".app-profile{padding:10px}"; }
}

exports.app_profile = AppProfile;
