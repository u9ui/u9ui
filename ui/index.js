import Vue from "vue";

import axios from "./utils/http"
import VueAxios from "./utils/vue-axios";
Vue.use(VueAxios, axios);

import moment from "moment";
import VueMomentJS from "./utils/vue-momentjs";
Vue.use(VueMomentJS, moment);

//import "highlight.js/styles/vs2015.css";
//import VueHighlight from "./utils/vue-highlight";
//Vue.use(VueHighlight);

import App from "./app.vue";

new Vue({
  el: "#vue",
  render: U => U(App)
})
