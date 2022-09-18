import clsx from 'clsx'

const Link = ({ href, className, children }) => {
    return (
        <a href={href} className={clsx('text-white hover:border-b-2 hover:border-cyan-300', className)}>
            {children}
        </a>
    )
}

export default Link
