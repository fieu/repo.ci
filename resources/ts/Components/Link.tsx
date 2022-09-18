import clsx from 'clsx'
import React from 'react'

interface Props {
    href: string
    className?: string
    children?: React.ReactNode
}

const Link = ({ href, className, children }: Props) => {
    return (
        <a href={href} className={clsx('text-white hover:border-b-2 hover:border-cyan-300', className)}>
            {children}
        </a>
    )
}

export default Link
