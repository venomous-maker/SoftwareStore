<!-- resources/js/Layouts/GuestLayout.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Link, Head } from '@inertiajs/vue3';

// Define props and types
interface Props {
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'CodeNexus - Premium Software Marketplace',
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
        <header class="bg-white shadow-sm sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <!-- Logo and Main Nav -->
                    <div class="flex items-center">
                        <Link href="/" class="flex-shrink-0 flex items-center">
                            <span class="text-blue-600 text-xl font-bold">CodeNexus</span>
                        </Link>

                        <!-- Desktop Navigation -->
                        <nav class="hidden lg:ml-10 lg:flex lg:space-x-8">
                            <Link
                                v-for="category in categories"
                                :key="category.name"
                                :href="category.href"
                                class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
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
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search software..."
                                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <!-- Shopping Cart -->
                        <Link href="/cart" class="text-gray-600 hover:text-gray-900">
                            <span class="sr-only">Shopping cart</span>
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span class="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
                            </div>
                        </Link>

                        <!-- Authentication -->
                        <div class="flex items-center space-x-2">
                            <Link
                                href="/login"
                                class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/register"
                                class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm font-medium rounded-md"
                            >
                                Sign up
                            </Link>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex items-center lg:hidden">
                            <button
                                @click="toggleMobileMenu"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                            >
                                <span class="sr-only">Open main menu</span>
                                <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-show="mobileMenuOpen" class="lg:hidden">
                <div class="pt-2 pb-3 space-y-1">
                    <Link
                        v-for="category in categories"
                        :key="category.name"
                        :href="category.href"
                        class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                    >
                        {{ category.name }}
                    </Link>
                </div>
                <div class="pt-4 pb-3 border-t border-gray-200">
                    <div class="px-4 space-y-2">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search software..."
                                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <Link
                            href="/login"
                            class="block text-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/register"
                            class="block text-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md"
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
        <footer class="bg-white border-t border-gray-200">
            <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav class="flex flex-wrap justify-center">
                    <div class="px-5 py-2">
                        <Link href="/about" class="text-base text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                    </div>
                    <div class="px-5 py-2">
                        <Link href="/contact" class="text-base text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>
                    <div class="px-5 py-2">
                        <Link href="/terms" class="text-base text-gray-500 hover:text-gray-900">
                            Terms
                        </Link>
                    </div>
                    <div class="px-5 py-2">
                        <Link href="/privacy" class="text-base text-gray-500 hover:text-gray-900">
                            Privacy
                        </Link>
                    </div>
                    <div class="px-5 py-2">
                        <Link href="/support" class="text-base text-gray-500 hover:text-gray-900">
                            Support
                        </Link>
                    </div>
                </nav>
                <div class="mt-8 flex justify-center space-x-6">
                    <!-- Social Media Icons -->
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Facebook</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                <p class="mt-8 text-center text-base text-gray-400">
                    &copy; {{ new Date().getFullYear() }} CodeNexus. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>
