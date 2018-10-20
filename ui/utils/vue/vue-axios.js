/** Install plugin axios */
function plugin(Vue, axios, options = {}) {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;
  if (!axios) {
    console.error("Please install axios");
    return;
  }
  Vue.axios = axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get: function get() {
        return axios;
      }
    },
    $http: {
      get: function get() {
        return axios;
      }
    }
  });
}

export default plugin;
