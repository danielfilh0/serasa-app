import { cn } from '@/data/utils/cn'
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons'
import { ChangeEvent, useState } from 'react'

export type RatingProps = {
  initialValue?: number | null
  length?: number
  size?: number
  label?: string
  onChange?: (value: number) => void
  labelClassName?: string
}

export function Rating({
  size = 24,
  length = 5,
  label,
  labelClassName,
  initialValue = null,
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
    <div {...(label ? { 'aria-labelledby': `rating` } : {})}>
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

      <div className="flex gap-1" role="radiogroup">
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
                    className="text-yellow-500"
                    width={size}
                    height={size}
                    aria-hidden
                  />
                ) : (
                  <StarIcon
                    className="text-yellow-500"
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
    </div>
  )
}
