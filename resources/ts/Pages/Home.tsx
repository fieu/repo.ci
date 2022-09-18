import React from 'react'
import Layout from './Layout'
import UserData = App.Data.UserData

type Props = {
    user: UserData
}

const Home = ({ user }: Props) => {
    return (
        <>
            <h1>Welcome</h1>
            <p>Hello {user.name}, welcome to your first Inertia app!</p>
        </>
    )
}

Home.layout = (page: React.ReactNode) => <Layout title='Welcome'>{page}</Layout>

export default Home
