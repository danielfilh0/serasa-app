import { cn } from '@/data/utils/cn'
import { ReactNode } from 'react'

export type Text = {
  className?: string
  children: ReactNode
}

export function Text({ className, children, ...props }: Text) {
  return (
    <p
      className={cn(className, 'font-normal text-dark-high text-base')}
      {...props}
    >
      {children}
    </p>
  )
}
