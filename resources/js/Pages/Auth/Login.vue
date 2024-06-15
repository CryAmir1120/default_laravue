<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputIcon from 'primevue/inputicon'
import IconField from 'primevue/iconfield'

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    code: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head title="ログイン" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4">
                <InputLabel for="code" value="従業員ID" />

                <IconField iconPosition="left" class="mt-1">
                    <InputIcon class="pi pi-user" />
                    <InputText id="code" type="code" class="w-full" v-model="form.code" required autofocus
                        autocomplete="username" />
                </IconField>

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="パスワード" />

                <IconField iconPosition="left">
                <InputIcon class="pi pi-lock" />
                <InputText id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                    autocomplete="current-password" />
                </IconField>

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">ログイン状態を保存する</span>
                </label>
            </div>

            <!-- <div class="block mt-4 text-center">
                <Link v-if="canResetPassword" :href="route('password.request')"
                    class="text-sm text-gray-400 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:dark:text-sky-600">
                パスワードを忘れた方はこちら
                </Link>
            </div> -->

            <div class="mt-4">
                <Button type="submit" class="w-full" icon="pi pi-sign-in" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing" :loading="form.processing" label="ログイン" />
            </div>

            <!-- <div class="mt-4 text-center text-center">
                <Link :href="route('register')"
                    class="flex gap-2 justify-center items-center text-gray-300 hover:font-bold">
                <i class="pi pi-user-plus"></i>
                <span>新規会員登録はこちら</span>
                </Link>
            </div> -->
        </form>
    </GuestLayout>
</template>
