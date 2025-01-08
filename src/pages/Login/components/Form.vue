<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import { LoginFormValues } from '../../../models/loginFormValues.model.ts';

export default {
    name: 'LoginForm',
    components: {
        Form,
        Field,
        ErrorMessage,
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
        async onSubmit(values: LoginFormValues) {
            this.loading = true;
            try {
                if (values.username === 'admin' && values.password === 'admin') {
                    sessionStorage.setItem('token', 'super-secret-token');
                    this.$router.push('/');
                } else {
                    alert('Credenciales incorrectas');
                }
            } catch (error) {
                alert('Error al intentar iniciar sesión');
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<template>
    <Form :validation-schema="schema" @submit="onSubmit">
        <Field type="text" class="outline-none w-full border border-gray-300 p-2 rounded-lg mb-4 focus:border-cyan-600" placeholder="Usuario" name="username" />
        <ErrorMessage name="username" class="text-red-500 text-xs" />
        <Field type="password" class="outline-none w-full border border-gray-300 p-2 rounded-lg mb-4 focus:border-cyan-600" name="password" placeholder="Contraseña" />
        <ErrorMessage name="password" class="text-red-500 text-xs mb-6" />
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-lg" :disabled="loading">
            <span v-if="!loading">Ingresar</span>
            <span v-else>Cargando...</span>
        </button>
    </Form>
</template>