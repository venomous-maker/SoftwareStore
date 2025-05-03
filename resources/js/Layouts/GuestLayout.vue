<!-- resources/js/Layouts/GuestLayout.vue -->
<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

// Define props and types
interface Props {
    title?: string;
    organizationName?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'CodeNexus - Premium Software Marketplace',
    organizationName: 'Software Store',
});

// Mobile navigation state
const mobileMenuOpen = ref(false);

// Categories for the navigation
const categories = [
    { name: 'Web Applications', href: '/category/web-applications' },
    { name: 'Mobile Apps', href: '/category/mobile-apps' },
    { name: 'Desktop Software', href: '/category/desktop' },
    { name: 'Development Tools', href: '/category/dev-tools' },
    { name: 'Custom Solutions', href: '/category/custom' },
];

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Close mobile menu when window resizes to desktop size
onMounted(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && mobileMenuOpen.value) {
            mobileMenuOpen.value = false;
        }
    });
});
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <Head :title="title" />

        <!-- Header -->
        <header class="sticky top-0 z-40 bg-white shadow-sm">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <!-- Logo and Main Nav -->
                    <div class="flex items-center">
                        <Link href="/" class="flex flex-shrink-0 items-center">
                            <span class="text-xl font-bold text-blue-600"
                                >CodeNexus</span
                            >
                        </Link>

                        <!-- Desktop Navigation -->
                        <nav class="hidden lg:ml-10 lg:flex lg:space-x-8">
                            <Link
                                v-for="category in categories"
                                :key="category.name"
                                :href="category.href"
                                class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            >
                                {{ category.name }}
                            </Link>
                        </nav>
                    </div>

                    <!-- Search, Cart, and Auth -->
                    <div class="flex items-center space-x-4">
                        <!-- Search Box -->
                        <div class="hidden md:block">
                            <div class="relative">
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search software..."
                                    class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <!-- Shopping Cart -->
                        <Link
                            href="/cart"
                            class="text-gray-600 hover:text-gray-900"
                        >
                            <span class="sr-only">Shopping cart</span>
                            <div class="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span
                                    class="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                                >
                                    0
                                </span>
                            </div>
                        </Link>

                        <!-- Authentication -->
                        <div class="flex items-center space-x-2">
                            <Link
                                href="/login"
                                class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/register"
                                class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                Sign up
                            </Link>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex items-center lg:hidden">
                            <button
                                @click="toggleMobileMenu"
                                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                            >
                                <span class="sr-only">Open main menu</span>
                                <svg
                                    v-if="!mobileMenuOpen"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-show="mobileMenuOpen" class="lg:hidden">
                <div class="space-y-1 pb-3 pt-2">
                    <Link
                        v-for="category in categories"
                        :key="category.name"
                        :href="category.href"
                        class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                    >
                        {{ category.name }}
                    </Link>
                </div>
                <div class="border-t border-gray-200 pb-3 pt-4">
                    <div class="space-y-2 px-4">
                        <div class="relative">
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search software..."
                                class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                        <Link
                            href="/login"
                            class="block w-full rounded-md bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-700"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/register"
                            class="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <Footer
            :organization-name="organizationName"
            :copyright="
                '@ ' +
                new Date().getFullYear() +
                ' ' +
                organizationName +
                '. All rights reserved.'
            "
        ></Footer>
    </div>
</template>
