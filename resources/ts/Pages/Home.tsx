import React from 'react'
import Layout from './Layout'
import UserData = App.Data.UserData
import Link from '../Components/Link'

type Props = {
    user: UserData
}

const Home = ({ user }: Props) => {
    return (
        <div>
            <h1 className='text-2xl border-b-2 border-zinc-600'>Profile</h1>
            <ul className='mt-4 mx-4 list-disc'>
                <li>
                    User: <Link href={'https://github.com/' + user.name}>{user.name}</Link>
                </li>
                <li>
                    Email: <span className='text-white'>{user.email}</span>
                </li>
                <li>
                    Created At: <span className='text-white'>{new Date(user.created_at).toLocaleString()}</span>
                </li>
            </ul>
        </div>
    )
}

Home.layout = (page: React.ReactNode) => <Layout title='Home'>{page}</Layout>

export default Home
