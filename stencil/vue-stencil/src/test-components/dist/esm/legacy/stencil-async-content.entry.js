import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';
var AsyncContent = /** @class */ (function () {
    function AsyncContent(hostRef) {
        registerInstance(this, hostRef);
        this.content = '';
    }
    AsyncContent.prototype.componentWillLoad = function () {
        if (this.documentLocation != null) {
            return this.fetchNewContent(this.documentLocation);
        }
    };
    AsyncContent.prototype.fetchNewContent = function (newDocumentLocation) {
        var _this = this;
        return fetch(newDocumentLocation)
            .then(function (response) { return response.text(); })
            .then(function (data) {
            _this.content = data;
        });
    };
    AsyncContent.prototype.render = function () {
        return (h("div", { innerHTML: this.content }));
    };
    Object.defineProperty(AsyncContent, "watchers", {
        get: function () {
            return {
                "documentLocation": ["fetchNewContent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return AsyncContent;
}());
export { AsyncContent as stencil_async_content };
