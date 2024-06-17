import { r as ref, q as onMounted, o as openBlock, c as createElementBlock } from "./app-7d41a608.js";
const _hoisted_1 = ["value"];
const _sfc_main = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",
        value: __props.modelValue,
        onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value)),
        ref_key: "input",
        ref: input
      }, null, 40, _hoisted_1);
    };
  }
};
export {
  _sfc_main as _
};
