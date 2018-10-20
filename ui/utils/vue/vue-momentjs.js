/** Install plugin momentjs */
function plugin(Vue, moment, options = {}) {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;
  if (!moment) {
    console.error("Please install Moment.js");
    return;
  }
  Vue.moment = moment;
  Object.defineProperties(Vue.prototype, {
    $moment: {
      get: function get() {
        return moment;
      }
    }
  });
}

export default plugin;
