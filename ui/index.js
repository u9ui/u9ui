import Vue from "vue";

//import "mdui/dist/css/mdui.css"
// import mdui from "mdui"
// import VueMdui from "./utils/vue/vue-mdui"
// Vue.use(VueMdui, mdui);

// import axios from "./utils/http"
// import VueAxios from "./utils/vue/vue-axios";
// Vue.use(VueAxios, axios);

// import moment from "moment";
// import VueMomentJS from "./utils/vue/vue-momentjs";
// Vue.use(VueMomentJS, moment);

//import "highlight.js/styles/vs2015.css";
//import VueHighlight from "./utils/vue/vue-highlight";
//Vue.use(VueHighlight);

import App from "./app.vue";

new Vue({
  el: "#vue",
  render: U => U(App)
})