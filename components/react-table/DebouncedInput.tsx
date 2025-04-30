import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import Input from '../ui/Input'

interface IDebouncedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: IDebouncedInputProps) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value, debounce])

  return (
    <Input
      icon={
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      }
      containerStyle="h-6"
      value={value}
      onChange={e => setValue(e.target.value)}
      {...props}
    />
  )
}

export default DebouncedInput