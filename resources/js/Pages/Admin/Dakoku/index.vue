<script setup>
import { useForm } from '@inertiajs/vue3';
import moment from 'moment';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue'

const props = defineProps({
    data: Object
});

const dakokuList = ref([]);

if (props.data) {
    dakokuList.value = props.data.data.map((item, index) => {
        return {
            no: index + 1,
            id: item.id,
            name: item.user?.name,
            code: item.user?.code,
            date: moment(item.dp_target_date).format('yyyy.MM.DD'),
            syukin: item.dp_syukin_time,
            taikin: item.dp_taikin_time,
        }
    })
}

const params = new URLSearchParams(window.location.search);;
const form = useForm({
    from: params.get('from'),
    to: params.get('to'),
    name: params.get('name'),
    code: params.get('code'),
})

const handleFilter = () => {
    form.get(route('admin.dakoku.index'), {
        onSuccess: () => {
            Swal.fire({
                toast: true,
                html: `<span class="text-white">${props.data.total}件検索されました。</span>`,
                showConfirmButton: false,
                timer: 3000,
                position: 'bottom-right',
                background: '#15803d'
            })
        }
    })
}
</script>
<template>
    <AdminLayout>
        <div class="dakoku-list p-4 md:p-6">
            <div class="user-create mb-2 flex items-center gap-2 flex-wrap">
                <div class="from grow">
                    <VueDatePicker v-model="form.from" locale="ja" format="yyyy/MM/dd" modelType="yyyy/MM/dd" auto-apply :enable-time-picker="false" year-first
                        placeholder="開始日" />
                </div>
                <div class="to grow">
                    <VueDatePicker v-model="form.to" locale="ja" format="yyyy/MM/dd" modelType="yyyy/MM/dd" auto-apply :enable-time-picker="false" year-first
                        placeholder="終了日" />
                </div>
                <div class="name grow">
                    <InputText v-model="form.name" size="small" class="p-inputtext-sm py-1.5 w-full"
                        placeholder="従業員名" />
                </div>
                <div class="name grow">
                    <InputText v-model="form.code" size="small" class="p-inputtext-sm py-1.5 w-full"
                        placeholder="従業員ID" />
                </div>
                <div class="flex items-center justify-center gap-2 grow">
                    <Button label="検索する" icon="pi pi-search" size="small" class="py-2" severity="info"
                        @click="handleFilter" />
                    <Button label="Excel出力" icon="pi pi-download" size="small" class="py-2" severity="success" />
                </div>
            </div>
            <div class="overflow-auto rounded-lg shadow-md">
                <DataTable :value="dakokuList" class="datatable-center p-datatable-sm">
                    <Column header="No" field="no" class="text-right" sortable />
                    <Column header="名前" field="name" class="text-right" sortable />
                    <Column header="従業員ID" field="code" class="text-right" sortable />
                    <Column header="日付" field="date" class="text-center" sortable />
                    <Column header="出勤時間" field="syukin" class="text-center" sortable />
                    <Column header="退勤時間" field="taikin" class="text-center" sortable />
                </DataTable>
            </div>
            <div class="mt-4">
                <Pagination :data="data" />
            </div>
        </div>
    </AdminLayout>
</template>