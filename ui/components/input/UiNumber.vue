<style>
</style>
<script>
import UiInput from "./UiInput";
import Type from "../../utils/type.js";
import { throws } from "assert";
export default {
  extends: UiInput,
  mixins: [],
  name: "ui-number",
  components: {},
  props: {
    value: {
      type: [Number, String],
      default: 0,
      required: true,
      validator(v) {
        return Type.isNumberStr(v);
      }
    },
    type: {
      type: String,
      default: "number",
      validator(v) {
        return v && "number" == v.toLowerCase();
      }
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      if (newValue) {
        if (!this.$type.isNumberStr(newValue)) {
          this.$emit("input", oldValue);
        }
      }
    }
  }
};
</script>
