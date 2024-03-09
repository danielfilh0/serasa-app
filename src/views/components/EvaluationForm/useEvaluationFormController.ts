import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { EvaluationFormProps } from '.'
import { evaluationsService } from '@/data/services/evaluations'

export const formSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  comment: z.string(),
  rating: z
    .number({ required_error: 'A avaliação é obrigatória' })
    .min(1, 'A avaliação é obrigatória')
})

export type FormSchemaData = z.infer<typeof formSchema>

export function useEvaluationFormController({
  statusLoading,
  statusSuccess,
  statusError
}: EvaluationFormProps) {
  const [isLoading, setIsLoading] = useState(statusLoading)
  const [success, setSuccess] = useState(statusSuccess)
  const [hasError, setHasError] = useState(statusError)

  const [isSubmitting] = useState(false)
  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors }
  } = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema)
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      setIsLoading(true)
      const res = await evaluationsService.create(data)
      if (res.error) throw new Error()
      setSuccess(true)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  })

  const init = useCallback(async () => {
    const res = await evaluationsService.get()

    res.hasEvaluation && setSuccess(true)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return {
    isLoading,
    success,
    hasError,
    control,
    register,
    errors,
    handleSubmit,
    isSubmitting
  }
}
