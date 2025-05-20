import axios from 'axios';
import { defineStore } from 'pinia';

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    user: Record<string, any> | null;
}

export const useAuthStore = defineStore('auth', {
    persist: {
        key: 'auth',
        storage: localStorage, // or sessionStorage
    },
    state: (): AuthState => ({
        accessToken: null,
        refreshToken: null,
        user: null,
    }),

    actions: {
        async login(credentials: { email: string; password: string }) {
            try {
                const response = await axios.post('/api/login', credentials);
                const { access_token, refresh_token, user } = response.data;

                this.accessToken = access_token;
                this.refreshToken = refresh_token;
                this.user = user;

                axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
            } catch (error: any) {
                throw error?.response?.data || { message: 'Login failed' };
            }
        },

        logout() {
            this.accessToken = null;
            this.refreshToken = null;
            this.user = null;
            delete axios.defaults.headers.common.Authorization;
        },

        setAuthTokens(access: string, refresh: string) {
            this.accessToken = access;
            this.refreshToken = refresh;
            axios.defaults.headers.common.Authorization = `Bearer ${access}`;
        },
    },
});
