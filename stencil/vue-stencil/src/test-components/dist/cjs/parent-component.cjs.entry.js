'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');

class MyParentComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("div", null, __chunk_1.h("embedded-component", { text: "Hello Stencil" }), __chunk_1.h("sample-component", { text: "Test" })));
    }
}

exports.parent_component = MyParentComponent;
