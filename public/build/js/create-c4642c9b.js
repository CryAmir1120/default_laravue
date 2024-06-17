import { _ as _export_sfc, T, r as ref, g as createBlock, w as withCtx, b as resolveComponent, i as resolveDirective, o as openBlock, d as createBaseVNode, a as createVNode, u as unref, e as createCommentVNode, c as createElementBlock, j as withDirectives, n as normalizeClass, k as withModifiers, f as axios, p as pushScopeId, l as popScopeId, m as createTextVNode } from "./app-7d41a608.js";
import { S as Swal } from "./sweetalert2.all-1839bad4.js";
const create_vue_vue_type_style_index_0_scoped_8e1b94d4_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-8e1b94d4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "content shadow-lg p-4 rounded-lg overflow-hidden" };
const _hoisted_2 = { class: "rows" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "名前", -1));
const _hoisted_4 = { class: "rows" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("従業員ID"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("（ログイン用）")
], -1));
const _hoisted_6 = { class: "flex items-center gap-2" };
const _hoisted_7 = {
  key: 1,
  class: "pi pi-check-circle text-green-600"
};
const _hoisted_8 = {
  key: 2,
  class: "pi pi-info-circle text-red-500"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("small", null, "従業員IDは重複できません。", -1));
const _hoisted_10 = { class: "rows" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "パスワードリセット", -1));
const _hoisted_12 = { class: "" };
const _hoisted_13 = { class: "flex items-center gap-2" };
const _hoisted_14 = { class: "mt-8 flex justify-center items-center text-center" };
const _sfc_main = {
  __name: "create",
  setup(__props) {
    const form = T({
      name: null,
      code: null,
      password: null
    });
    const loading = ref(false);
    const validCode = ref(null);
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
    const handleCodechecking = () => {
      loading.value = true;
      axios.post(route("admin.employees.code_checking"), { code: form.code }).then((res) => {
        var _a;
        if ((_a = res.data) == null ? void 0 : _a.success) {
          validCode.value = true;
        } else {
          validCode.value = false;
        }
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        loading.value = false;
      });
    };
    const submit = () => {
      form.post(route("admin.employees.store"), {
        onSuccess: () => {
          Swal.fire({
            toast: true,
            icon: "success",
            html: `<div class="text-white">登録成功！<br/>従業員コードとパスワードをその従業員に教えてください。</div>`,
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
      const _component_InputError = resolveComponent("InputError");
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
                createBaseVNode("div", null, [
                  createVNode(_component_InputText, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event)
                  }, null, 8, ["modelValue"]),
                  createVNode(_component_InputError, {
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ])
              ]),
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(_component_InputText, {
                      modelValue: unref(form).code,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).code = $event),
                      class: "p-inputtext-sm"
                    }, null, 8, ["modelValue"]),
                    unref(form).code ? (openBlock(), createBlock(_component_Button, {
                      key: 0,
                      label: "重複確認",
                      size: "small",
                      severity: "danger",
                      loading: loading.value,
                      disabled: loading.value,
                      onClick: handleCodechecking
                    }, null, 8, ["loading", "disabled"])) : createCommentVNode("", true),
                    validCode.value == true ? (openBlock(), createElementBlock("i", _hoisted_7)) : createCommentVNode("", true),
                    validCode.value == false ? (openBlock(), createElementBlock("i", _hoisted_8)) : createCommentVNode("", true)
                  ]),
                  _hoisted_9,
                  createVNode(_component_InputError, {
                    message: unref(form).errors.code
                  }, null, 8, ["message"])
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                _hoisted_11,
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_Button, {
                      label: "自動生成",
                      size: "small",
                      severity: "secondary",
                      onClick: generatePwd
                    }),
                    createVNode(_component_InputText, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).password = $event),
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
                  ]),
                  createVNode(_component_InputError, {
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(_component_Button, {
                type: "submit",
                label: "保存する",
                icon: "pi pi-save",
                disabled: unref(form).processing || !unref(form).name || !unref(form).code || !unref(form).password,
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
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e1b94d4"]]);
export {
  create as default
};
