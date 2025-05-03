<template>
    <footer class="bg-gray-900 px-4 py-10 text-gray-300 sm:px-6 lg:px-8">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
            <!-- Organization Info -->
            <div>
                <h3 class="text-lg font-semibold text-white">
                    {{ organizationName }}
                </h3>
                <p class="mt-2 text-sm">{{ description }}</p>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="mb-3 font-semibold text-white">
                    {{ sectionTitles.quick }}
                </h4>
                <ul class="space-y-2 text-sm">
                    <li v-for="(link, i) in quickLinks" :key="'quick-' + i">
                        <a :href="link.href" class="hover:underline">{{
                            link.label
                        }}</a>
                    </li>
                </ul>
            </div>

            <!-- Support Links -->
            <div>
                <h4 class="mb-3 font-semibold text-white">
                    {{ sectionTitles.support }}
                </h4>
                <ul class="space-y-2 text-sm">
                    <li v-for="(link, i) in supportLinks" :key="'support-' + i">
                        <a :href="link.href" class="hover:underline">{{
                            link.label
                        }}</a>
                    </li>
                </ul>
            </div>

            <!-- Legal Links -->
            <div>
                <h4 class="mb-3 font-semibold text-white">
                    {{ sectionTitles.legal }}
                </h4>
                <ul class="space-y-2 text-sm">
                    <li v-for="(link, i) in legalLinks" :key="'legal-' + i">
                        <a :href="link.href" class="hover:underline">{{
                            link.label
                        }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Section -->
        <div
            class="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between border-t border-gray-700 pt-6 md:flex-row"
        >
            <p
                class="mb-4 text-center text-sm text-gray-400 md:mb-0 md:text-left"
            >
                {{ copyright }}
            </p>
            <div class="flex space-x-4">
                <a
                    v-for="(social, i) in socialLinks"
                    :key="'social-' + i"
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-400 transition hover:text-white"
                >
                    <component
                        :is="getIconComponent(social.icon)"
                        class="h-5 w-5"
                    />
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { Facebook, Github, Twitter } from 'lucide-vue-next';
import { defineComponent, h } from 'vue';

const props = defineProps({
    organizationName: {
        type: String,
        default: 'Software Store',
    },
    description: {
        type: String,
        default:
            'Premium software marketplace for professionals and businesses.',
    },
    quickLinks: {
        type: Array as () => { label: string; href: string }[],
        default: () => [
            { label: 'Browse Software', href: '/browse' },
            { label: 'Categories', href: '/categories' },
            { label: 'Deals & Discounts', href: '/deals' },
            { label: 'New Releases', href: '/new-releases' },
        ],
    },
    supportLinks: {
        type: Array as () => { label: string; href: string }[],
        default: () => [
            { label: 'Help Center', href: '/help' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Returns & Refunds', href: '/returns' },
        ],
    },
    legalLinks: {
        type: Array as () => { label: string; href: string }[],
        default: () => [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'License Information', href: '/licenses' },
            { label: 'Cookie Policy', href: '/cookies' },
        ],
    },
    socialLinks: {
        type: Array as () => {
            icon: 'facebook' | 'twitter' | 'github';
            href: string;
        }[],
        default: () => [
            { icon: 'facebook', href: '#' },
            { icon: 'twitter', href: '#' },
            { icon: 'github', href: '#' },
        ],
    },
    copyright: {
        type: String,
        default: '© 2025 CodeNexus. All rights reserved.',
    },
    sectionTitles: {
        type: Object as () => {
            quick: string;
            support: string;
            legal: string;
        },
        default: () => ({
            quick: 'Quick Links',
            support: 'Support',
            legal: 'Legal',
        }),
    },
});

function getIconComponent(name: string) {
    switch (name) {
        case 'facebook':
            return Facebook;
        case 'twitter':
            return Twitter;
        case 'github':
            return Github;
        default:
            return defineComponent(() => () => h('span', '❓'));
    }
}
</script>
