import { _ as _export_sfc, r as ref, q as onMounted, h as hooks, g as createBlock, w as withCtx, b as resolveComponent, o as openBlock, d as createBaseVNode, a as createVNode, c as createElementBlock, t as toDisplayString, e as createCommentVNode, f as axios } from "./app-7d41a608.js";
import { S as Swal } from "./sweetalert2.all-1839bad4.js";
const index_vue_vue_type_style_index_0_scoped_b047d326_lang = "";
const _hoisted_1 = { class: "attend-screen max-w-xl m-auto p-4 md:p-6 flex items-center justify-center flex-col gap-8 h-full" };
const _hoisted_2 = { class: "w-full flex flex-wrap justify-center items-center gap-8" };
const _hoisted_3 = { class: "w-full" };
const _hoisted_4 = { class: "text-2xl font-bold" };
const _hoisted_5 = {
  key: 0,
  class: "pi pi-spin pi-spinner text-2xl"
};
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { class: "w-full" };
const _hoisted_9 = { class: "text-2xl font-bold" };
const _hoisted_10 = {
  key: 0,
  class: "pi pi-spin pi-spinner text-2xl"
};
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { key: 0 };
const _sfc_main = {
  __name: "index",
  props: {
    data: Object
  },
  setup(__props) {
    const props = __props;
    const syukinloading = ref(false);
    const taikinloading = ref(false);
    const syukinTime = ref(null);
    const taikinTime = ref(null);
    onMounted(() => {
      if (props.data) {
        if (props.data.dp_syukin_time) {
          syukinTime.value = hooks(props.data.dp_syukin_time, "HH:mm:ss").format("HH時mm分");
        }
        if (props.data.dp_taikin_time) {
          taikinTime.value = hooks(props.data.dp_taikin_time, "HH:mm:ss").format("HH時mm分");
        }
      }
    });
    const handleStore = (type) => {
      const nowTime = hooks().format("HH時mm分");
      let attendNotify;
      if (type == "syukin") {
        syukinloading.value = true;
        attendNotify = `${nowTime}に出勤しました。`;
      } else if (type == "taikin") {
        taikinloading.value = true;
        attendNotify = `${nowTime}に退勤しました。`;
      }
      axios.post(route("employee.store"), { type }).then((res) => {
        if (res.data) {
          Swal.fire({
            toast: true,
            html: `<span class="text-white">${attendNotify}</span>`,
            showConfirmButton: false,
            timer: 3e3,
            position: "bottom-right",
            background: "#15803d"
          });
        }
      }).catch((error) => {
      }).finally(() => {
        syukinloading.value = false;
        taikinloading.value = false;
        setTimeout(() => {
          location.reload();
        }, 3e3);
      });
    };
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      const _component_EmployeeLayout = resolveComponent("EmployeeLayout");
      return openBlock(), createBlock(_component_EmployeeLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_Button, {
                class: "w-full h-32 text-center flex justify-center items-center grow",
                severity: "success",
                onClick: _cache[0] || (_cache[0] = ($event) => handleStore("syukin")),
                disabled: syukinloading.value || syukinTime.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("p", _hoisted_4, [
                      syukinloading.value ? (openBlock(), createElementBlock("i", _hoisted_5)) : (openBlock(), createElementBlock("span", _hoisted_6, "出勤"))
                    ]),
                    syukinTime.value ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(syukinTime.value) + "に出勤しました。", 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["disabled"]),
              createVNode(_component_Button, {
                class: "w-full h-32 text-center flex justify-center items-center grow",
                severity: "secondary",
                onClick: _cache[1] || (_cache[1] = ($event) => handleStore("taikin")),
                disabled: taikinloading.value || !syukinTime.value || taikinTime.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("p", _hoisted_9, [
                      taikinloading.value ? (openBlock(), createElementBlock("i", _hoisted_10)) : (openBlock(), createElementBlock("span", _hoisted_11, "退勤"))
                    ]),
                    taikinTime.value ? (openBlock(), createElementBlock("p", _hoisted_12, toDisplayString(taikinTime.value) + "に退勤しました。", 1)) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b047d326"]]);
export {
  index as default
};
