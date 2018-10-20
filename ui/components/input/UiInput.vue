<style scoped>
</style>
<template>
  <div :class="{'ui-input mdui-textfield': true,
        'mdui-textfield-floating-label': floating,
        'mdui-textfield-invalid': false
      }">
    <i v-if="'username'==typex" class="mdui-icon material-icons">account_circle</i>
    <i v-else-if="'password'==typex" class="mdui-icon material-icons">lock</i>
    <i v-else-if="'email'==typex" class="mdui-icon material-icons">email</i>
    <i v-else-if="'message'==typex" class="mdui-icon material-icons">textsms</i>
    <label class="mdui-textfield-label" v-if="label">{{label}}</label>
    <input class="mdui-textfield-input" v-if="!isTextarea" :type="type"
          :name="name" :value="value" @input="onInput"
          :required="isRequired" :maxlength="maxlength"
          :placeholder="placeholder" :disabled="isDisabled">
    <textarea class="mdui-textfield-input" v-if="isTextarea" :rows="rows"
          :name="name" :value="value" @input="onInput"
          :required="isRequired" :maxlength="maxlength"
          :placeholder="placeholder" :disabled="isDisabled"/>
  </div>
</template>
<script>
import UiBase from "../_/UiBase";
import Type from "../../utils/type.js";
export default {
  extends: UiBase,
  props: {
    label: String,
    name: String,
    value: {
      default: null,
      required: true
    },
    type: {
      type: String,
      default: "text"
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
    placeholder: String
  },
  data() {
    return {};
  },
  methods: {
    onInput: function(e) {
      this.$emit("input", e.target.value);
    }
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
      }
      return this.$type.toBool(this.float);
    },
    typex: function() {
      return this.type.toLowerCase();
    },
    isTextarea: function() {
      if ("textarea" == this.typex || "message" == this.typex) {
        return true;
      }
      return false;
    }
  },
  watch: {},
  components: {}
};
</script>