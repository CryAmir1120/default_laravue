import { r as ref, h as hooks, T, c as createElementBlock, a as createVNode, w as withCtx, F as Fragment, b as resolveComponent, o as openBlock, d as createBaseVNode, u as unref, e as createCommentVNode, f as axios } from "./app-7d41a608.js";
import { S as Swal } from "./sweetalert2.all-1839bad4.js";
const _hoisted_1 = { class: "dakoku-list p-4 md:p-6" };
const _hoisted_2 = { class: "user-create mb-2 flex items-center gap-2 flex-wrap" };
const _hoisted_3 = { class: "from grow" };
const _hoisted_4 = { class: "to grow" };
const _hoisted_5 = { class: "name grow" };
const _hoisted_6 = { class: "name grow" };
const _hoisted_7 = { class: "flex items-center justify-center gap-2 grow" };
const _hoisted_8 = { class: "overflow-auto rounded-lg shadow-md" };
const _hoisted_9 = { class: "mt-4" };
const _hoisted_10 = { class: "w-full font-sans" };
const _hoisted_11 = { class: "flex items-center gap-4" };
const _hoisted_12 = { class: "flex items-center" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", {
  for: "monthly",
  class: "pl-2"
}, "月別出力", -1);
const _hoisted_14 = { class: "flex items-center" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", {
  for: "filtered",
  class: "pl-2"
}, "検索結果", -1);
const _hoisted_16 = {
  key: 0,
  class: "mt-4 overflow-visible"
};
const _hoisted_17 = { class: "mt-4 text-center" };
const _sfc_main = {
  __name: "index",
  props: {
    data: Object
  },
  setup(__props) {
    const props = __props;
    const dakokuList = ref([]);
    const visibleDialog = ref(false);
    const loading = ref(false);
    const exportMonth = ref(hooks().subtract(1, "month").format("yyyy/MM/DD"));
    const exportType = ref(1);
    if (props.data) {
      dakokuList.value = props.data.data.map((item, index) => {
        var _a, _b;
        return {
          no: index + 1,
          id: item.id,
          name: (_a = item.user) == null ? void 0 : _a.name,
          code: (_b = item.user) == null ? void 0 : _b.code,
          date: hooks(item.dp_target_date).format("yyyy.MM.DD"),
          syukin: item.dp_syukin_time,
          taikin: item.dp_taikin_time
        };
      });
    }
    const params = new URLSearchParams(window.location.search);
    const form = T({
      from: params.get("from"),
      to: params.get("to"),
      name: params.get("name"),
      code: params.get("code")
    });
    const handleFilter = () => {
      form.get(route("admin.dakoku.index"), {
        onSuccess: () => {
          Swal.fire({
            toast: true,
            html: `<span class="text-white">${props.data.total}件検索されました。</span>`,
            showConfirmButton: false,
            timer: 3e3,
            position: "bottom-right",
            background: "#15803d"
          });
        }
      });
    };
    const handleExport = () => {
      if (exportType.value == 1 && !exportMonth.value) {
        alert("対象月を選択してください。");
        return;
      }
      loading.value = true;
      let params2;
      if (exportType.value == 1) {
        params2 = {
          month: exportMonth.value,
          filter_data: null
        };
      } else {
        params2 = {
          filter_data: dakokuList.value,
          month: null
        };
      }
      axios.post(route("admin.dakoku.export.excel"), params2).then((res) => {
        var _a;
        if ((_a = res.data) == null ? void 0 : _a.success) {
          location.href = route("file_download", { file_path: res.data.path, is_delete: true });
        } else {
          Swal.fire({
            toast: true,
            html: `<span class="text-white">データはありません。</span>`,
            icon: "warning",
            showConfirmButton: false,
            timer: 3e3,
            position: "bottom-right",
            background: "#002030"
          });
        }
      }).catch((err) => {
        console.error(err);
      }).finally(() => {
        loading.value = false;
        visibleDialog.value = false;
      });
    };
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      const _component_Column = resolveComponent("Column");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Pagination = resolveComponent("Pagination");
      const _component_AdminLayout = resolveComponent("AdminLayout");
      const _component_RadioButton = resolveComponent("RadioButton");
      const _component_Dialog = resolveComponent("Dialog");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_AdminLayout, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createVNode(_component_VueDatePicker, {
                    modelValue: unref(form).from,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).from = $event),
                    locale: "ja",
                    format: "yyyy/MM/dd",
                    modelType: "yyyy/MM/dd",
                    "auto-apply": "",
                    "enable-time-picker": false,
                    "year-first": "",
                    placeholder: "開始日"
                  }, null, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_VueDatePicker, {
                    modelValue: unref(form).to,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).to = $event),
                    locale: "ja",
                    format: "yyyy/MM/dd",
                    modelType: "yyyy/MM/dd",
                    "auto-apply": "",
                    "enable-time-picker": false,
                    "year-first": "",
                    placeholder: "終了日"
                  }, null, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_InputText, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).name = $event),
                    size: "small",
                    class: "p-inputtext-sm py-1.5 w-full",
                    placeholder: "従業員名"
                  }, null, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_InputText, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).code = $event),
                    size: "small",
                    class: "p-inputtext-sm py-1.5 w-full",
                    placeholder: "従業員ID"
                  }, null, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createVNode(_component_Button, {
                    label: "検索する",
                    icon: "pi pi-search",
                    size: "small",
                    class: "py-2",
                    severity: "info",
                    onClick: handleFilter
                  }),
                  createVNode(_component_Button, {
                    label: "Excel出力",
                    icon: "pi pi-download",
                    size: "small",
                    class: "py-2",
                    severity: "success",
                    onClick: _cache[4] || (_cache[4] = ($event) => visibleDialog.value = true)
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_DataTable, {
                  value: dakokuList.value,
                  class: "datatable-center p-datatable-sm"
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
                      header: "日付",
                      field: "date",
                      class: "text-center",
                      sortable: ""
                    }),
                    createVNode(_component_Column, {
                      header: "出勤時間",
                      field: "syukin",
                      class: "text-center",
                      sortable: ""
                    }),
                    createVNode(_component_Column, {
                      header: "退勤時間",
                      field: "taikin",
                      class: "text-center",
                      sortable: ""
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_Pagination, { data: __props.data }, null, 8, ["data"])
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(_component_Dialog, {
          visible: visibleDialog.value,
          "onUpdate:visible": _cache[8] || (_cache[8] = ($event) => visibleDialog.value = $event),
          modal: "",
          "dismissable-mask": "",
          dragabble: false,
          header: "出力形式を指定してください。",
          class: "w-full max-w-lg overflow-visible",
          "content-class": "overflow-visible"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_RadioButton, {
                      inputId: "monthly",
                      modelValue: exportType.value,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => exportType.value = $event),
                      name: "excelExportType",
                      value: 1
                    }, null, 8, ["modelValue"]),
                    _hoisted_13
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(_component_RadioButton, {
                      inputId: "filtered",
                      modelValue: exportType.value,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => exportType.value = $event),
                      name: "excelExportType",
                      value: 2
                    }, null, 8, ["modelValue"]),
                    _hoisted_15
                  ])
                ])
              ]),
              exportType.value == 1 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createVNode(_component_VueDatePicker, {
                  modelValue: exportMonth.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => exportMonth.value = $event),
                  locale: "ja",
                  format: "yyyy年M月",
                  modelType: "yyyy/MM/dd",
                  autoApply: "",
                  monthPicker: "",
                  enableTimePicker: false,
                  class: "z-50"
                }, null, 8, ["modelValue"])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_17, [
                createVNode(_component_Button, {
                  label: "出力する",
                  icon: "pi pi-save",
                  severity: "success",
                  size: "small",
                  class: "w-full",
                  disabled: loading.value,
                  loading: loading.value,
                  onClick: handleExport
                }, null, 8, ["disabled", "loading"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
