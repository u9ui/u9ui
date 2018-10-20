<style>
@import url("mdui/dist/css/mdui.css");
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.content {
  height: 100%;
  margin-top: 66px;
  margin-bottom: 66px;
}
.header {
  top: 0;
  width: 100%;
  height: 66px;
  z-index: 999;
  position: fixed;
  color: red;
  text-align: center;
  background-color: #212121;
}
.footer {
  bottom: 0;
  width: 100%;
  height: 25px;
  z-index: 999;
  position: fixed;
  color: red;
  text-align: center;
  background-color: black;
}
</style>
<template>
  <div class="container">
    <div class="container">
      <div class="header">
          (C) vipx 2018
      </div>
      <div class="content">
        <button @click="clickIt">点击</button>
      </div>
      <div class="footer">
          (C) vipx 2018
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickIt: function(e) {
      this.$mdui.alert("abc");
    }
  },
  computed: {},
  watch: {},
  components: {}
};
</script>