'use client'

import { cn } from '@/data/utils/cn'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { InputHTMLAttributes, forwardRef, KeyboardEvent } from 'react'

export type TextInputProps = {
  name?: string
  label?: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
  hint?: string
  isHintVisible?: boolean
  required?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      icon,
      label,
      disabled = false,
      error,
      name,
      className,
      hint,
      isHintVisible = true,
      required = false,
      ...props
    },
    ref
  ) => {
    const isHintActive = hint && !error

    function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
      const target = e.target as HTMLInputElement
      if (e.code === 'Escape') target.blur()
    }

    return (
      <div className="group">
        {!!label && (
          <label
            htmlFor={name}
            className={cn(
              'block font-medium leading-6 text-gray-900 mb-2 text-base',
              error && 'text-error'
            )}
          >
            {label}
          </label>
        )}

        <div className="relative rounded-md h-full">
          {!!icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-dark-high">
              {icon}
            </div>
          )}
          <input
            id={name}
            ref={ref}
            type="text"
            data-icon={!!icon}
            className={cn(
              'block w-full rounded-lg border border-gray-300 group-hover:border-dark-medium disabled:group-hover:border-gray-300 outline-gray-300 group-focus:outline-4 outline-offset-2 transition-colors pl-3 py-1.5 data-[icon=true]:pl-9 pr-4 text-dark-high placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-1 disabled:bg-gray-200/45 disabled:cursor-not-allowed',
              error && 'border-error ring-error outline-red-300 pl-4',
              className
            )}
            disabled={disabled}
            {...(error
              ? { 'aria-invalid': 'true', 'aria-describedby': `${name}-error` }
              : {})}
            {...(isHintActive
              ? {
                  'aria-describedby': `${name}-hint`
                }
              : {})}
            {...(required ? { 'aria-required': 'true', required: true } : {})}
            onKeyUp={handleKeyUp}
            {...props}
          />
          {isHintActive && (
            <p
              id={`${name}-hint`}
              className={cn(
                !isHintVisible && 'sr-only',
                'mt-2 text-sm text-gray-400'
              )}
            >
              {hint}
            </p>
          )}
        </div>

        {!!error && (
          <p
            className="mt-2 text-sm font-bold text-error flex gap-2 items-center"
            id={`${name}-error`}
          >
            <ExclamationTriangleIcon
              className="h-5 w-5 text-error"
              aria-hidden="true"
            />
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
