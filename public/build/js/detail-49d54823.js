import { _ as _export_sfc, T, h as hooks, g as createBlock, w as withCtx, b as resolveComponent, i as resolveDirective, o as openBlock, d as createBaseVNode, t as toDisplayString, u as unref, a as createVNode, j as withDirectives, c as createElementBlock, e as createCommentVNode, n as normalizeClass, k as withModifiers, p as pushScopeId, l as popScopeId } from "./app-7d41a608.js";
import { S as Swal } from "./sweetalert2.all-1839bad4.js";
const detail_vue_vue_type_style_index_0_scoped_6a91931f_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6a91931f"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "content shadow-lg p-4 rounded-lg overflow-hidden" };
const _hoisted_2 = { class: "rows" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("label", null, "ユーザーID")
], -1));
const _hoisted_4 = { class: "rows" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("label", null, "登録日")
], -1));
const _hoisted_6 = { class: "rows" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "名前", -1));
const _hoisted_8 = { class: "rows" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "従業員ID", -1));
const _hoisted_10 = { class: "rows" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "状態", -1));
const _hoisted_12 = { class: "rows" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "パスワードリセット", -1));
const _hoisted_14 = { class: "flex items-center flex-wrap gap-2" };
const _hoisted_15 = { class: "mt-8 text-center" };
const _sfc_main = {
  __name: "detail",
  props: {
    info: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    const props = __props;
    const form = T({
      id: (_a = props.info) == null ? void 0 : _a.id,
      name: (_b = props.info) == null ? void 0 : _b.name,
      code: (_c = props.info) == null ? void 0 : _c.code,
      password: null,
      status: ((_d = props.info) == null ? void 0 : _d.status) == 1 ? true : false,
      created_at: ((_e = props.info) == null ? void 0 : _e.created_at) ? hooks((_f = props.info) == null ? void 0 : _f.created_at).format("yyyy.MM.DD") : null
    });
    const generatePwd = () => {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
      let password = "";
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      form.password = password;
    };
    const handleCopy = async () => {
      await navigator.clipboard.writeText(form.password);
    };
    const submit = () => {
      form.post(route("admin.employees.update"), {
        onSuccess: () => {
          Swal.fire({
            toast: true,
            icon: "success",
            html: `<div class="text-white">変更成功！<br/>従業員コードとパスワードをその従業員に教えてください。</div>`,
            showConfirmButton: false,
            position: "bottom-right",
            timer: 3e3,
            background: "#059669"
          });
        },
        onError: () => {
          Swal.fire({
            toast: true,
            icon: "error",
            html: `<div class="text-white">登録失敗！<br />もう一度お試しください。</div>`,
            showConfirmButton: false,
            position: "bottom-right",
            timer: 2e3,
            background: "#71717a"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_Button = resolveComponent("Button");
      const _component_AdminLayout = resolveComponent("AdminLayout");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_component_AdminLayout, null, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"]),
            class: "detail-page p-4 md:p-6 overflow-auto"
          }, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                _hoisted_3,
                createBaseVNode("div", null, toDisplayString(unref(form).id), 1)
              ]),
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("div", null, toDisplayString(unref(form).created_at), 1)
              ]),
              createBaseVNode("div", _hoisted_6, [
                _hoisted_7,
                createBaseVNode("div", null, [
                  createVNode(_component_InputText, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                _hoisted_9,
                createBaseVNode("div", null, [
                  createVNode(_component_InputText, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).code = $event)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                _hoisted_11,
                createBaseVNode("div", null, [
                  createVNode(_component_Checkbox, {
                    modelValue: unref(form).status,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).status = $event),
                    binary: ""
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                _hoisted_13,
                createBaseVNode("div", _hoisted_14, [
                  createVNode(_component_Button, {
                    label: "リセットする",
                    size: "small",
                    severity: "secondary",
                    onClick: generatePwd
                  }),
                  createVNode(_component_InputText, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).password = $event),
                    class: "p-inputtext-sm"
                  }, null, 8, ["modelValue"]),
                  unref(form).password ? withDirectives((openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "pi pi-copy cursor-pointer hover:text-sky-500 active:text-rose-500",
                    onClick: handleCopy
                  }, null, 512)), [
                    [
                      _directive_tooltip,
                      "Copy",
                      void 0,
                      { top: true }
                    ]
                  ]) : createCommentVNode("", true)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createVNode(_component_Button, {
                type: "submit",
                label: "保存する",
                icon: "pi pi-save",
                disabled: unref(form).processing,
                loading: unref(form).processing,
                severity: "success",
                class: normalizeClass({ "opacity-50": unref(form).processing })
              }, null, 8, ["disabled", "loading", "class"])
            ])
          ], 32)
        ]),
        _: 1
      });
    };
  }
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a91931f"]]);
export {
  detail as default
};
