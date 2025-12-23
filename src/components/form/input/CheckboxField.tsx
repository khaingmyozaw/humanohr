import React from 'react'
import { InputFieldType } from './type'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

const CheckboxField = ({
  label,
  name,
  id,
  className = '',
}: InputFieldType) => {
  return (
    <div className="flex items-center gap-1">
      <Checkbox id={id} name={name} className={className} />
      <Label htmlFor={id} className='text-neutral-700'>{label}</Label>
    </div>
  )
}

export default CheckboxField