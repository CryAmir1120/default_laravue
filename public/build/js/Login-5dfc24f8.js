import { x as computed, j as withDirectives, y as vModelCheckbox, o as openBlock, c as createElementBlock, T, g as createBlock, w as withCtx, b as resolveComponent, a as createVNode, u as unref, Z, t as toDisplayString, e as createCommentVNode, d as createBaseVNode, v as _sfc_main$2, z as script, A as script$1, n as normalizeClass, k as withModifiers } from "./app-7d41a608.js";
import { G as GuestLayout } from "./GuestLayout-0899872c.js";
import { _ as _sfc_main$3 } from "./InputError-18f5e002.js";
const _hoisted_1$1 = ["value"];
const _sfc_main$1 = {
  __name: "Checkbox",
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("input", {
        type: "checkbox",
        value: __props.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => proxyChecked.value = $event),
        class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
      }, null, 8, _hoisted_1$1)), [
        [vModelCheckbox, proxyChecked.value]
      ]);
    };
  }
};
const _hoisted_1 = {
  key: 0,
  class: "mb-4 font-medium text-sm text-green-600"
};
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = { class: "mt-4" };
const _hoisted_4 = { class: "block mt-4" };
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, "ログイン状態を保存する", -1);
const _hoisted_7 = { class: "mt-4" };
const _sfc_main = {
  __name: "Login",
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = T({
      email: "",
      code: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _cache) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      return openBlock(), createBlock(GuestLayout, null, {
        default: withCtx(() => [
          createVNode(unref(Z), { title: "ログイン" }),
          __props.status ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$2, {
                for: "code",
                value: "従業員ID"
              }),
              createVNode(unref(script$1), {
                iconPosition: "left",
                class: "mt-1"
              }, {
                default: withCtx(() => [
                  createVNode(unref(script), { class: "pi pi-user" }),
                  createVNode(_component_InputText, {
                    id: "code",
                    type: "code",
                    class: "w-full",
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).code = $event),
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.email
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_sfc_main$2, {
                for: "password",
                value: "パスワード"
              }),
              createVNode(unref(script$1), { iconPosition: "left" }, {
                default: withCtx(() => [
                  createVNode(unref(script), { class: "pi pi-lock" }),
                  createVNode(_component_InputText, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).password = $event),
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.password
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("label", _hoisted_5, [
                createVNode(_sfc_main$1, {
                  name: "remember",
                  checked: unref(form).remember,
                  "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(form).remember = $event)
                }, null, 8, ["checked"]),
                _hoisted_6
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_Button, {
                type: "submit",
                class: normalizeClass(["w-full", { "opacity-25": unref(form).processing }]),
                icon: "pi pi-sign-in",
                disabled: unref(form).processing,
                loading: unref(form).processing,
                label: "ログイン"
              }, null, 8, ["class", "disabled", "loading"])
            ])
          ], 32)
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
