"use client"

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import GridShape from '@/components/common/GridShape'
import CheckboxField from '@/components/form/input/CheckboxField'
import InputField from '@/components/form/input/InputField'
import { Button } from '@/components/ui/button'
import GoogleIcon from '@/components/icons/google'
import MicrosoftIcon from '@/components/icons/microsoft'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative p-6 sm:p-0 w-full h-full lg:w-1/2 bg-neutral-50"
    >
      <div
        className="h-full max-w-md mx-auto py-6 md:py-8 flex flex-col lg:justify-center items-center gap-6 relative z-1"
      >
        <div
          className="w-full mb-2"
        >
          <div className="flex max-w-sm flex-col items-center mb-4 lg:hidden">
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
            Sign In
          </h1>
          <p
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Enter your email and password to sign in!
          </p>
        </div>

        <InputField label='Email' name='email' id='email' placeholder='hr@company.com' />

        <div className="grid w-full items-center gap-2">
          <Label htmlFor='password' className='text-neutral-700'>Password</Label>
          <div className="h-auto relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              className='w-full h-12 px-4 py-3 border-neutral-300 focus-visible:border-brand-300 focus-visible:ring-brand-300/20 focus-visible:ring-3'
            />
            <span
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
            </span>
          </div>
        </div>

        <div
          className="w-full flex justify-between text-neutral-800">
          <CheckboxField label='Remember me' id='remember' name='is_remember' />

          <Link
            href="/reset-password"
            className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
          >
            Forgot password?
          </Link>
        </div>

        <Button className='h-11 w-full px-4 py-5 rounded-lg bg-brand-500 hover:bg-brand-700'>
          Sign in
        </Button>

        <div className="flex gap-1 text-start">
          <p className='text-sm font-normal text-center text-neutral-700 sm:text-start'>Don't have an account?</p>
          <Link
            href="/reset-password"
            className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
          >
            Sign Up
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
        <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
          <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-neutral-700 transition-colors bg-neutral-100 rounded-lg px-4 hover:bg-neutral-200 hover:text-neutral-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
            <GoogleIcon />
            Sign in with Google
          </button>
          <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-neutral-700 transition-colors bg-neutral-100 rounded-lg px-4 hover:bg-neutral-200 hover:text-neutral-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
            <MicrosoftIcon />
            Sign in with Microsoft
          </button>
        </div>
      </div>

      <GridShape className='lg:hidden' />
    </div>
  )
}

export default SignIn