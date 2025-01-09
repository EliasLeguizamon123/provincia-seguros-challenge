import { defineStore } from "pinia";
import type LoginFormValues   from '@/models/loginFormValues.model';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loginData: {} as LoginFormValues | null,
        token: '' as string,
    }),
    actions: {
        setLoginData(data: LoginFormValues) {
            this.loginData = data;
        },
        setToken(token: string) {
            this.token = token;
        },
        clearAuthData() {
            this.loginData = null;
            this.token = '';
        },
    },
});