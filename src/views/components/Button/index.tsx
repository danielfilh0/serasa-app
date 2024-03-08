import { cn } from '@/data/utils/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  isLoading?: boolean
  className?: string
  children: ReactNode
} & ButtonTypes

export function Button({
  variant = 'primary',
  disabled,
  isLoading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const variantsMap = {
    primary: 'bg-magenta-accent text-light-solid',
    secondary: 'bg-light-solid text-magenta-accent'
  }

  return (
    <button
      className={cn(
        variantsMap[variant],
        'w-full rounded-lg h-10 md:h-12 text-base text-center font-bold transition-colors border border-transparent hover:border-dark-high disabled:bg-gray-300 disabled:text-gray-600 disabled:border-transparent disabled:pointer-events-none',
        className
      )}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading ? 'true' : 'false'}
      {...props}
    >
      {children}
    </button>
  )
}
