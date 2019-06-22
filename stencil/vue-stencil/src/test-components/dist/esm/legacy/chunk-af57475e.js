var getConfirmation = function (win, message, callback) { return (callback(win.confirm(message))); };
var isModifiedEvent = function (ev) { return (ev.metaKey || ev.altKey || ev.ctrlKey || ev.shiftKey); };
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function (win) {
    var ua = win.navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
        ua.indexOf('Mobile Safari') !== -1 &&
        ua.indexOf('Chrome') === -1 &&
        ua.indexOf('Windows Phone') === -1) {
        return false;
    }
    return win.history && 'pushState' in win.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function (nav) { return (nav.userAgent.indexOf('Trident') === -1); };
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function (nav) { return (nav.userAgent.indexOf('Firefox') === -1); };
var isExtraneousPopstateEvent = function (nav, event) { return (event.state === undefined &&
    nav.userAgent.indexOf('CriOS') === -1); };
var storageAvailable = function (win, type) {
    var storage = win[type];
    var x = '__storage_test__';
    try {
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
};
export { storageAvailable as a, supportsHistory as b, supportsPopStateOnHashChange as c, getConfirmation as d, isExtraneousPopstateEvent as e, supportsGoWithoutReloadUsingHash as f, isModifiedEvent as g };
