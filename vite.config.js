import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

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
    ],
    build: {
        rollupOptions: {
            external: ['ziggy-js']
        }
    }
});
