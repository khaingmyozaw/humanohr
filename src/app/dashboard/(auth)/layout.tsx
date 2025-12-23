import GridShape from '@/components/common/GridShape'
import { ThemeProvider } from '@/context/ThemeProvider'
import Image from 'next/image'
import Link from 'next/link'
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
                <div className="hidden lg:flex w-full h-full lg:w-1/2 p-8 bg-brand-950 overflow-hidden justify-center items-center relative">
                    <GridShape />
                    <div className="flex max-w-sm flex-col items-center">
                        <Link href="/" className="mb-4 flex items-center gap-1">
                            <Image
                                width={60}
                                height={60}
                                src="/images/logos/logo-light.svg"
                                alt='Human Hr Logo'
                                className='pointer-events-none'
                            />
                            <h3
                                className="font-bold text-neutral-50 text-title-sm sm:text-title-md">
                                Humano HR
                            </h3>
                        </Link>
                        <p className="text-center text-white/60">
                            Manage employees, attendance, payroll, and core HR operations in one centralized platform
                        </p>
                    </div>
                </div>
                {children}
            </div>
            {/* </ThemeProvider> */}
        </div>
    )
}

export default AuthLayout