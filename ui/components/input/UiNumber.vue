<style>
</style>
<script>
import UiInput from "./UiInput";
import Type from "../../utils/type.js";
export default {
  extends: UiInput,
  mixins: [],
  name: "ui-number",
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
  }
};
</script>
