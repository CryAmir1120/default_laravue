import { T, g as createBlock, w as withCtx, o as openBlock, a as createVNode, u as unref, Z, c as createElementBlock, t as toDisplayString, e as createCommentVNode, d as createBaseVNode, v as _sfc_main$1, m as createTextVNode, n as normalizeClass, k as withModifiers } from "./app-7d41a608.js";
import { G as GuestLayout } from "./GuestLayout-0899872c.js";
import { _ as _sfc_main$3 } from "./InputError-18f5e002.js";
import { _ as _sfc_main$4 } from "./PrimaryButton-abb9075e.js";
import { _ as _sfc_main$2 } from "./TextInput-df9dbe1d.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ", -1);
const _hoisted_2 = {
  key: 0,
  class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
};
const _hoisted_3 = { class: "flex items-center justify-end mt-4" };
const _sfc_main = {
  __name: "ForgotPassword",
  props: {
    status: String
  },
  setup(__props) {
    const form = T({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GuestLayout, null, {
        default: withCtx(() => [
          createVNode(unref(Z), { title: "Forgot Password" }),
          _hoisted_1,
          __props.status ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", null, [
              createVNode(_sfc_main$1, {
                for: "email",
                value: "Email"
              }),
              createVNode(_sfc_main$2, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: unref(form).email,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).email = $event),
                required: "",
                autofocus: "",
                autocomplete: "username"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.email
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_sfc_main$4, {
                class: normalizeClass({ "opacity-25": unref(form).processing }),
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Email Password Reset Link ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
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
