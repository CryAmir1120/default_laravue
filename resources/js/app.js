import "./bootstrap";
import "../css/app.css";
import "../scss/app.scss";
// import css for html

// import fontawsome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas, far, fab)

// vue date picker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// vue slider

// import primevue lib
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import Dialog from "primevue/dialog";
import ConfirmDialog from "primevue/confirmdialog";
import ProgressBar from "primevue/progressbar";
import Knob from "primevue/knob";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
import TabMenu from "primevue/tabmenu";
import ColorPicker from "primevue/colorpicker";
import Tooltip from "primevue/tooltip";
import Toast from "primevue/toast";
import Message from 'primevue/message';
import ToastService from "primevue/toastservice";
import Sidebar from "primevue/sidebar";
import InputSwitch from 'primevue/inputswitch';
import Tag from "primevue/tag";
import Badge from "primevue/badge";
import Chips from 'primevue/chips';
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import OverlayPanel from "primevue/overlaypanel";
import Skeleton from "primevue/skeleton";
import BadgeDirective from "primevue/badgedirective";
import Rating from 'primevue/rating';
import AnimateOnScroll from 'primevue/animateonscroll';
import Chart from 'primevue/chart';
import ProgressSpinner from 'primevue/progressspinner';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

// import primevue css theme
import "primevue/resources/themes/lara-light-blue/theme.css";
// import "primevue/resources/themes/saga-green/theme.css";
// import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Sales";

createInertiaApp({
    title: (title) => `${title}｜${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .directive('badge', BadgeDirective)
            .directive("tooltip", Tooltip)
            .directive("animateonscroll", AnimateOnScroll)
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(ToastService)
            .use(PrimeVue, { ripple: true })
            .component("InputText", InputText)
            .component("InputMask", InputMask)
            .component("InputNumber", InputNumber)
            .component("Textarea", Textarea)
            .component("Button", Button)
            .component("RadioButton", RadioButton)
            .component("Checkbox", Checkbox)
            .component("Dropdown", Dropdown)
            .component("MultiSelect", MultiSelect)
            .component("Dialog", Dialog)
            .component("ConfirmDialog", ConfirmDialog)
            .component("DataTable", DataTable)
            .component("Column", Column)
            .component("ColumnGroup", ColumnGroup)
            .component("Row", Row)
            .component("Toast", Toast)
            .component("Message", Message)
            .component("ProgressBar", ProgressBar)
            .component("ProgressSpinner", ProgressSpinner)
            .component("Knob", Knob)
            .component("TabMenu", TabMenu)
            .component("ColorPicker ", ColorPicker)
            .component("Sidebar ", Sidebar)
            .component("Tag ", Tag)
            .component("Chips ", Chips)
            .component("InputSwitch ", InputSwitch)
            .component("Badge ", Badge)
            .component("AvatarGroup ", AvatarGroup)
            .component("Avatar ", Avatar)
            .component("OverlayPanel", OverlayPanel)
            .component("Skeleton", Skeleton)
            .component("IconField", IconField)
            .component("InputIcon ", InputIcon)
            .component("FontAwesomeIcon", FontAwesomeIcon)
            .component("VueDatePicker", VueDatePicker)
            .component("Rating", Rating)
            .component("Chart", Chart)
            .mount(el);
    },
    progress: {
        color: "#32CD32",
    },
});
