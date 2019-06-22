import { d as registerInstance, g as getElement } from './sample-component-a67c1bd3.js';
import { a as ActiveRouter } from './chunk-923524fa.js';
// Get the URL for this route link without the root from the router
var getUrl = function (url, root) {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
var Redirect = /** @class */ (function () {
    function Redirect(hostRef) {
        registerInstance(this, hostRef);
    }
    Redirect.prototype.componentWillLoad = function () {
        if (this.history && this.root && this.url) {
            return this.history.replace(getUrl(this.url, this.root));
        }
    };
    Object.defineProperty(Redirect.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Redirect;
}());
ActiveRouter.injectProps(Redirect, [
    'history',
    'root'
]);
export { Redirect as stencil_router_redirect };
