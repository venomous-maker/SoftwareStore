<template>
    <GuestLayout>
    <div
        class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    >
        <div class="w-full max-w-md">
            <!-- Logo -->
            <div class="text-center">
                <img
                    class="mx-auto h-12 w-auto"
                    src="/logo.svg"
                    alt="Your Company Logo"
                />
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p class="mt-2 text-sm text-gray-600">
                    Or
                    <Link
                        href="/register"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        create a new account
                    </Link>
                </p>
            </div>

            <!-- Form -->
            <form class="mt-8 space-y-6" @submit.prevent="login">
                <div
                    v-if="errorMessage"
                    class="mb-4 border-l-4 border-red-400 bg-red-50 p-4"
                >
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg
                                class="h-5 w-5 text-red-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700">
                                {{ errorMessage }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only"
                            >Email address</label
                        >
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            v-model="form.email"
                            :class="{ 'border-red-300': errors.email }"
                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email address"
                        />
                        <p
                            v-if="errors.email"
                            class="mt-1 text-sm text-red-600"
                        >
                            {{ errors.email }}
                        </p>
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <div class="relative">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                id="password"
                                name="password"
                                autocomplete="current-password"
                                required
                                v-model="form.password"
                                :class="{ 'border-red-300': errors.password }"
                                class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                            >
                                <svg
                                    v-if="showPassword"
                                    class="h-5 w-5 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                    />
                                </svg>
                                <svg
                                    v-else
                                    class="h-5 w-5 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p
                            v-if="errors.password"
                            class="mt-1 text-sm text-red-600"
                        >
                            {{ errors.password }}
                        </p>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            v-model="form.remember"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            for="remember-me"
                            class="ml-2 block text-sm text-gray-900"
                            >Remember me</label
                        >
                    </div>

                    <div class="text-sm">
                        <Link
                            href="/forgot-password"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        :disabled="loading"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <span
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <svg
                                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        <span v-if="loading">Processing...</span>
                        <span v-else>Sign in</span>
                    </button>
                </div>

                <!-- Social login options -->
                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="bg-gray-50 px-2 text-gray-500"
                                >Or continue with</span
                            >
                        </div>
                    </div>

                    <div class="mt-6 grid grid-cols-3 gap-3">
                        <div>
                            <a
                                href="#"
                                @click.prevent="socialLogin('google')"
                                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                            >
                                <span class="sr-only">Sign in with Google</span>
                                <svg
                                    class="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div>
                            <a
                                href="#"
                                @click.prevent="socialLogin('github')"
                                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                            >
                                <span class="sr-only">Sign in with GitHub</span>
                                <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div>
                            <a
                                href="#"
                                @click.prevent="socialLogin('facebook')"
                                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                            >
                                <span class="sr-only"
                                    >Sign in with Facebook</span
                                >
                                <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </GuestLayout>
</template>

<script lang="ts">
import { router } from '@inertiajs/vue3';
import axios from 'axios';
import { defineComponent, reactive, ref } from 'vue';
import GuestLayout from '@Layouts/GuestLayout.vue';
interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

interface FormErrors {
    email?: string;
    password?: string;
}

export default defineComponent({
    name: 'LoginPage',
    components: { GuestLayout },

    setup() {
        const loading = ref(false);
        const showPassword = ref(false);
        const errorMessage = ref('');

        const form = reactive<LoginForm>({
            email: '',
            password: '',
            remember: false,
        });

        const errors = reactive<FormErrors>({});

        const login = async () => {
            // Reset errors
            errorMessage.value = '';
            Object.keys(errors).forEach(
                (key) => delete errors[key as keyof FormErrors],
            );

            loading.value = true;

            try {
                // Get CSRF token first (Laravel requirement)
                await axios.get('/sanctum/csrf-cookie');

                // Attempt login
                const response = await axios.post('/api/login', form);

                if (response.data.success) {
                    // Redirect to dashboard after successful login
                    router.push({ url: '/dashboard' });
                } else {
                    errorMessage.value =
                        response.data.message ||
                        'Login failed. Please check your credentials.';
                }
            } catch (error: any) {
                if (error.response && error.response.status === 422) {
                    // Validation errors
                    const validationErrors = error.response.data.errors;

                    if (validationErrors) {
                        Object.keys(validationErrors).forEach((key) => {
                            if (key === 'email') {
                                errors.email = validationErrors.email[0];
                            } else if (key === 'password') {
                                errors.password = validationErrors.password[0];
                            }
                        });
                    }
                } else {
                    // General error
                    errorMessage.value =
                        error.response?.data?.message ||
                        'An error occurred. Please try again.';
                }
            } finally {
                loading.value = false;
            }
        };

        const socialLogin = (provider: string) => {
            window.location.href = `/auth/${provider}/redirect`;
        };

        return {
            form,
            errors,
            loading,
            showPassword,
            errorMessage,
            login,
            socialLogin,
        };
    },
});
</script>
