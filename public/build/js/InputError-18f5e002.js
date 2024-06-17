import { j as withDirectives, B as vShow, o as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString } from "./app-7d41a608.js";
const _hoisted_1 = { class: "text-sm text-red-600 dark:text-red-400" };
const _sfc_main = {
  __name: "InputError",
  props: ["message"],
  setup(__props) {
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1, toDisplayString(__props.message), 1)
      ], 512)), [
        [vShow, __props.message]
      ]);
    };
  }
};
export {
  _sfc_main as _
};
