import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { InputFieldType } from './type'

const InputField = ({
    label,
    name,
    id,
    type,
    placeholder,
    className = '',
}: InputFieldType) => {
    return (
        <div className="grid w-full items-center gap-2">
            <Label htmlFor={id} className='text-neutral-700'>{label}</Label>
            <Input 
                type={type || 'text'}
                name={name} 
                id={id} 
                placeholder={placeholder} 
                className={`w-full h-12 px-4 py-3 border-neutral-300 focus-visible:border-brand-300 focus-visible:ring-brand-300/20 focus-visible:ring-3 ${className}`}
            />
        </div>
    )
}

export default InputField