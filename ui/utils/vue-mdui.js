/** Install plugin mdui js */
function plugin(Vue, mdui, options = {}) {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;
  if (!mdui) {
    console.error("Please install mdui");
    return;
  }
  Vue.mdui = mdui;
  Object.defineProperties(Vue.prototype, {
    $mdui: {
      get: function get() {
        return mdui;
      }
    }
  });
}

export default plugin;
