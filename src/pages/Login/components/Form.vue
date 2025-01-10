<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import { useAuthStore } from '@/stores/auth.store.ts'

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
            /**
             * Esquema de validación para el formulario usando Yup.
             * Valida que el nombre de usuario sea requerido y tenga al menos 4 caracteres,
             * y que la contraseña sea requerida.
             */
            schema: yup.object({
                username: yup.string().required('El nombre de usuario es obligatorio').min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
                password: yup.string().required('La contraseña es obligatoria'),
            }),
            loading: false,
        };
    },
    methods: {
        /**
         * Maneja el envío del formulario.
         * Valida las credenciales y establece el estado de autenticación si las credenciales son correctas.
         * @param {any} values - Valores del formulario.
         * @param {any} resetForm - Función para restablecer el formulario.
         */
        onSubmit(values: any, { resetForm }: any) {
            this.loading = true;
            if (values.username === 'admin' && values.password === 'admin') {
                this.authStore.setLoginData(values);
                this.authStore.setToken('super-secret-token');
                sessionStorage.setItem('token', 'super-secret-token');
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