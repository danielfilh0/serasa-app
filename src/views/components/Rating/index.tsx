import { cn } from '@/data/utils/cn'
import {
  ExclamationTriangleIcon,
  StarFilledIcon,
  StarIcon
} from '@radix-ui/react-icons'
import { ChangeEvent, useState } from 'react'

export type RatingProps = {
  initialValue?: number | null
  length?: number
  size?: number
  label?: string
  onChange?: (value: number) => void
  labelClassName?: string
  error?: string
  required?: boolean
}

export function Rating({
  size = 24,
  length = 5,
  label,
  labelClassName,
  initialValue = null,
  required = false,
  error,
  onChange
}: RatingProps) {
  const [rating, setRating] = useState<number | null>(initialValue)
  const [hover, setHover] = useState<number | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value)

    setRating(value)
    onChange && onChange(value)
  }

  return (
    <div
      className="flex flex-col"
      role="radiogroup"
      {...(label ? { 'aria-labelledby': 'rating' } : {})}
      {...(required
        ? { 'aria-required': 'true' }
        : { 'aria-required': 'false' })}
      {...(error ? { 'aria-errormessage': 'rating-error' } : {})}
    >
      {label && (
        <p
          id="rating"
          className={cn(
            'font-medium leading-6 text-gray-900 mb-2 text-base',
            labelClassName
          )}
        >
          {label}
        </p>
      )}

      {/* stars */}
      <div className="flex gap-2">
        {new Array(length).fill({}).map((star, i) => {
          const ratingValue = i + 1
          const label =
            ratingValue > 1 ? `${ratingValue} stars` : `${ratingValue} star`

          return (
            <span
              key={i}
              className="relative"
              onMouseEnter={() => setHover(Number(i + 1))}
              onMouseLeave={() => setHover(null)}
            >
              <input
                id={String(ratingValue)}
                type="radio"
                value={ratingValue}
                checked={rating === ratingValue}
                aria-checked={rating === ratingValue}
                name="rating"
                className="sr-only h-full"
                onChange={handleChange}
                tabIndex={0}
              />
              <label htmlFor={String(ratingValue)} className="cursor-pointer">
                <span className="sr-only">{label}</span>
                {i < ((hover as number) || (rating as number)) ? (
                  <StarFilledIcon
                    className="text-magenta-accent"
                    width={size}
                    height={size}
                    aria-hidden
                  />
                ) : (
                  <StarIcon
                    className="text-magenta-accent"
                    width={size}
                    height={size}
                    aria-hidden
                  />
                )}
              </label>
            </span>
          )
        })}
      </div>

      {!!error && (
        <p
          className="mt-2 text-sm font-bold text-error flex gap-2 items-center"
          id="rating-error"
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
