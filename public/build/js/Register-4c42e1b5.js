import { T, g as createBlock, w as withCtx, b as resolveComponent, o as openBlock, a as createVNode, u as unref, Z, d as createBaseVNode, v as _sfc_main$1, z as script, A as script$1, m as createTextVNode, s as ie, n as normalizeClass, k as withModifiers } from "./app-7d41a608.js";
import { G as GuestLayout } from "./GuestLayout-0899872c.js";
import { _ as _sfc_main$2 } from "./InputError-18f5e002.js";
const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = { class: "mt-4" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = { class: "mt-4 text-center" };
const _hoisted_6 = { class: "mt-4" };
const _sfc_main = {
  __name: "Register",
  setup(__props) {
    const form = T({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _cache) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      return openBlock(), createBlock(GuestLayout, null, {
        default: withCtx(() => [
          createVNode(unref(Z), { title: "会員登録" }),
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_1, [
              createVNode(_sfc_main$1, {
                for: "name",
                value: "名前"
              }),
              createVNode(unref(script$1), { iconPosition: "left" }, {
                default: withCtx(() => [
                  createVNode(unref(script), { class: "pi pi-user" }),
                  createVNode(_component_InputText, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event),
                    required: "",
                    autofocus: "",
                    autocomplete: "name",
                    placeholder: "名前を入力してください。"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                class: "mt-2",
                message: unref(form).errors.name
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                for: "email",
                value: "メールアドレス"
              }),
              createVNode(unref(script$1), { iconPosition: "left" }, {
                default: withCtx(() => [
                  createVNode(unref(script), { class: "pi pi-at" }),
                  createVNode(_component_InputText, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).email = $event),
                    required: "",
                    autocomplete: "email",
                    placeholder: "メールアドレスを入力してください。"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                class: "mt-2",
                message: unref(form).errors.email
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_sfc_main$1, {
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
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).password = $event),
                    required: "",
                    autocomplete: "new-password",
                    placeholder: "パスワードは8文字以上"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                class: "mt-2",
                message: unref(form).errors.password
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_sfc_main$1, {
                for: "password_confirmation",
                value: "パスワード確認"
              }),
              createVNode(unref(script$1), { iconPosition: "left" }, {
                default: withCtx(() => [
                  createVNode(unref(script), { class: "pi pi-unlock" }),
                  createVNode(_component_InputText, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).password_confirmation = $event),
                    required: "",
                    autocomplete: "new-password",
                    placeholder: "確認のためにパスワードを再入力してください。"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                class: "mt-2",
                message: unref(form).errors.password_confirmation
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(ie), {
                href: _ctx.route("login"),
                class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              }, {
                default: withCtx(() => [
                  createTextVNode(" ログインはこちら ")
                ]),
                _: 1
              }, 8, ["href"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_Button, {
                type: "submit",
                class: normalizeClass(["w-full", { "opacity-25": unref(form).processing }]),
                icon: "pi pi-user-plus",
                label: "登録",
                disabled: unref(form).processing,
                loading: unref(form).processing
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
