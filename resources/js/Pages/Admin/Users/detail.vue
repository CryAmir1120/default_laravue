<script setup>
import { useForm } from '@inertiajs/vue3';
import moment from 'moment';
import Swal from 'sweetalert2';

const props = defineProps({
    info: Object
})

const form = useForm({
    id: props.info?.id,
    name: props.info?.name,
    code: props.info?.code,
    password: null,
    status: props.info?.status == 1 ? true : false,
    created_at:props.info?.created_at ? moment(props.info?.created_at).format('yyyy.MM.DD') : null,
})

const generatePwd = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    form.password = password;
}

const handleCopy = async () => {
    await navigator.clipboard.writeText(form.password)
}
const submit = () => {
    form.post(route('admin.employees.update'), {
        onSuccess: () => {
            Swal.fire({
                toast: true,
                icon: 'success',
                html: `<div class="text-white">変更成功！<br/>従業員コードとパスワードをその従業員に教えてください。</div>`,
                showConfirmButton: false,
                position: 'bottom-right',
                timer: 3000,
                background: '#059669'
            })
        },
        onError: () => {
            Swal.fire({
                toast: true,
                icon: 'error',
                html: `<div class="text-white">登録失敗！<br />もう一度お試しください。</div>`,
                showConfirmButton: false,
                position: 'bottom-right',
                timer: 2000,
                background: '#71717a'
            })
        }
    })
}
</script>

<template>
    <AdminLayout>
        <form @submit.prevent="submit" class="detail-page p-4 md:p-6  overflow-auto">
            <div class="content shadow-lg p-4 rounded-lg overflow-hidden">
                <div class="rows">
                    <div>
                        <label>ユーザーID</label>
                    </div>
                    <div>{{ form.id }}</div>
                </div>
                <div class="rows">
                    <div>
                        <label>登録日</label>
                    </div>
                    <div>{{ form.created_at }}</div>
                </div>
                <div class="rows">
                    <div>名前</div>
                    <div>
                        <InputText v-model="form.name" />
                    </div>
                </div>
                <div class="rows">
                    <div>従業員ID</div>
                    <div>
                        <InputText v-model="form.code" />
                    </div>
                </div>
                <div class="rows">
                    <div>状態</div>
                    <div>
                        <Checkbox v-model="form.status" binary />
                    </div>
                </div>
                <div class="rows">
                    <div>パスワードリセット</div>
                    <div class="flex items-center flex-wrap gap-2">
                        <Button label="リセットする" size="small" severity="secondary" @click="generatePwd" />
                        <InputText v-model="form.password" class="p-inputtext-sm"/>
                        <i v-if="form.password" v-tooltip.top="'Copy'" class="pi pi-copy cursor-pointer hover:text-sky-500 active:text-rose-500" @click="handleCopy"/>
                    </div>
                </div>
            </div>
                <div class="mt-8 text-center">
                    <Button type="submit" label="保存する" icon="pi pi-save" :disabled="form.processing" :loading="form.processing"  severity="success" :class="{'opacity-50': form.processing}"/>
                </div>
        </form>
    </AdminLayout>
</template>
<style lang="scss" scoped>
.dark-theme {
    .content {
        background-color: #374151;
    }
}

.light-theme {
    .content {
        background-color: #d1d5db;
    }
}

.rows {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 576px) {
        display: block;
    }

    &>div {
        &:first-child {
            text-align: center;
        }
    }
}
</style>