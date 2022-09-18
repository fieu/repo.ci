import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Link from '../Components/Link'

interface Props {
    children?: React.ReactNode
}

const navigation = [
    { name: 'Projects', href: '#', current: false },
    { name: 'New', href: '#', current: false },
]

export default function Layout({ children }: Props) {
    const { user } = usePage().props
    return (
        <>
            <main className='p-4 border-zinc-700 border'>
                <div>
                    {' '}
                    <header className='flex'>
                        <nav className='flex-1'>
                            {navigation.map((item, index) => {
                                return (
                                    <div key={index} className={'inline'}>
                                        <a
                                            href={item.href}
                                            className={'text-white hover:border-b-2 hover:border-cyan-300'}
                                        >
                                            {item.name}
                                        </a>
                                        <span className='text-zinc-500 cursor-default'>
                                            {navigation.length !== index + 1 ? ' | ' : ' '}
                                        </span>
                                    </div>
                                )
                            })}
                        </nav>
                        <nav>
                            <Link href={route('auth.logout')}>
                                Logout (<span className='text-cyan-300'>{user.name}</span>)
                            </Link>
                        </nav>
                    </header>
                </div>
                <article className='mt-6'>{children}</article>
            </main>
            <footer>
                <p className='mt-6 italic'>
                    Made by <Link href='https://sheldon.is'>sheldon</Link>
                </p>
            </footer>
        </>
    )
}
