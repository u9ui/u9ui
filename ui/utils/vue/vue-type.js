/** Install plugin mdui js */
function plugin(Vue, type, options = {}) {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;
  if (!type) {
    console.error("Please install type");
    return;
  }
  Vue.type = type;
  Object.defineProperties(Vue.prototype, {
    $type: {
      get: function get() {
        return type;
      }
    }
  });
}

export default plugin;
