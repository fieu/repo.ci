import React from 'react'
import Layout from './Layout'
import { usePage } from '@inertiajs/inertia-react'

const Home = () => {
    const { user } = usePage().props
    return (
        <>
            <h1>Welcome</h1>
            <p>Hello {user.name}, welcome to your first Inertia app!</p>
        </>
    )
}

Home.layout = (page) => <Layout children={page} title='Welcome' />

export default Home
