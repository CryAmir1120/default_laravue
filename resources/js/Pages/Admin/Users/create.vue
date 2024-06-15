<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const form = useForm({
    name: null,
    code: null,
    password: null,
})

const loading = ref(false);
const validCode = ref(null);

const generatePwd = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    form.password = password
}

const handleCopy = async () => {
    await navigator.clipboard.writeText(form.password)
}

const handleCodechecking = () => {
    loading.value = true;
    axios.post(route('admin.employees.code_checking'), { code: form.code }).then((res) => {
        if(res.data?.success) {
            validCode.value = true;
        } else {
            validCode.value = false;
        }
    }).catch((error) => {
        console.error(error);
    }).finally(() => {
        loading.value = false;
    })
}
const submit = () => {
    form.post(route('admin.employees.store'), {
        onSuccess: () => {
            Swal.fire({
                toast: true,
                icon: 'success',
                html: `<div class="text-white">登録成功！<br/>従業員コードとパスワードをその従業員に教えてください。</div>`,
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
};
</script>

<template>
    <AdminLayout>
        <form @submit.prevent="submit" class="detail-page p-4 md:p-6  overflow-auto">
            <div class="content shadow-lg p-4 rounded-lg overflow-hidden">
                <div class="rows">
                    <div>名前</div>
                    <div>
                        <InputText v-model="form.name" />
                        <InputError :message="form.errors.name" />
                    </div>
                </div>
                <div class="rows">
                    <div>従業員ID<br />（ログイン用）</div>
                    <div>
                        <div class="flex items-center gap-2">
                            <InputText v-model="form.code" class="p-inputtext-sm" />
                            <Button v-if="form.code" label="重複確認" size="small" severity="danger" :loading="loading"
                                :disabled="loading" @click="handleCodechecking" />
                            <i v-if="validCode == true" class="pi pi-check-circle text-green-600" />
                            <i v-if="validCode == false" class="pi pi-info-circle text-red-500"></i>
                        </div>
                        <small>従業員IDは重複できません。</small>
                        <InputError :message="form.errors.code" />
                    </div>
                </div>

                <div class="rows">
                    <div>パスワードリセット</div>
                    <div class="">
                        <div class="flex items-center gap-2">
                            <Button label="自動生成" size="small" severity="secondary" @click="generatePwd" />
                            <InputText v-model="form.password" class="p-inputtext-sm" />
                            <i v-if="form.password" v-tooltip.top="'Copy'"
                                class="pi pi-copy cursor-pointer hover:text-sky-500 active:text-rose-500"
                                @click="handleCopy" />
                        </div>
                        <InputError :message="form.errors.password" />
                    </div>
                </div>
            </div>
            <div class="mt-8 flex justify-center items-center text-center">
                <Button type="submit" label="保存する" icon="pi pi-save"
                    :disabled="form.processing || !form.name || !form.code || !form.password" :loading="form.processing"
                    severity="success" :class="{ 'opacity-50': form.processing }" />
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