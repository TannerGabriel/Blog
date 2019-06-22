import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';
var EmbeddedComponent = /** @class */ (function () {
    function EmbeddedComponent(hostRef) {
        registerInstance(this, hostRef);
        this.text = 'Hello World';
    }
    EmbeddedComponent.prototype.render = function () {
        return (h("div", null, this.text));
    };
    return EmbeddedComponent;
}());
export { EmbeddedComponent as embedded_component };
