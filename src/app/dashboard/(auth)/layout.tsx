import GridShape from '@/components/common/GridShape'
import { ThemeProvider } from '@/context/ThemeProvider'
import Image from 'next/image'
import React from 'react'

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='relative sm:p-0 bg-neutral-100 overflow-y-auto'>
            {/* <ThemeProvider> */}
            <div className="relative w-full h-screen flex">
                <div className="hidden lg:flex w-full h-full lg:w-1/2 p-8 bg-neutral-100 overflow-hidden justify-center items-center relative">
                <GridShape />
                    <img
                        width='100%'
                        src="/images/illustrations/go-together.webp"
                        alt='Team work image'
                        className='pointer-events-none'
                    />
                </div>
                {children}
            </div>
            {/* </ThemeProvider> */}
        </div>
    )
}

export default AuthLayout