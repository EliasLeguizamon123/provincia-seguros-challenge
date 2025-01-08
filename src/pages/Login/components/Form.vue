<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import { LoginFormValues } from '../../../models/loginFormValues.model.ts';
import { useAuthStore } from '../../../stores/auth.store.ts'

export default {
    name: 'LoginForm',
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    setup () {
        const authStore = useAuthStore();
        return { authStore };
    },
    data() {
        return {
            schema: yup.object({
                username: yup.string().required('El nombre de usuario es obligatorio').min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
                password: yup.string().required('La contraseña es obligatoria'),
            }),
            loading: false,
        };
    },
    methods: {
        onSubmit(values: LoginFormValues, { resetForm }: any) {
            this.loading = true;
            if (values.username === 'admin' && values.password === 'admin') {
                this.authStore.setLoginData(values);
                this.authStore.setToken('super-secret-token');
                this.$router.push('/');
            } else {
                alert('Credenciales incorrectas');
                resetForm();
            }
            this.loading = false;
        }
    }
}
</script>

<template>
    <Form :validation-schema="schema" @submit="onSubmit">
        <Field type="text" class="outline-none w-full border border-gray-300 p-2 rounded-lg mb-4 focus:border-cyan-600" placeholder="Usuario" name="username" autofocus />
        <ErrorMessage name="username" class="text-red-500 text-xs" />
        <Field type="password" class="outline-none w-full border border-gray-300 p-2 rounded-lg mb-4 focus:border-cyan-600" name="password" placeholder="Contraseña" />
        <ErrorMessage name="password" class="text-red-500 text-xs mb-6" />
        <button type="submit" class="w-full bg-primary text-white p-2 rounded-lg" :disabled="loading">
            <span v-if="!loading">Ingresar</span>
            <span v-else>Cargando...</span>
        </button>
    </Form>
</template>