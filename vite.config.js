import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
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
            imports: [
                {
                    'ziggy-js': [
                        'Ziggy', // import { Ziggy } from 'ziggy-js'
                        'route'  // import route from 'ziggy-js'
                    ]
                }
            ],
            dts: 'resources/js/auto-imports.d.ts', // optional TypeScript support
        }),
        Components({
            dts: 'resources/js/components.d.ts',
            dirs: ['resources/js/Components'], // Adjust to your component path
            extensions: ['vue'],
            deep: true,
        }),
    ],
    build: {
        rollupOptions: {
            external: ['ziggy-js']
        }
    }
});
