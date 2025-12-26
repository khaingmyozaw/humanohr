"use client"

import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { motion } from 'motion/react'

import GridShape from '@/components/common/GridShape'
import InputField from '@/components/form/input/InputField'
import { Button } from '@/components/ui/button'
import GoogleIcon from '@/components/icons/google'
import MicrosoftIcon from '@/components/icons/microsoft'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '../ui/checkbox'
import DatePicker from '../form/datepicker/DatePicker'
import SelectField from '../form/select/SelectField'
import { isValid } from 'date-fns'

const SignInForm = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const valid = getPasswordValidation(password);

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsValid(e.target.value === password)
    }

    return (
        <motion.div
            layout
            className="relative w-full h-full lg:w-1/2 p-5 lg:p-0 bg-neutral-50 lg:overflow-auto"
        >
            <motion.div
                layout
                className="h-auto max-w-md mx-auto px-1 md:py-8 flex flex-col items-center gap-6 relative z-1 overflow-y-auto"
            >
                <div
                    className="w-full mb-2"
                >
                    <div className="flex max-w-sm flex-col items-center gap-1 mb-4 lg:hidden">
                        <Link href="/" className="flex items-center">
                            <Image
                                width={48}
                                height={48}
                                src="/images/logos/logo-dark.svg"
                                alt='Human Hr Logo'
                                className='pointer-events-none'
                            />
                            <h3
                                className="font-bold text-neutral-800 text-title-sm">
                                Humano HR
                            </h3>
                        </Link>

                        <p className="text-center text-black/60">
                            Manage employees, attendance, payroll, and core HR operations in one centralized platform
                        </p>
                    </div>
                    <h1
                        className="mb- font-semibold text-neutral-800 text-title-sm dark:text-white/90 sm:text-title-md"
                    >
                        Sign Up
                    </h1>
                    <p
                        className="text-sm text-gray-500 dark:text-gray-400"
                    >
                        Welcome to Humano HR!
                    </p>
                </div>

                <InputField label='Name' name='name' id='name' placeholder='Mr. Boss' />

                <InputField label='Email' name='email' id='email' placeholder='hr@company.com' />

                <DatePicker label='Date of birth' placeholder='Please select a date' />

                <div className="w-full flex flex-col gap-3">
                    <Label htmlFor="gender" className="px-1">
                        Gender
                    </Label>
                    <SelectField
                        placeholder='Please select your gender'
                        label='Gender'
                        items={['Male', 'Female', 'Other']}
                        className='inline-flex !h-12 w-full px-4 py-3 rounded-lg font-normal text-neutral-400 bg-transparent border-neutral-400 focus-visible:border-brand-300 focus-visible:ring-brand-300/20 focus-visible:ring-3 hover:bg-neutral-100 hover:text-neutral-500'
                    />
                </div>

                {/* password */}
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor='password' className='text-neutral-700'>Password</Label>
                    <div className="h-auto relative">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            id='password'
                            value={password}
                            className='w-full h-12 px-4 py-3 border-neutral-400 focus-visible:border-brand-300 focus-visible:ring-brand-300/20 focus-visible:ring-3'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <motion.span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute z-3 -translate-y-1/2 cursor-pointer right-4 top-1/2 "
                        >
                            {showPassword ? (
                                <Eye
                                    size={20}
                                    className="text-neutral-500"
                                />
                            ) : (
                                <EyeOff
                                    size={20}
                                    className="text-neutral-500"
                                />
                            )}
                        </motion.span>
                    </div>
                    {/* password validation */}
                    {
                        password.length > 0 ?
                            <div className="w-full">
                                <div className="flex gap-2">
                                    {
                                        valid.classes.map((c, i) => (
                                            <div
                                                key={"valid-" + i}
                                                className={clsx(
                                                    "h-1 w-full rounded",
                                                    c
                                                )}
                                            ></div>
                                        ))
                                    }
                                </div>
                                {
                                    valid.message && valid.color ?
                                        <small
                                            className={valid.color}>
                                            {valid.message}
                                        </small>
                                        : ''
                                }
                            </div>
                            : ''
                    }
                </div>
                {/* confirm password */}
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor='confirm_password' className='text-neutral-700'>Confirm Password</Label>
                    <div className="h-auto relative">
                        <Input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name='confirm_password'
                            id='confirm_password'
                            className={clsx(
                                'w-full h-12 px-4 py-3 border-neutral-400 focus-visible:border-brand-300 focus-visible:ring-brand-300/20 focus-visible:ring-3',
                                {
                                    'focus-visible:border-brand-300 focus-visible:ring-brand-300/20': isValid === null,
                                    'focus-visible:border-green-500 focus-visible:ring-green-500/20': isValid === true,
                                    'focus-visible:border-red-500 focus-visible:ring-red-500/20': isValid === false,
                                }
                            )}
                            onChange={handleConfirmPassword}
                        />
                        <motion.span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute z-3 -translate-y-1/2 cursor-pointer right-4 top-1/2 "
                        >
                            {showConfirmPassword ? (
                                <Eye
                                    size={20}
                                    className="text-neutral-500"
                                />
                            ) : (
                                <EyeOff
                                    size={20}
                                    className="text-neutral-500"
                                />
                            )}
                        </motion.span>
                    </div>
                </div>

                <div
                    className="w-full flex justify-between items-start text-neutral-800">

                    <div className="w-full flex items-start gap-1">
                        <Checkbox id='agree' name='is_agree' className='mt-1' />
                        <p className="ml-1 inline-block text-sm text-neutral-500">
                            By creating an account means you agree to the
                            <Link
                                className="mr-1 text-brand-500"
                                href='/'
                            >
                                Terms and Conditions,
                            </Link>
                            and our
                            <Link
                                href='/'
                                className="ml-1 text-brand-500"
                            >
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>

                <Button className='h-11 w-full px-4 py-5 rounded-lg bg-brand-500 hover:bg-brand-700'>
                    Sign up
                </Button>

                <div className="flex gap-1 text-start">
                    <p className='text-sm font-normal text-center text-neutral-700 sm:text-start'>
                        Already have an account?
                    </p>
                    <Link
                        href="/reset-password"
                        className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Horizontal line */}
                <div className="w-full relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="p-2 text-gray-400 bg-neutral-50 dark:bg-neutral-900 sm:px-5 sm:py-2">
                            Or
                        </span>
                    </div>
                </div>

                {/* Oauth */}
                <div className="w-full mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                    <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-neutral-700 transition-colors bg-neutral-100 rounded-lg px-4 hover:bg-neutral-200 hover:text-neutral-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                        <GoogleIcon />
                        Sign in with Google
                    </button>
                    <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-neutral-700 transition-colors bg-neutral-100 rounded-lg px-4 hover:bg-neutral-200 hover:text-neutral-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                        <MicrosoftIcon />
                        Sign in with Microsoft
                    </button>
                </div>
            </motion.div>

            <GridShape className='lg:hidden' />
        </motion.div>
    )
}

function getPasswordValidation(password: string) {

    let len = password.length;

    if (len > 0 && len < 8) {
        return {
            classes: [
                'bg-red-500',
                'bg-neutral-300',
                'bg-neutral-300',
            ],
            color: "text-red-500",
            message: "Password must be at least 8 character length",
        };
    }; // weak

    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);

    if (len >= 8 && hasNumber && hasSymbol) {
        return {
            classes: [
                'bg-green-500',
                'bg-green-500',
                'bg-green-500',
            ],

        };
    }; // strong

    return {
        classes: [
            'bg-yellow-400',
            'bg-yellow-400',
            'bg-neutral-300',
        ],
        color: "text-yellow-400",
        message: "Password should be should included numbers and special characters",
    };; // medium
}

export default SignInForm