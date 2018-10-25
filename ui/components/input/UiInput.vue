<style scoped>
</style>
<template>
  <div
    :class="{'ui-input mdui-textfield': true,
        'mdui-textfield-floating-label': floating,
        'mdui-textfield-invalid': false
      }"
    ref="i-input"
  >
    <i v-if="'username'==typex" class="mdui-icon material-icons">account_circle</i>
    <i v-else-if="'password'==typex" class="mdui-icon material-icons">lock</i>
    <i v-else-if="'email'==typex" class="mdui-icon material-icons">email</i>
    <i v-else-if="'message'==typex" class="mdui-icon material-icons">textsms</i>
    <i v-else-if="icon" class="mdui-icon material-icons">{{icon}}</i>
    <label v-if="label" class="mdui-textfield-label">{{label}}</label>
    <textarea
      v-if="isTextarea"
      class="mdui-textfield-input"
      :name="name"
      :value="value"
      @input="onInput"
      :required="isRequired"
      :maxlength="maxlength"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="isDisabled"
    ></textarea>
    <input
      v-else
      class="mdui-textfield-input"
      :type="type"
      :name="name"
      :value="value"
      @input="onInput"
      :required="isRequired"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="isDisabled"
    >
    <div v-if="errorMsg" class="mdui-textfield-error">{{errorMsg}}</div>
    <div v-if="helperMsg" class="mdui-textfield-helper">{{helperMsg}}</div>
  </div>
</template>
<script>
import UiBase from "../_/UiBase";
import Type from "../../utils/type.js";
export default {
  extends: UiBase,
  name: "ui-input",
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
    icon: {
      type: String
    },
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
  data() {
    return {};
  },
  methods: {
    onInput: function(event) {
      this.$emit("input", event.target.value);
    },
    onBlur: function(event) {}
  },
  computed: {
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
      if ("textarea" == this.typex || "message" == this.typex) {
        return true;
      }
      return false;
    }
  },
  watch: {
    value: function(newValue, oldValue) {}
  },
  components: {},
  updated: function() {
    this.$mdui.updateTextFields(this.$refs["i-input"]);
  }
};
</script>