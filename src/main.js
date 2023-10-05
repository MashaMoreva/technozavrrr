import Vue from "vue";
import App from "./App.vue";
import { message1, message2 } from "./constants.js";
import { showAlert } from "./utils.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

showAlert(message1);
showAlert(message2);
