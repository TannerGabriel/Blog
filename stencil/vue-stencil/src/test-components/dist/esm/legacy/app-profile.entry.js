import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';
var AppProfile = /** @class */ (function () {
    function AppProfile(hostRef) {
        registerInstance(this, hostRef);
    }
    AppProfile.prototype.normalize = function (name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    };
    AppProfile.prototype.render = function () {
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-profile" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
        }
    };
    Object.defineProperty(AppProfile, "style", {
        get: function () { return ".app-profile{padding:10px}"; },
        enumerable: true,
        configurable: true
    });
    return AppProfile;
}());
export { AppProfile as app_profile };
