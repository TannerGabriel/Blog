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
import { d as registerInstance, e as createEvent, f as h, g as getElement } from './sample-component-a67c1bd3.js';
var SampleComponent = /** @class */ (function () {
    function SampleComponent(hostRef) {
        registerInstance(this, hostRef);
        this.text = 'World';
        this.name = 'Name';
        this.state = false;
        this.isActive = false;
        this.internalState = true;
        this.active = createEvent(this, "active", 7);
    }
    SampleComponent.prototype.updateStatement = function () {
        this.isActive = !this.isActive;
    };
    SampleComponent.prototype.activeStateHandler = function (event) {
        console.log('Received the custom active event: ', event.detail);
    };
    SampleComponent.prototype.handleClick = function () {
        console.log('click');
    };
    SampleComponent.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Get the state of the item
                this.state = true;
                return [2 /*return*/, true];
            });
        });
    };
    SampleComponent.prototype.getTheState = function () {
        return this.isActive;
    };
    SampleComponent.prototype.showMessage = function () {
        this.messageDiv.style.display = 'block';
    };
    ;
    SampleComponent.prototype.componentDidLoad = function () {
        console.log('Component successfully loaded');
        // Do something
    };
    SampleComponent.prototype.render = function () {
        return (h("div", null, h("h1", null, "Hello ", this.text)));
    };
    Object.defineProperty(SampleComponent.prototype, "messageDiv", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SampleComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return SampleComponent;
}());
export { SampleComponent as sample_component };
