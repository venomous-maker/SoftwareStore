<!-- resources/js/Layouts/AuthenticatedLayout.vue -->
<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

// Get user from page props
const page = usePage();
const user = computed(() => page.props.auth.user);

// Mobile sidebar state
const sidebarOpen = ref(false);

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};

// Navigation items
const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: 'home' },
    { name: 'Browse Software', href: '/browse', icon: 'package' },
    { name: 'My Downloads', href: '/downloads', icon: 'download' },
    { name: 'Billing', href: '/billing', icon: 'credit-card' },
    { name: 'Support', href: '/support', icon: 'help-circle' },
];

const userNavigation = [
    { name: 'Your Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
    { name: 'Sign out', href: '/logout', method: 'post' },
];
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Off-canvas sidebar for mobile -->
        <div
            v-show="sidebarOpen"
            class="fixed inset-0 z-40 flex md:hidden"
            aria-modal="true"
        >
            <!-- Sidebar backdrop -->
            <div
                class="fixed inset-0 bg-gray-600 bg-opacity-75"
                @click="toggleSidebar"
                aria-hidden="true"
            ></div>

            <!-- Sidebar panel -->
            <div
                class="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5"
            >
                <!-- Close button -->
                <div class="absolute right-0 top-0 p-1">
                    <button
                        @click="toggleSidebar"
                        class="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <span class="sr-only">Close sidebar</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-gray-400"
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

                <!-- Logo -->
                <div class="flex flex-shrink-0 items-center px-4">
                    <Link href="/" class="text-xl font-bold text-blue-600"
                        >CodeNexus</Link
                    >
                </div>

                <!-- Navigation -->
                <div class="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav class="space-y-1 px-2">
                        <Link
                            v-for="item in navigation"
                            :key="item.name"
                            :href="item.href"
                            class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                            <!-- Icon based on item.icon value -->
                            <svg
                                v-if="item.icon === 'home'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'package'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'download'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'credit-card'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'help-circle'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {{ item.name }}
                        </Link>
                    </nav>
                </div>

                <!-- User menu (mobile) -->
                <div class="mt-5 border-t border-gray-200 pb-3 pt-4">
                    <div class="flex items-center px-4">
                        <div class="flex-shrink-0">
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white"
                            >
                                {{ user?.name?.charAt(0).toUpperCase() || 'U' }}
                            </div>
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-gray-800">
                                {{ user?.name }}
                            </div>
                            <div class="text-sm font-medium text-gray-500">
                                {{ user?.email }}
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <Link
                            v-for="item in userNavigation"
                            :key="item.name"
                            :href="item.href"
                            as="button"
                            class="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            {{ item.name }}
                        </Link>
                    </div>
                </div>
            </div>

            <div class="w-14 flex-shrink-0" aria-hidden="true">
                <!-- Dummy element to force sidebar to shrink to fit close icon -->
            </div>
        </div>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <div
                class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white"
            >
                <div class="flex h-16 flex-shrink-0 items-center bg-white px-4">
                    <Link href="/" class="text-xl font-bold text-blue-600"
                        >CodeNexus</Link
                    >
                </div>
                <div class="flex flex-1 flex-col overflow-y-auto">
                    <nav class="flex-1 space-y-1 bg-white px-2 py-4">
                        <Link
                            v-for="item in navigation"
                            :key="item.name"
                            :href="item.href"
                            class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            :class="{
                                'bg-gray-100 text-gray-900':
                                    $page.url.startsWith(item.href),
                            }"
                        >
                            <!-- Icon based on item.icon value -->
                            <svg
                                v-if="item.icon === 'home'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                :class="{
                                    'text-gray-500': $page.url.startsWith(
                                        item.href,
                                    ),
                                }"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'package'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                :class="{
                                    'text-gray-500': $page.url.startsWith(
                                        item.href,
                                    ),
                                }"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'download'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                :class="{
                                    'text-gray-500': $page.url.startsWith(
                                        item.href,
                                    ),
                                }"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'credit-card'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                :class="{
                                    'text-gray-500': $page.url.startsWith(
                                        item.href,
                                    ),
                                }"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                            <svg
                                v-else-if="item.icon === 'help-circle'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                :class="{
                                    'text-gray-500': $page.url.startsWith(
                                        item.href,
                                    ),
                                }"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {{ item.name }}
                        </Link>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Main content area -->
        <div class="flex flex-col md:pl-64">
            <div
                class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow"
            >
                <!-- Mobile menu button -->
                <button
                    @click="toggleSidebar"
                    class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
                >
                    <span class="sr-only">Open sidebar</span>
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
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <!-- Header content -->
                <div class="flex flex-1 justify-between px-4">
                    <div class="flex flex-1 items-center">
                        <!-- Search box could go here -->
                    </div>
                    <div class="ml-4 flex items-center md:ml-6">
                        <!-- Shopping cart -->
                        <Link
                            href="/cart"
                            class="relative rounded-full p-1 text-gray-400 hover:text-gray-500"
                        >
                            <span class="sr-only">View shopping cart</span>
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
                                class="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                            >
                                2
                            </span>
                        </Link>

                        <!-- Profile dropdown -->
                        <div class="group relative ml-3">
                            <div>
                                <button
                                    class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    <span class="sr-only">Open user menu</span>
                                    <div
                                        class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
                                    >
                                        {{
                                            user?.name
                                                ?.charAt(0)
                                                .toUpperCase() || 'U'
                                        }}
                                    </div>
                                </button>
                            </div>
                            <div
                                class="absolute right-0 mt-2 hidden w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:block"
                            >
                                <Link
                                    v-for="item in userNavigation"
                                    :key="item.name"
                                    :href="item.href"
                                    as="button"
                                    class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {{ item.name }}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page content -->
            <main class="flex-1">
                <div class="py-6">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <!-- Page content goes here -->
                        <slot />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
