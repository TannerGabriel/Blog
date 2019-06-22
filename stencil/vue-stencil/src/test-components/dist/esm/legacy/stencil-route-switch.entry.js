var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { d as registerInstance, h as getContext, f as h, g as getElement } from './sample-component-a67c1bd3.js';
import { a as matchPath } from './chunk-252e4780.js';
import './chunk-7be683ab.js';
import { a as ActiveRouter } from './chunk-923524fa.js';
var getUniqueId = function () {
    return ((Math.random() * 10e16).toString().match(/.{4}/g) || []).join('-');
};
var getMatch = function (pathname, url, exact) {
    return matchPath(pathname, {
        path: url,
        exact: exact,
        strict: true
    });
};
var isHTMLStencilRouteElement = function (elm) {
    return elm.tagName === 'STENCIL-ROUTE';
};
var RouteSwitch = /** @class */ (function () {
    function RouteSwitch(hostRef) {
        registerInstance(this, hostRef);
        this.group = getUniqueId();
        this.subscribers = [];
        this.queue = getContext(this, "queue");
    }
    RouteSwitch.prototype.componentWillLoad = function () {
        if (this.location != null) {
            this.regenerateSubscribers(this.location);
        }
    };
    RouteSwitch.prototype.regenerateSubscribers = function (newLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var newActiveIndex, activeChild;
            var _this = this;
            return __generator(this, function (_a) {
                if (newLocation == null) {
                    return [2 /*return*/];
                }
                newActiveIndex = -1;
                this.subscribers = Array.prototype.slice.call(this.el.children)
                    .filter(isHTMLStencilRouteElement)
                    .map(function (childElement, index) {
                    var match = getMatch(newLocation.pathname, childElement.url, childElement.exact);
                    if (match && newActiveIndex === -1) {
                        newActiveIndex = index;
                    }
                    return {
                        el: childElement,
                        match: match
                    };
                });
                if (newActiveIndex === -1) {
                    return [2 /*return*/];
                }
                // Check if this actually changes which child is active
                // then just pass the new match down if the active route isn't changing.
                if (this.activeIndex === newActiveIndex) {
                    this.subscribers[newActiveIndex].el.match = this.subscribers[newActiveIndex].match;
                    return [2 /*return*/];
                }
                this.activeIndex = newActiveIndex;
                activeChild = this.subscribers[this.activeIndex];
                if (this.scrollTopOffset) {
                    activeChild.el.scrollTopOffset = this.scrollTopOffset;
                }
                activeChild.el.group = this.group;
                activeChild.el.match = activeChild.match;
                activeChild.el.componentUpdated = function (routeViewUpdatedOptions) {
                    // After the new active route has completed then update visibility of routes
                    _this.queue.write(function () {
                        _this.subscribers.forEach(function (child, index) {
                            child.el.componentUpdated = undefined;
                            if (index === _this.activeIndex) {
                                return child.el.style.display = '';
                            }
                            if (_this.scrollTopOffset) {
                                child.el.scrollTopOffset = _this.scrollTopOffset;
                            }
                            child.el.group = _this.group;
                            child.el.match = null;
                            child.el.style.display = 'none';
                        });
                    });
                    if (_this.routeViewsUpdated) {
                        _this.routeViewsUpdated(Object.assign({ scrollTopOffset: _this.scrollTopOffset }, routeViewUpdatedOptions));
                    }
                };
                return [2 /*return*/];
            });
        });
    };
    RouteSwitch.prototype.render = function () {
        return (h("slot", null));
    };
    Object.defineProperty(RouteSwitch.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteSwitch, "watchers", {
        get: function () {
            return {
                "location": ["regenerateSubscribers"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return RouteSwitch;
}());
ActiveRouter.injectProps(RouteSwitch, [
    'location',
    'routeViewsUpdated'
]);
export { RouteSwitch as stencil_route_switch };
