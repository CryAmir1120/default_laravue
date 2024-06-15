<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { useDark } from "@vueuse/core";
import { useTimestamp } from '@vueuse/core'
import moment from 'moment';

const isDark = useDark({
    selector: "body",
    attribute: "class",
    valueDark: "dark-theme",
    valueLight: "light-theme",
});

const timestamp = useTimestamp({ offset: 0 })

</script>

<template>
    <div>
        <div class="min-h-screen">
            <nav class="navigation">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center gap-4">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('employee.home')">
                                <ApplicationLogo
                                    class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="font-yuji">
                                {{ moment(timestamp).format('yyyy年M月D日 | HH:mm') }}
                            </div>
                        </div>

                        <div class="flex items-center justify-center gap-4">
                            <i class="pi hover:bg-gray-100/30 rounded-lg cursor-pointer p-4"
                                :class="isDark ? 'pi-moon text-white' : 'pi-sun text-black'"
                                @click="isDark = !isDark"></i>
                            <div>
                                <Link :href="route('logout')" method="post" as="button" class="">
                                <i class="pi pi-sign-out p-4 hover:bg-gray-100/30 rounded-lg cursor-pointer"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Content -->
            <main class="main-screen">
                <slot />
            </main>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.light-theme {
    .navigation {
        background: linear-gradient(15deg, #d1d5db, #9ca3af);
    }
}

.dark-theme {
    .navigation {
        background-color: #111827;
    }
}

.main-screen {
    height: calc(100vh - 64px);
}
</style>