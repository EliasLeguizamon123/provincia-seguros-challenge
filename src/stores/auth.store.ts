import { defineStore } from "pinia";
import type LoginFormValues   from '@/models/loginFormValues.model';

/**
 * Definición de la tienda de autenticación usando Pinia.
 * La tienda maneja el estado de autenticación, incluyendo los datos de inicio de sesión y el token de autenticación.
 */
export const useAuthStore = defineStore('auth', {
    state: () => ({
        /**
         * Datos de inicio de sesión del usuario.
         * @type {LoginFormValues | null}
         */
        loginData: {} as LoginFormValues | null,
        /**
         * Token de autenticación del usuario.
         * @type {string}
         */
        token: '' as string,
    }),
    actions: {
        /**
         * Establece los datos de inicio de sesión del usuario.
         * @param {LoginFormValues} data - Datos del formulario de inicio de sesión.
         */
        setLoginData(data: LoginFormValues) {
            this.loginData = data;
        },
        /**
         * Establece el token de autenticación del usuario.
         * @param {string} token - Token de autenticación.
         */
        setToken(token: string) {
            this.token = token;
        },
        /**
         * Limpia los datos de autenticación, incluyendo los datos de inicio de sesión y el token.
         */
        clearAuthData() {
            this.loginData = null;
            this.token = '';
        },
    },
});