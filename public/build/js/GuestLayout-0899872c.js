import { _ as _export_sfc, q as onMounted, D as onBeforeUnmount, o as openBlock, c as createElementBlock, d as createBaseVNode, a as createVNode, w as withCtx, E as ApplicationLogo, u as unref, s as ie, C as renderSlot, p as pushScopeId, l as popScopeId } from "./app-7d41a608.js";
const GuestLayout_vue_vue_type_style_index_0_scoped_2dafb306_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2dafb306"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "guest-layout relative min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900" };
const _hoisted_2 = { class: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("canvas", { class: "particle absolute top-0 left-0 w-full h-full" }, null, -1));
const _sfc_main = {
  __name: "GuestLayout",
  setup(__props) {
    onMounted(() => {
      Particles.init({
        selector: ".particle",
        color: "#ffffff",
        sizeVariations: 3,
        connectParticles: false,
        speed: 0.1
      });
    });
    onBeforeUnmount(() => {
      Particles.destroy();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          createVNode(unref(ie), {
            href: _ctx.route("employee.home")
          }, {
            default: withCtx(() => [
              createVNode(ApplicationLogo, { class: "h-20 fill-current text-gray-500" })
            ]),
            _: 1
          }, 8, ["href"])
        ]),
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _hoisted_3
      ]);
    };
  }
};
const GuestLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2dafb306"]]);
export {
  GuestLayout as G
};
