import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';
var MyParentComponent = /** @class */ (function () {
    function MyParentComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyParentComponent.prototype.render = function () {
        return (h("div", null, h("embedded-component", { text: "Hello Stencil" }), h("sample-component", { text: "Test" })));
    };
    return MyParentComponent;
}());
export { MyParentComponent as parent_component };
