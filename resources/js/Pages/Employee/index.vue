<script setup>
import axios from 'axios';
import moment from 'moment';
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';

const props = defineProps({
    data: Object
})

const syukinloading = ref(false);
const taikinloading = ref(false);
const syukinTime = ref(null);
const taikinTime = ref(null);

onMounted(() => {
    if (props.data) {
        if (props.data.dp_syukin_time) {
            syukinTime.value = moment(props.data.dp_syukin_time, "HH:mm:ss").format('HH時mm分')
        }
        if (props.data.dp_taikin_time) {
            taikinTime.value = moment(props.data.dp_taikin_time, "HH:mm:ss").format('HH時mm分')
        }
    }
})

const handleStore = (type) => {
    const nowTime = moment().format('HH時mm分');
    let attendNotify;
    if(type == 'syukin') {
        syukinloading.value = true;
        attendNotify = `${nowTime}に出勤しました。`
    } else if (type =='taikin') {
        taikinloading.value = true;
        attendNotify = `${nowTime}に退勤しました。`
    }
    axios.post(route('employee.store'), { type: type }).then((res) => {
        if (res.data) {
            Swal.fire({
                toast: true,
                html: `<span class="text-white">${attendNotify}</span>`,
                showConfirmButton: false,
                timer: 3000,
                position: 'bottom-right',
                background: '#15803d'
            })
        }
    }).catch((error) => {

    }).finally(() => {
        syukinloading.value = false;
        taikinloading.value = false;
        setTimeout(() => {
            location.reload()
        }, 3000);
    })
}
</script>
<template>
    <EmployeeLayout>
        <div class="attend-screen max-w-xl  m-auto p-4 md:p-6 flex items-center justify-center flex-col gap-8 h-full">
            <div class="w-full flex flex-wrap justify-center items-center gap-8">
                <Button class="w-full h-32 text-center flex justify-center items-center grow" severity="success"
                    @click="handleStore('syukin')" :disabled="syukinloading || syukinTime">
                    <div class="w-full">
                        <p class="text-2xl font-bold">
                            <i v-if="syukinloading" class="pi pi-spin pi-spinner text-2xl"></i>
                            <span v-else>出勤</span>
                        </p>
                        <p v-if="syukinTime">{{ syukinTime }}に出勤しました。</p>
                    </div>
                </Button>
                <Button class="w-full h-32 text-center flex justify-center items-center grow" severity="secondary"
                    @click="handleStore('taikin')" :disabled="taikinloading || !syukinTime || taikinTime">
                    <div class="w-full">
                        <p class="text-2xl font-bold">
                            <i v-if="taikinloading" class="pi pi-spin pi-spinner text-2xl"></i>
                            <span v-else>退勤</span>
                        </p>
                        <p v-if="taikinTime">{{ taikinTime }}に退勤しました。</p>
                    </div>
                </Button>
            </div>
        </div>
    </EmployeeLayout>
</template>

<style lang="scss" scoped>
.attend-screen {}
</style>
