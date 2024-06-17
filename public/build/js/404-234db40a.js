import { _ as _export_sfc, q as onMounted, I as onUnmounted, c as createElementBlock, a as createVNode, u as unref, d as createBaseVNode, w as withCtx, F as Fragment, o as openBlock, Z, s as ie, p as pushScopeId, l as popScopeId } from "./app-7d41a608.js";
const _404_vue_vue_type_style_index_0_scoped_e41d69d6_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-e41d69d6"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "page-404 relative" };
const _hoisted_2 = { class: "notfound" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "notfound-404" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "notfound-title" }, "404")
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "wf-sans text-white gradient-txt" }, " 申し訳ございません。お客様がお探しのページは削除されたか、存在しない可能性があります。 ", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "pi pi-chevron-left" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "トップページへ戻る", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("canvas", { class: "particle absolute top-0 left-0 z-10 w-full h-screen" }, null, -1));
const _sfc_main = {
  __name: "404",
  setup(__props) {
    onMounted(() => {
      let themeColor = "";
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        themeColor = "dark";
      } else {
        themeColor = "light";
      }
      Particles.init({
        selector: ".particle",
        color: themeColor == "dark" ? "#ffffff" : "#4caf50",
        sizeVariations: 8,
        connectParticles: false,
        speed: 0.1
      });
    });
    onUnmounted(() => {
      Particles.destroy();
    });
    const mouseMoveAction = (e) => {
      let title = document.querySelector(".notfound-title");
      let xValue = Math.abs(e.movementX) > 30 ? 30 : e.movementX * 2;
      let yValue = Math.abs(e.movementY) > 30 ? 30 : e.movementY * 2;
      title.style.transform = `translate(${xValue}px, ${yValue}px)`;
      title.style.backgroundPosition = `calc(50% - ${xValue * 2}px) calc(50% - ${yValue * 2}px)`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Z), { title: "404 - ページが見つかりません。" }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            ref: "container",
            id: "notfound",
            onMousemove: mouseMoveAction,
            class: "relative z-20"
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              _hoisted_4,
              createVNode(unref(ie), {
                href: _ctx.route("role.provider"),
                class: "mt-4 go-to-top gradient-txt"
              }, {
                default: withCtx(() => [
                  _hoisted_5,
                  _hoisted_6
                ]),
                _: 1
              }, 8, ["href"])
            ])
          ], 544),
          _hoisted_7
        ])
      ], 64);
    };
  }
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e41d69d6"]]);
export {
  _404 as default
};
