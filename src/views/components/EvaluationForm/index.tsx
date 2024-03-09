'use client'

import { Controller } from 'react-hook-form'

import { Button } from '../Button'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { useEvaluationFormController } from './useEvaluationFormController'

export type EvaluationFormProps = {
  statusLoading?: boolean
  statusSuccess?: boolean
  statusError?: boolean
}

export function EvaluationForm({
  statusLoading = false,
  statusSuccess = false,
  statusError = false
}: EvaluationFormProps) {
  const {
    control,
    errors,
    register,
    handleSubmit,
    isLoading,
    success,
    hasError
  } = useEvaluationFormController({ statusLoading, statusSuccess, statusError })

  return (
    <div className="w-full max-w-[550px] shadow py-6 px-8 bg-light-solid rounded-lg relative">
      <div
        data-loading={isLoading}
        data-success={success}
        data-error={hasError}
        className="flex flex-col gap-10 data-[loading=true]:pointer-events-none data-[success=true]:pointer-events-none data-[error=true]:pointer-events-none"
        aria-hidden={isLoading || success || hasError}
      >
        <div className="mx-auto">
          <Logo />
        </div>

        <Text className="text-center">
          Conte o quanto você está satisfeito com nossos serviços
        </Text>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mx-auto">
            <Controller
              control={control}
              name="rating"
              render={({
                field: { value, onChange },
                formState: { errors }
              }) => (
                <Rating
                  label="Marque de 1 à 5 estrelas *"
                  initialValue={value}
                  onChange={onChange}
                  error={errors.rating?.message}
                />
              )}
            />
          </div>

          <Input
            label="Nome *"
            error={errors.name?.message}
            {...register('name')}
          />

          <Input
            label="Comentário (opcional)"
            error={errors.comment?.message}
            {...register('comment')}
          />

          <Button type="submit">Enviar avaliação</Button>
        </form>
      </div>

      {/* loading */}
      {isLoading && (
        <div className="bg-gray-500/30 absolute inset-0 flex justify-center items-center w-full h-full rounded-lg">
          <Text className="!font-bold !text-3xl">
            Aguarde. Estamos processando...
          </Text>
        </div>
      )}

      {/* success */}
      {success && !hasError && (
        <div className="bg-green-200/80 absolute inset-0 flex justify-center items-center w-full h-40 rounded-lg">
          <Text className="!font-bold !text-3xl px-10 text-center">
            Obrigado por avaliar os nossos serviços!
          </Text>
        </div>
      )}

      {/* error */}
      {hasError && !success && (
        <div className="bg-red-200/80 absolute inset-0 flex justify-center items-center w-full h-40 rounded-lg">
          <Text className="!font-bold !text-3xl px-10 text-center">
            Ocorreu um erro. Tente novamente mais tarde.
          </Text>
        </div>
      )}
    </div>
  )
}
