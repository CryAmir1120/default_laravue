<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputIcon from 'primevue/inputicon'
import IconField from 'primevue/iconfield'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head title="会員登録" />

        <form @submit.prevent="submit">
            <div class="mt-4">
                <InputLabel for="name" value="名前" />

                <IconField iconPosition="left">
                    <InputIcon class="pi pi-user" />
                    <InputText id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus
                        autocomplete="name" placeholder="名前を入力してください。" />
                </IconField>

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="メールアドレス" />
                <IconField iconPosition="left">
                    <InputIcon class="pi pi-at" />

                    <InputText id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                        autocomplete="email" placeholder="メールアドレスを入力してください。" />
                </IconField>

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="パスワード" />

                <IconField iconPosition="left">
                    <InputIcon class="pi pi-lock" />

                    <InputText id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                        autocomplete="new-password" placeholder="パスワードは8文字以上" />
                </IconField>

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="パスワード確認" />
                <IconField iconPosition="left">
                    <InputIcon class="pi pi-unlock" />

                    <InputText id="password_confirmation" type="password" class="mt-1 block w-full"
                        v-model="form.password_confirmation" required autocomplete="new-password"
                        placeholder="確認のためにパスワードを再入力してください。" />
                </IconField>

                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="mt-4 text-center">
                <Link :href="route('login')"
                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                ログインはこちら
                </Link>
            </div>

            <div class="mt-4">

                <Button type="submit" class="w-full" icon="pi pi-user-plus" label="登録" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing" :loading="form.processing" />
            </div>
        </form>
    </GuestLayout>
</template>
