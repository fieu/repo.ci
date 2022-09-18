import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Link from '../Components/Link'

const navigation = [
    { name: 'Projects', href: '#', current: false },
    { name: 'New', href: '#', current: false },
]

export default function Layout({ children }) {
    const { user } = usePage().props
    return (
        <main>
            <div>
                {' '}
                <header className='flex'>
                    <nav className='flex-1'>
                        {navigation.map((item, index) => {
                            return (
                                <div key={index} className={'inline'} >
                                    <a href={item.href} className={
                                        'text-white hover:border-b-2 hover:border-cyan-300'
                                    }>
                                        {item.name}
                                    </a>
                                    <span className="text-zinc-500 cursor-default">
                                    {navigation.length !== index + 1 ? ' | ' : ' '}
                                    </span>
                                </div>
                            )
                        })}
                    </nav>
                    <nav>
                        <Link href={route('auth.logout')}>
                            Logout (<span className='text-cyan-300'>{user.username}</span>)
                        </Link>
                    </nav>
                </header>
            </div>
            <article className='mt-6'>{children}</article>
        </main>
    )
}
