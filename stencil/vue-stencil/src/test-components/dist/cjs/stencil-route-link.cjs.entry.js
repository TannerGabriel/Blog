'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./sample-component-54bc43f1.js');
const __chunk_2 = require('./chunk-ea781b0f.js');
require('./chunk-7994e8a0.js');
const __chunk_4 = require('./chunk-e9793ea1.js');
const __chunk_5 = require('./chunk-9837eb0d.js');

const getUrl = (url, root) => {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
/**
  * @name Route
  * @module ionic
  * @description
 */
class RouteLink {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.unsubscribe = () => { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        this.strict = true;
        /**
          *  Custom tag to use instead of an anchor
          */
        this.custom = 'a';
        this.match = null;
    }
    componentWillLoad() {
        this.computeMatch();
    }
    // Identify if the current route is a match.
    computeMatch() {
        if (this.location) {
            this.match = __chunk_2.matchPath(this.location.pathname, {
                path: this.urlMatch || this.url,
                exact: this.exact,
                strict: this.strict
            });
        }
    }
    handleClick(e) {
        if (__chunk_5.isModifiedEvent(e) || !this.history || !this.url || !this.root) {
            return;
        }
        e.preventDefault();
        return this.history.push(getUrl(this.url, this.root));
    }
    // Get the URL for this route link without the root from the router
    render() {
        let anchorAttributes = {
            class: {
                [this.activeClass]: this.match !== null,
            },
            onClick: this.handleClick.bind(this)
        };
        if (this.anchorClass) {
            anchorAttributes.class[this.anchorClass] = true;
        }
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex, 'aria-haspopup': this.ariaHaspopup, id: this.anchorId, 'aria-posinset': this.ariaPosinset, 'aria-setsize': this.ariaSetsize, 'aria-label': this.ariaLabel });
        }
        return (__chunk_1.h(this.custom, Object.assign({}, anchorAttributes), __chunk_1.h("slot", null)));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "location": ["computeMatch"]
    }; }
}
__chunk_4.ActiveRouter.injectProps(RouteLink, [
    'history',
    'location',
    'root'
]);

exports.stencil_route_link = RouteLink;
