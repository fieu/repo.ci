import './bootstrap'
import '../css/app.css'

import React from 'react'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'repo.ci'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el)
        return root.render(<App {...props} />)
    },
})

InertiaProgress.init({ color: '#fff' })
