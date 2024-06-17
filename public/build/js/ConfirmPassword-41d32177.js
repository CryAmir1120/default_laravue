import { T, g as createBlock, w as withCtx, o as openBlock, a as createVNode, u as unref, Z, d as createBaseVNode, v as _sfc_main$1, m as createTextVNode, n as normalizeClass, k as withModifiers } from "./app-7d41a608.js";
import { G as GuestLayout } from "./GuestLayout-0899872c.js";
import { _ as _sfc_main$3 } from "./InputError-18f5e002.js";
import { _ as _sfc_main$4 } from "./PrimaryButton-abb9075e.js";
import { _ as _sfc_main$2 } from "./TextInput-df9dbe1d.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " This is a secure area of the application. Please confirm your password before continuing. ", -1);
const _hoisted_2 = { class: "flex justify-end mt-4" };
const _sfc_main = {
  __name: "ConfirmPassword",
  setup(__props) {
    const form = T({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GuestLayout, null, {
        default: withCtx(() => [
          createVNode(unref(Z), { title: "Confirm Password" }),
          _hoisted_1,
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", null, [
              createVNode(_sfc_main$1, {
                for: "password",
                value: "Password"
              }),
              createVNode(_sfc_main$2, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: unref(form).password,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).password = $event),
                required: "",
                autocomplete: "current-password",
                autofocus: ""
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.password
              }, null, 8, ["message"])
            ]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$4, {
                class: normalizeClass(["ml-4", { "opacity-25": unref(form).processing }]),
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Confirm ")
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
