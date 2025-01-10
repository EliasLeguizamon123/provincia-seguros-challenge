<script lang="ts">
import { onMounted } from 'vue';

import UserIcon from '@/assets/icons/User.icon.vue';
import LoginForm from './components/Form.vue';

export default {
    name: 'Login',
    components: {
        UserIcon,
        LoginForm,
    },
    setup () {
        onMounted(() => {
            sessionStorage.clear();
        });
    }
}

</script>

<template>
    <div class="w-full h-full flex justify-center items-center pt-20">
        <div class="w-2/3 lg:w-1/3 lg:h-1/2 bg-white shadow-lg rounded-lg p-8">
            <UserIcon class="w-20 h-20 mx-auto mb-4"/>
            <h1 class="text-2xl text-center font-bold mb-4">Login</h1>
            <LoginForm />
        </div>
    </div>
</template>