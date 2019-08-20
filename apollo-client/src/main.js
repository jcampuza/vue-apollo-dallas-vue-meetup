import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import router from "./router";
import { SpinnerLoader } from "@/components/SpinnerLoader";

Vue.component("spinner-loader", SpinnerLoader);

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount("#app");
