'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');

class ContextConsumer {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.context = {};
        this.renderer = () => null;
    }
    componentWillLoad() {
        this.unsubscribe = () => {
            if (this.subscribe != null) {
                this.subscribe(this.el, 'context');
            }
        };
    }
    componentDidUnload() {
        if (this.unsubscribe != null) {
            this.unsubscribe();
        }
    }
    render() {
        return this.renderer(Object.assign({}, this.context));
    }
    get el() { return __chunk_1.getElement(this); }
}

exports.context_consumer = ContextConsumer;
