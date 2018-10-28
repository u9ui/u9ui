<style scoped>
</style>
<template>
  <div class="ui-input" ref="i-input">
    <div v-if="isButton" class="mdui-ripple">
      <input
        class="mdui-btn mdui-btn-raised mdui-btn-block"
        v-on="listeners"
        v-bind="$attrs"
        v-bind:name="name"
        v-bind:value="value"
      >
    </div>
    <div
      v-else
      v-bind:class="{'mdui-textfield': true,
        'mdui-textfield-floating-label': floating,
        'mdui-textfield-invalid': false
      }"
    >
      <i v-if="'username'==typex" class="mdui-icon material-icons">account_circle</i>
      <i v-else-if="'password'==typex" class="mdui-icon material-icons">lock</i>
      <i v-else-if="'email'==typex" class="mdui-icon material-icons">email</i>
      <i v-else-if="'message'==typex" class="mdui-icon material-icons">textsms</i>
      <i v-else-if="icon" class="mdui-icon material-icons">{{icon}}</i>
      <label v-show="!isButton" v-if="label" class="mdui-textfield-label">{{label}}</label>
      <textarea
        v-if="isTextarea"
        class="mdui-textfield-input"
        v-on="listeners"
        v-bind="$attrs"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:required="isRequired"
        v-bind:maxlength="maxlength"
        v-bind:rows="rows"
        v-bind:placeholder="placeholder"
        v-bind:disabled="isDisabled"
      ></textarea>
      <input
        v-else
        class="mdui-textfield-input"
        v-on="listeners"
        v-bind="$attrs"
        v-bind:type="type"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:required="isRequired"
        v-bind:maxlength="maxlength"
        v-bind:placeholder="placeholder"
        v-bind:disabled="isDisabled"
      >
      <div v-if="errorMsg" class="mdui-textfield-error">{{errorMsg}}</div>
      <div v-if="helperMsg" class="mdui-textfield-helper">{{helperMsg}}</div>
    </div>
  </div>
</template>
<script>
import UiBase from "../_/UiBase";
import Type from "../../utils/type.js";
export default {
  extends: UiBase,
  mixins: [],
  name: "ui-input",
  components: {},
  props: {
    label: String,
    name: String,
    value: {
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    icon: String,
    maxlength: {
      type: [Number, String],
      validator(v) {
        if (v) {
          return v > 0;
        }
        return true;
      }
    },
    rows: {
      type: [Number, String],
      default: 1,
      validator(v) {
        if (v) {
          return v > 0;
        }
        return true;
      }
    },
    required: {
      type: [Boolean, String],
      default: false,
      validator(v) {
        return Type.isBoolStr(v);
      }
    },
    disabled: {
      type: [Boolean, String],
      default: false,
      validator(v) {
        return Type.isBoolStr(v);
      }
    },
    float: {
      type: [Boolean, String],
      default: true,
      validator(v) {
        return Type.isBoolStr(v);
      }
    },
    placeholder: String,
    helperMsg: String,
    errorMsg: String
  },
  computed: {
    listeners: function() {
      let vm = this;
      return {
        ...vm.$listeners, //从父级添加所有的监听器
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      };
    },
    isRequired: function() {
      return this.$type.toBool(this.required);
    },
    isDisabled: function() {
      return this.$type.toBool(this.disabled);
    },
    floating: function() {
      if (this.value) {
        return false;
      } else if (this.placeholder) {
        return false;
      }
      return this.$type.toBool(this.float);
    },
    typex: function() {
      if (this.type) {
        return this.type.toLowerCase();
      }
    },
    isTextarea: function() {
      let tArr = ["textarea", "message"];
      if (tArr.indexOf(this.typex) != -1) {
        return true;
      }
      return false;
    },
    isButton: function() {
      let tArr = ["button", "submit", "reset"];
      if (tArr.indexOf(this.typex) != -1) {
        return true;
      }
      return false;
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      if (newValue && this.maxlength) {
        let nv = new String(newValue);
        if (nv.length > this.maxlength) {
          this.$emit("input", oldValue);
        }
      }
    }
  },
  updated: function() {
    this.$mdui.updateTextFields(this.$refs["i-input"]);
  }
};
</script>