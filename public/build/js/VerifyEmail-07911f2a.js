import { T, x as computed, g as createBlock, w as withCtx, o as openBlock, a as createVNode, u as unref, Z, c as createElementBlock, e as createCommentVNode, d as createBaseVNode, m as createTextVNode, n as normalizeClass, s as ie, k as withModifiers } from "./app-7d41a608.js";
import { G as GuestLayout } from "./GuestLayout-0899872c.js";
import { _ as _sfc_main$1 } from "./PrimaryButton-abb9075e.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ", -1);
const _hoisted_2 = {
  key: 0,
  class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
};
const _hoisted_3 = { class: "mt-4 flex items-center justify-between" };
const _sfc_main = {
  __name: "VerifyEmail",
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = T({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GuestLayout, null, {
        default: withCtx(() => [
          createVNode(unref(Z), { title: "Email Verification" }),
          _hoisted_1,
          verificationLinkSent.value ? (openBlock(), createElementBlock("div", _hoisted_2, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_sfc_main$1, {
                class: normalizeClass({ "opacity-25": unref(form).processing }),
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Resend Verification Email ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              createVNode(unref(ie), {
                href: _ctx.route("logout"),
                method: "post",
                as: "button",
                class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              }, {
                default: withCtx(() => [
                  createTextVNode("Log Out")
                ]),
                _: 1
              }, 8, ["href"])
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
