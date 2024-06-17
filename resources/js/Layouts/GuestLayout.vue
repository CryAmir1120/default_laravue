<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { onBeforeUnmount, onMounted } from "vue";

onMounted(() => {
  Particles.init({
    selector: ".particle",
    color: "#ffffff",
    sizeVariations: 3,
    connectParticles: false,
    speed: 0.1,
  });
});

onBeforeUnmount(() => {
  Particles.destroy();
});

</script>

<template>
    <div
        class="guest-layout relative min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
        <div>
            <Link :href="route('employee.home')">
            <ApplicationLogo class="h-20 fill-current text-gray-500" />
            </Link>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>
        <canvas class="particle absolute top-0 left-0 w-full h-full"></canvas>
    </div>
</template>

<style lang="scss" scoped>
.guest-layout {
    position: relative;
    background-image: url('../../public/assets/img/background/bg-lg-01.webp');
    background-size: cover;
    background-position: center;
    z-index: 0;
    .particle {
        z-index: -1;
    }
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, #00000080 0%, transparent 30%), radial-gradient(circle, #00000080 0%, transparent 30%);
        background-size: 8px 8px;
        background-position: 0 0, 4px 4px;
        z-index: -1;
    }
}
</style>
