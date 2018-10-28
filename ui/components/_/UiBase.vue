<style>
@import url("mdui/dist/css/mdui.css");
</style>
<script>
import Vue from "vue";
// for type: type.js
import type from "../../utils/type.js";
import VueType from "../../utils/vue/vue-type.js";
Vue.use(VueType, type);
// for ui: mdui.js
import mdui from "mdui";
import VueMdui from "../../utils/vue/vue-mdui.js";
Vue.use(VueMdui, mdui);
// for time: momentjs
import moment from "moment";
import VueMomentJS from "../../utils/vue/vue-momentjs";
Vue.use(VueMomentJS, moment);
export default {
  extends: {},
  mixins: [],
  name: "ui-base",
  components: {},
  inheritAttrs: false,
  methods: {},
  directives: {},
  mounted: function() {
    this.$mdui.mutation();
  }
};
</script>
