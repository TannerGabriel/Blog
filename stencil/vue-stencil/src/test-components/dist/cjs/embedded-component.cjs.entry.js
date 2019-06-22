'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');

class EmbeddedComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.text = 'Hello World';
    }
    render() {
        return (__chunk_1.h("div", null, this.text));
    }
}

exports.embedded_component = EmbeddedComponent;
