import SignInForm from '@/components/auth/SignInForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Humano HR | Sign in",
  description: "This is sign in page for Humano HR system"
}

const SignIn = () => {
  return (
    <SignInForm />
  )
}

export default SignIn