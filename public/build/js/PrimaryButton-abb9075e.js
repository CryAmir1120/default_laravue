import { o as openBlock, c as createElementBlock, C as renderSlot } from "./app-7d41a608.js";
const _hoisted_1 = ["type"];
const _sfc_main = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1);
    };
  }
};
export {
  _sfc_main as _
};
