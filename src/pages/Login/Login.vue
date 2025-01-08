<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import UserIcon from '../../assets/icons/UserIcon.vue';

export default {
    name: 'Login',
    components: {
        UserIcon,
        Form,
        Field,
        ErrorMessage,
    },
    methods: {
        onSubmit(values) {
            if (values.username === 'admin' && values.password === 'admin') {
                console.log('Logged in successfully');
                sessionStorage.setItem('token', 'super-secret-token');
                this.$router.push('/');
            } else {
                alert('Invalid credentials');
            }
        },
        validateUsername(value) {
            if ( value && value.length < 4) {
                return 'Username must be at least 4 characters long';
            }
            return true;
        },
    }
}

</script>

<template>
    <div class="w-full h-full flex justify-center items-center pt-20">
        <div class="w-1/3 h-1/2 bg-white shadow-lg rounded-lg p-8">
            <UserIcon class="w-20 h-20 mx-auto mb-4"/>
            <h1 class="text-2xl text-center font-bold mb-4">Login</h1>
            <Form @submit="onSubmit">
                <Field :rules="validateUsername" type="text" class="w-full border border-gray-300 p-2 rounded-lg mb-4" placeholder="Username" name="username" />
                <ErrorMessage name="username" class="text-red-500" />
                <Field type="password" class="w-full border border-gray-300 p-2 rounded-lg mb-4" name="password" placeholder="Password" />
                <button class="w-full bg-blue-500 text-white p-2 rounded-lg">Login</button>
            </Form>
        </div>
    </div>
</template>