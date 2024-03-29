import { z } from 'zod'

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z
    .string()
    .url()
    .optional()
    .default('http://localhost:3000'),
  NEXT_PUBLIC_API_URL: z.string().url().default(apiUrl)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('✖️ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
