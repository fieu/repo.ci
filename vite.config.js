import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import fs from 'fs'
import { homedir } from 'os'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import run from 'vite-plugin-run'

let host = 'repo.ci.test'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        run([
            {
                startup: true,
                name: 'typescript transform',
                run: ['php', 'artisan', 'typescript:transform'],
                condition: (file) => file.includes('Data.php'),
            },
        ]),
    ],
    server: detectServerConfig(host),
    resolve: {
        alias: {
            '@': '/resources/ts',
        },
    },
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
})

function detectServerConfig(host) {
    let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`)
    let certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`)

    if (!fs.existsSync(keyPath)) {
        return {}
    }

    if (!fs.existsSync(certificatePath)) {
        return {}
    }

    return {
        hmr: { host },
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
    }
}
