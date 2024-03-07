import { cn } from '@/data/utils/cn'
import { ReactNode } from 'react'

type HeadingProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xlg' | 'lg' | 'md' | 'sm' | 'xsm' | '2xsm'
  className?: string
  children: ReactNode
}

export function Heading({
  variant = 'h1',
  children,
  size = 'xlg',
  className,
  ...props
}: HeadingProps) {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements

  const sizesMap = {
    xlg: 'text-[2.5rem] md:text-[3rem] leading-[44px] md:leading-[52px] tracking-[-1.2px]',
    lg: 'text-[2rem] md:text-[2.5rem] leading-[36px] md:leading-[44px] tracking-[-1px]',
    md: 'text-[1.5rem] md:text-[2rem] leading-[28px] md:leading-[36px] tracking-[-0.8px]',
    sm: 'text-[1.25rem] md:text-[1.5rem] leading-[24px] md:leading-[28px] tracking-[-0.6px]',
    xsm: 'text-[1.125rem] md:text-[1.25rem] leading-[22px] md:leading-[24px]',
    '2xsm': 'text-[1rem] leading-[20px]'
  }

  return (
    <Tag
      className={cn(className, sizesMap[size], 'font-bold text-dark-high')}
      {...props}
    >
      {children}
    </Tag>
  )
}
