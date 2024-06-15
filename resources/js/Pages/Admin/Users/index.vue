<script setup>
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';


const props = defineProps({
    data: Object
})


const userList = ref([]);
onMounted(() => {
    if (props.data) {
        userList.value = props.data.map((item, key) => {
            item.no = key + 1;
            return item
        });
    }
})

const removeableId = ref(null);
const handleRemove = async (id) => {
    removeableId.value = id;
    const { value: accept } = await Swal.fire({
        html: `<span class="text-lg font-bold">本当に削除しますか？</span>`,
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'いいえ',
        confirmButtonText: 'はい',
    })
    if (accept) {
        axios.delete(route('admin.employees.delete'), { id: id }).then((res) => {
            if (res.data?.success) {
                Swal.fire({
                    toast: true,
                    icon: 'success',
                    html: `<span class="text-white">OK</span>`,
                    timer: 2000,
                    position: "bottom-right",
                    background: '#15803d'
                });
            }
        })
    }
}

</script>

<template>
    <AdminLayout>
        <div class="user-list w-full p-4 md:p-6">
            <div class="user-create mb-2">
                <Link :href="route('admin.employees.create')">
                    <Button label="従業員登録" icon="pi pi-user-plus" size="small" class="py-2" severity="success" />
                </Link>
            </div>
            <div class="overflow-auto rounded-lg shadow-md">
                <DataTable :value="userList" class="datatable-center">
                    <Column header="No" field="no" class="text-right" sortable />
                    <Column header="名前" field="name" class="text-right" sortable />
                    <Column header="従業員ID" field="code" class="text-right" sortable />
                    <Column header="ロール" class="text-right" sortable>
                        <template #body="slotProps">
                            {{ slotProps.data.role == 1 ? '管理者' : '従業員' }}
                        </template>
                    </Column>
                    <Column header="状態" class="text-right" sortable>
                        <template #body="slotProps">
                            {{ slotProps.data.status == 1 ? '活動' : '非活動' }}
                        </template>
                    </Column>
                    <Column header="操作" class="text-right" sortable>
                        <template #body="slotProps">
                            <div class="flex items-center justify-center gap-2">
                                <Link :href="route('admin.employees.show', { id: slotProps.data.id })">
                                <i class="pi pi-user-edit p-2 text-sky-600"></i>
                                </Link>
                                <i class="pi pi-trash p-2 text-rose-600 cursor-pointer" @click="handleRemove(slotProps.data.id)"></i>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </AdminLayout>

</template>