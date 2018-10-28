<style>
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
  <div class="context">
    <div class="container">
      <div class="header"></div>
      <div class="content">
        <button @click="clickIt">点击</button>
        <ui-input
          name="username"
          v-model="value"
          label="用户名"
          type="username"
          required="true"
          maxlength="100"
        ></ui-input>
        <ui-input
          name="password"
          v-model="password"
          label="密码"
          type="password"
          placeholder=""
          maxlength="5"
        ></ui-input>
        <ui-input v-model="password" icon="adb" label="kaka" placeholder="abccccc"></ui-input>
        <ui-input v-model="value" icon="adb" label="Message" type="Message" maxlength="50"></ui-input>
        <ui-input v-model="value" type="number" maxlength="50"></ui-input>
        <ui-number v-model="value" hhh="ddddddddd" @blur="changed"></ui-number>
      </div>
      <div class="footer">(C) vipx 2018</div>
    </div>
  </div>
</template>
<script>
import UiInput from "./components/input/UiInput";
import UiNumber from "./components/input/UiNumber";
export default {
  data() {
    return {
      value: "",
      password: ""
    };
  },
  methods: {
    clickIt: function(event) {
      console.log(this);
      this.$mdui.alert(JSON.stringify(event), "abc");
    },
    changed: function(event) {
      console.log(this);
      console.log(JSON.stringify(event));
    }
  },
  computed: {},
  watch: {},
  components: { UiInput, UiNumber }
};
</script>