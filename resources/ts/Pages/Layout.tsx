import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Link from '../Components/Link'
import clsx from 'clsx'
import UserData = App.Data.UserData
import { PagePropsInterface } from '../types/shared'

type Props = {
    children?: React.ReactNode
    title?: string
}

type NavigationItem = {
    name: string
    href: string
    current: boolean
    color: string
}

const navigation: NavigationItem[] = [
    { name: 'Profile', href: '#', current: false, color: 'text-green-400 hover:border-green-400' },
    { name: 'Projects', href: '#', current: false, color: 'text-yellow-300 hover:border-yellow-300' },
    { name: 'Servers', href: '#', current: false, color: 'text-blue-400 hover:border-blue-400' },
]

export default function Layout({ children }: Props) {
    const { user } = usePage<PagePropsInterface>().props
    return (
        <>
            <main className='p-4 border-zinc-700 border rounded-lg'>
                <div>
                    {' '}
                    <header className='flex'>
                        <nav className='flex-1'>
                            {navigation.map((item, index) => {
                                return (
                                    <div key={index} className={'inline'}>
                                        <a href={item.href} className={clsx('text-white hover:border-b-2', item.color)}>
                                            {item.name}
                                        </a>
                                        <span className='text-zinc-500 cursor-default'>
                                            {navigation.length !== index + 1 ? ' | ' : ' '}
                                        </span>
                                    </div>
                                )
                            })}
                        </nav>
                        {user && (
                            <nav>
                                <Link href={route('auth.logout')} className='text-red-400 hover:border-red-400'>
                                    Logout (<span className='text-cyan-300'>{user.name}</span>)
                                </Link>
                            </nav>
                        )}
                    </header>
                </div>
                <article className='mt-6'>{children}</article>
            </main>
            <footer>
                <p className='mt-6'>
                    Made by <Link href='https://sheldon.is'>Sheldon</Link>
                </p>
            </footer>
        </>
    )
}
