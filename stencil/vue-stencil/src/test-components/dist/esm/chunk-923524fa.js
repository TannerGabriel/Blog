import { f as h } from './sample-component-a67c1bd3.js';

const createProviderConsumer = (defaultState, consumerRender) => {
    let listeners = new Map();
    let currentState = defaultState;
    const updateListener = (fields, instance) => {
        if (Array.isArray(fields)) {
            [...fields].forEach(fieldName => {
                instance[fieldName] = currentState[fieldName];
            });
        }
        else {
            instance[fields] = Object.assign({}, currentState);
        }
    };
    const subscribe = (instance, propList) => {
        if (!listeners.has(instance)) {
            listeners.set(instance, propList);
            updateListener(propList, instance);
        }
    };
    const Provider = ({ state }, children) => {
        currentState = state;
        listeners.forEach(updateListener);
        return children;
    };
    const Consumer = (props, children) => {
        // The casting on subscribe is to allow for crossover through the stencil compiler
        // In the future we should allow for generics in components.
        return consumerRender(subscribe, children[0]);
    };
    const injectProps = (Cstr, fieldList) => {
        const CstrPrototype = Cstr.prototype;
        const cstrComponentWillLoad = CstrPrototype.componentWillLoad;
        const cstrComponentDidUnload = CstrPrototype.componentDidUnload;
        CstrPrototype.componentWillLoad = function () {
            subscribe(this, fieldList);
            if (cstrComponentWillLoad) {
                return cstrComponentWillLoad.call(this);
            }
        };
        CstrPrototype.componentDidUnload = function () {
            listeners.delete(this);
            if (cstrComponentDidUnload) {
                cstrComponentDidUnload.call(this);
            }
        };
    };
    return {
        Provider,
        Consumer,
        injectProps
    };
};

const ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: () => { }
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

export { ActiveRouter as a };
