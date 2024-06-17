import { S as Swal } from "./sweetalert2.all-1839bad4.js";
import { r as ref, q as onMounted, g as createBlock, w as withCtx, b as resolveComponent, o as openBlock, d as createBaseVNode, a as createVNode, u as unref, s as ie, m as createTextVNode, t as toDisplayString } from "./app-7d41a608.js";
const _hoisted_1 = { class: "user-list w-full p-4 md:p-6" };
const _hoisted_2 = { class: "user-create mb-2" };
const _hoisted_3 = { class: "overflow-auto rounded-lg shadow-md" };
const _hoisted_4 = { class: "flex items-center justify-center gap-2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", { class: "pi pi-user-edit p-2 text-sky-600" }, null, -1);
const _hoisted_6 = ["onClick"];
const _sfc_main = {
  __name: "index",
  props: {
    data: Object
  },
  setup(__props) {
    const props = __props;
    const userList = ref([]);
    onMounted(() => {
      if (props.data) {
        userList.value = props.data.map((item, key) => {
          item.no = key + 1;
          return item;
        });
      }
    });
    const removeableId = ref(null);
    const handleRemove = async (id) => {
      removeableId.value = id;
      const { value: accept } = await Swal.fire({
        html: `<span class="text-lg font-bold">本当に削除しますか？</span>`,
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "いいえ",
        confirmButtonText: "はい"
      });
      if (accept) {
        axios.delete(route("admin.employees.delete"), { id }).then((res) => {
          var _a;
          if ((_a = res.data) == null ? void 0 : _a.success) {
            Swal.fire({
              toast: true,
              icon: "success",
              html: `<span class="text-white">OK</span>`,
              timer: 2e3,
              position: "bottom-right",
              background: "#15803d"
            });
          }
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      const _component_Column = resolveComponent("Column");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_AdminLayout = resolveComponent("AdminLayout");
      return openBlock(), createBlock(_component_AdminLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(ie), {
                href: _ctx.route("admin.employees.create")
              }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    label: "従業員登録",
                    icon: "pi pi-user-plus",
                    size: "small",
                    class: "py-2",
                    severity: "success"
                  })
                ]),
                _: 1
              }, 8, ["href"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_DataTable, {
                value: userList.value,
                class: "datatable-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Column, {
                    header: "No",
                    field: "no",
                    class: "text-right",
                    sortable: ""
                  }),
                  createVNode(_component_Column, {
                    header: "名前",
                    field: "name",
                    class: "text-right",
                    sortable: ""
                  }),
                  createVNode(_component_Column, {
                    header: "従業員ID",
                    field: "code",
                    class: "text-right",
                    sortable: ""
                  }),
                  createVNode(_component_Column, {
                    header: "ロール",
                    class: "text-right",
                    sortable: ""
                  }, {
                    body: withCtx((slotProps) => [
                      createTextVNode(toDisplayString(slotProps.data.role == 1 ? "管理者" : "従業員"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    header: "状態",
                    class: "text-right",
                    sortable: ""
                  }, {
                    body: withCtx((slotProps) => [
                      createTextVNode(toDisplayString(slotProps.data.status == 1 ? "活動" : "非活動"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Column, {
                    header: "操作",
                    class: "text-right",
                    sortable: ""
                  }, {
                    body: withCtx((slotProps) => [
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(unref(ie), {
                          href: _ctx.route("admin.employees.show", { id: slotProps.data.id })
                        }, {
                          default: withCtx(() => [
                            _hoisted_5
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createBaseVNode("i", {
                          class: "pi pi-trash p-2 text-rose-600 cursor-pointer",
                          onClick: ($event) => handleRemove(slotProps.data.id)
                        }, null, 8, _hoisted_6)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
