import { T, g as createBlock, w as withCtx, o as openBlock, a as createVNode, u as unref, Z, d as createBaseVNode, v as _sfc_main$1, m as createTextVNode, n as normalizeClass, k as withModifiers } from "./app-7d41a608.js";
import { G as GuestLayout } from "./GuestLayout-0899872c.js";
import { _ as _sfc_main$3 } from "./InputError-18f5e002.js";
import { _ as _sfc_main$4 } from "./PrimaryButton-abb9075e.js";
import { _ as _sfc_main$2 } from "./TextInput-df9dbe1d.js";
const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = { class: "flex items-center justify-end mt-4" };
const _sfc_main = {
  __name: "ResetPassword",
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = T({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GuestLayout, null, {
        default: withCtx(() => [
          createVNode(unref(Z), { title: "Reset Password" }),
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
            createBaseVNode("div", _hoisted_1, [
              createVNode(_sfc_main$1, {
                for: "password",
                value: "Password"
              }),
              createVNode(_sfc_main$2, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: unref(form).password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).password = $event),
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.password
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                for: "password_confirmation",
                value: "Confirm Password"
              }),
              createVNode(_sfc_main$2, {
                id: "password_confirmation",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: unref(form).password_confirmation,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).password_confirmation = $event),
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.password_confirmation
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_sfc_main$4, {
                class: normalizeClass({ "opacity-25": unref(form).processing }),
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Reset Password ")
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
