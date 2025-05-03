<!-- resources/js/Pages/Home.vue -->
<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import GuestLayout from '@Layouts/GuestLayout.vue';

// Featured software items
const featuredSoftware = [
    {
        id: 1,
        name: 'DevStudio Pro',
        category: 'Development Tools',
        description: 'Professional IDE for web and mobile developers',
        price: 89.99,
        image: '/api/placeholder/300/200',
        rating: 4.8,
        reviews: 345,
    },
    {
        id: 2,
        name: 'SecureVPN',
        category: 'Security',
        description: 'Fast, secure VPN with advanced encryption',
        price: 59.99,
        image: '/api/placeholder/300/200',
        rating: 4.7,
        reviews: 210,
    },
    {
        id: 3,
        name: 'CloudBackup',
        category: 'Utilities',
        description: 'Automated cloud backup solution for all devices',
        price: 49.99,
        image: '/api/placeholder/300/200',
        rating: 4.5,
        reviews: 178,
    },
    {
        id: 4,
        name: 'DesignMaster',
        category: 'Design Tools',
        description: 'Professional design suite for UI/UX designers',
        price: 129.99,
        image: '/api/placeholder/300/200',
        rating: 4.9,
        reviews: 402,
    },
];

// Categories
const categories = [
    {
        name: 'Web Applications',
        icon: '🌐',
        href: '/category/web-applications',
    },
    { name: 'Mobile Apps', icon: '📱', href: '/category/mobile-apps' },
    { name: 'Desktop Software', icon: '💻', href: '/category/desktop' },
    { name: 'Development Tools', icon: '🛠️', href: '/category/dev-tools' },
    { name: 'Security', icon: '🔒', href: '/category/security' },
    { name: 'Business', icon: '📊', href: '/category/business' },
    { name: 'Utilities', icon: '🔧', href: '/category/utilities' },
    { name: 'Design', icon: '🎨', href: '/category/design' },
];

// Testimonials
const testimonials = [
    {
        id: 1,
        content:
            'CodeNexus has transformed how our team sources software. The quality and support are unmatched.',
        author: 'Sarah Johnson',
        position: 'CTO, TechVision Inc.',
    },
    {
        id: 2,
        content:
            "Finding reliable software used to be a challenge until I discovered CodeNexus. Now it's my go-to marketplace.",
        author: 'Michael Chen',
        position: 'Lead Developer, StartupHive',
    },
    {
        id: 3,
        content:
            "The verification process ensures quality. I've purchased multiple tools and they've all exceeded expectations.",
        author: 'Jessica Miller',
        position: 'Product Manager, DataFlow Systems',
    },
];

// Search functionality
const searchQuery = ref('');
const isSearchFocused = ref(false);

const handleSearch = () => {
    // In a real application, this would redirect to search results
    console.log('Searching for:', searchQuery.value);
};
</script>

<template>
    <GuestLayout>
        <Head title="CodeNexus - Premium Software Marketplace" />

        <!-- Hero Section -->
        <div class="bg-blue-600">
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div class="text-center">
                    <h1
                        class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
                    >
                        Your Destination for Premium Software
                    </h1>
                    <p class="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
                        Web apps, mobile applications, desktop software, and
                        custom solutions - all in one place.
                    </p>

                    <!-- Search Bar -->
                    <div class="mx-auto mt-10 max-w-xl">
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
                                v-model="searchQuery"
                                type="text"
                                class="block w-full rounded-md border border-transparent bg-white py-4 pl-10 pr-3 leading-5 placeholder-gray-500 shadow-md focus:border-white focus:outline-none focus:ring-2 focus:ring-white sm:text-sm"
                                placeholder="Search for software, tools, or applications..."
                                @keyup.enter="handleSearch"
                            />
                            <div
                                class="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                                <button
                                    type="button"
                                    class="inline-flex items-center rounded-r-md border border-transparent bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    @click="handleSearch"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Categories Section -->
        <div class="bg-white py-12">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2
                    class="mb-8 text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
                >
                    Browse by Category
                </h2>
                <div
                    class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8"
                >
                    <a
                        v-for="category in categories"
                        :key="category.name"
                        :href="category.href"
                        class="flex flex-col items-center rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-md"
                    >
                        <span class="mb-2 text-3xl">{{ category.icon }}</span>
                        <span class="text-sm font-medium text-gray-900">{{
                            category.name
                        }}</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Featured Software Section -->
        <div class="bg-gray-50 py-12">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2
                        class="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                    >
                        Featured Software
                    </h2>
                    <p class="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
                        Discover our top-rated and most popular software
                        solutions
                    </p>
                </div>

                <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="product in featuredSoftware"
                        :key="product.id"
                        class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition-shadow hover:shadow-lg"
                    >
                        <div class="bg-gray-100 p-2">
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="h-40 w-full rounded object-cover"
                            />
                        </div>
                        <div class="p-5">
                            <h3 class="text-lg font-medium text-gray-900">
                                {{ product.name }}
                            </h3>
                            <p class="text-sm text-blue-600">
                                {{ product.category }}
                            </p>
                            <p class="mt-2 text-sm text-gray-500">
                                {{ product.description }}
                            </p>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="text-lg font-bold text-gray-900"
                                    >${{ product.price }}</span
                                >
                                <div class="flex items-center">
                                    <div class="flex items-center">
                                        <svg
                                            class="h-4 w-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <span
                                            class="ml-1 text-sm text-gray-600"
                                            >{{ product.rating }}</span
                                        >
                                    </div>
                                    <span class="mx-2 text-gray-400">•</span>
                                    <span class="text-sm text-gray-600"
                                        >{{ product.reviews }} reviews</span
                                    >
                                </div>
                            </div>
                            <button
                                class="mt-4 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <a
                        href="/browse"
                        class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        View All Software
                    </a>
                </div>
            </div>
        </div>

        <!-- Testimonial Section -->
        <div class="bg-white py-16">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2
                        class="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                    >
                        What Our Customers Say
                    </h2>
                </div>

                <div class="mt-12 grid gap-8 md:grid-cols-3">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.id"
                        class="rounded-lg border border-gray-200 bg-gray-50 p-6"
                    >
                        <svg
                            class="mb-4 h-8 w-8 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                        >
                            <path
                                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                            />
                        </svg>
                        <p class="mb-4 text-gray-600">
                            {{ testimonial.content }}
                        </p>
                        <div class="font-medium text-gray-900">
                            {{ testimonial.author }}
                        </div>
                        <div class="text-sm text-gray-500">
                            {{ testimonial.position }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-blue-700">
            <div
                class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16"
            >
                <h2
                    class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                >
                    <span class="block">Ready to dive in?</span>
                    <span class="block text-blue-200"
                        >Start browsing our software collection today.</span
                    >
                </h2>
                <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div class="inline-flex rounded-md shadow">
                        <a
                            href="/browse"
                            class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-gray-50"
                        >
                            Browse Now
                        </a>
                    </div>
                    <div class="ml-3 inline-flex rounded-md shadow">
                        <a
                            href="/register"
                            class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-800 px-5 py-3 text-base font-medium text-white hover:bg-blue-900"
                        >
                            Create Account
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <!-- Company Info -->
                    <div class="col-span-1 md:col-span-1">
                        <h3 class="text-xl font-bold text-white">CodeNexus</h3>
                        <p class="mt-2 text-sm text-gray-300">
                            Premium software marketplace for professionals and
                            businesses.
                        </p>
                        <div class="mt-4 flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-white">
                                <span class="sr-only">Facebook</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <span class="sr-only">Twitter</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <span class="sr-only">GitHub</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="col-span-1 md:col-span-1">
                        <h3
                            class="text-sm font-semibold uppercase tracking-wider text-white"
                        >
                            Quick Links
                        </h3>
                        <ul class="mt-4 space-y-4">
                            <li>
                                <a
                                    href="/browse"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Browse Software
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/categories"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/deals"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Deals & Discounts
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/new-releases"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    New Releases
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Support -->
                    <div class="col-span-1 md:col-span-1">
                        <h3
                            class="text-sm font-semibold uppercase tracking-wider text-white"
                        >
                            Support
                        </h3>
                        <ul class="mt-4 space-y-4">
                            <li>
                                <a
                                    href="/help"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/faq"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/returns"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Returns & Refunds
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Legal -->
                    <div class="col-span-1 md:col-span-1">
                        <h3
                            class="text-sm font-semibold uppercase tracking-wider text-white"
                        >
                            Legal
                        </h3>
                        <ul class="mt-4 space-y-4">
                            <li>
                                <a
                                    href="/privacy"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/licenses"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    License Information
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/cookies"
                                    class="text-base text-gray-300 hover:text-white"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-12 border-t border-gray-700 pt-8">
                    <p class="text-center text-base text-gray-400">
                        &copy; 2025 CodeNexus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </GuestLayout>
</template>
