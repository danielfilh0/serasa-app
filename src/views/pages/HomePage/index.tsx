import { EvaluationForm } from '@/views/components/EvaluationForm'
import { Heading } from '@/views/components/Heading'

export function HomePage() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4 gap-6">
      <Heading size="lg">Formulário de avaliação</Heading>

      <EvaluationForm />
    </main>
  )
}
