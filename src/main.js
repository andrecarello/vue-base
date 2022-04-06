window._ = require("lodash");
window.$toast = require("./helpers/toast/toast").default;

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import css
import "windi.css";
import "./helpers/toast/toast.css";

Vue.config.productionTip = false;

try {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
} catch (e) {
  // TODO: Fix this error and send to BE AUTH
  console.log("Deu erro no projeto", e);
}
