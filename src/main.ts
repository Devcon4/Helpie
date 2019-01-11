import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "./bootstrapHoudini";
import './registerServiceWorker'
import BootstrapLifecycle from './bootstrapLifecycle';

bootstrap();

const lifecycleMiddleware = new BootstrapLifecycle();

lifecycleMiddleware.setData({
  form: {}
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
