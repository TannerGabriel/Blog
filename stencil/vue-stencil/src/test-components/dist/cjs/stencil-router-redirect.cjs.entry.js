'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');
const __chunk_4 = require('./chunk-e9793ea1.js');

// Get the URL for this route link without the root from the router
const getUrl = (url, root) => {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
class Redirect {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (this.history && this.root && this.url) {
            return this.history.replace(getUrl(this.url, this.root));
        }
    }
    get el() { return __chunk_1.getElement(this); }
}
__chunk_4.ActiveRouter.injectProps(Redirect, [
    'history',
    'root'
]);

exports.stencil_router_redirect = Redirect;
