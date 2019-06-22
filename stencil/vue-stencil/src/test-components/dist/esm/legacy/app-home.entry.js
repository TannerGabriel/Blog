import { d as registerInstance, f as h } from './sample-component-a67c1bd3.js';
var AppHome = /** @class */ (function () {
    function AppHome(hostRef) {
        registerInstance(this, hostRef);
    }
    AppHome.prototype.render = function () {
        return (h("div", { class: 'app-home' }, h("p", null, "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ", h("a", { href: 'https://stenciljs.com' }, "stenciljs.com"), " to get started."), h("stencil-route-link", { url: '/profile/stencil' }, h("button", null, "Profile page"))));
    };
    Object.defineProperty(AppHome, "style", {
        get: function () { return ".app-home{padding:10px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}"; },
        enumerable: true,
        configurable: true
    });
    return AppHome;
}());
export { AppHome as app_home };
