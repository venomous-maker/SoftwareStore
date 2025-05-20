import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// Define __dirname for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        AutoImport({
            imports: ['vue', '@vueuse/core'],
            dirs: [
                './resources/js/Composables/**',
                './resources/js/repositories/**',
                './resources/js/utils/**',
                './resources/js/repositories/**',
            ],
            dirsScanOptions: {
                types: true,
            },
            viteOptimizeDeps: true,
            vueTemplate: true,
            dts: 'resources/js/auto-imports.d.ts',
        }),
        Components({
            dts: 'resources/js/components.d.ts',
            dirs: ['resources/js/Components/**'], // Adjust to your component path
            extensions: ['vue'],
            deep: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@Components': path.resolve(__dirname, 'resources/js/Components'),
            '@Composables': path.resolve(__dirname, 'resources/js/Composables'),
            '@Pages': path.resolve(__dirname, 'resources/js/Pages'),
            '@Repositories': path.resolve(
                __dirname,
                'resources/js/repositories',
            ),
            '@stores': path.resolve(__dirname, 'resources/js/stores'),
            '@Utils': path.resolve(__dirname, 'resources/js/utils'),
            '@Libs': path.resolve(__dirname, 'resources/js/lib'),
            '@Layouts': path.resolve(__dirname, 'resources/js/Layouts'),
            'ziggy-js': path.resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
});
