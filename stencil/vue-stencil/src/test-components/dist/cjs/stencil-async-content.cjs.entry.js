'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');

class AsyncContent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.content = '';
    }
    componentWillLoad() {
        if (this.documentLocation != null) {
            return this.fetchNewContent(this.documentLocation);
        }
    }
    fetchNewContent(newDocumentLocation) {
        return fetch(newDocumentLocation)
            .then(response => response.text())
            .then(data => {
            this.content = data;
        });
    }
    render() {
        return (__chunk_1.h("div", { innerHTML: this.content }));
    }
    static get watchers() { return {
        "documentLocation": ["fetchNewContent"]
    }; }
}

exports.stencil_async_content = AsyncContent;
