import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements } from './test-components/dist/loader'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
