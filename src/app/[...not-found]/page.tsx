import { Heading } from '@/views/components/Heading'
import { Logo } from '@/views/components/Logo'

export default function NotFoundPage() {
  return (
    <main className="h-screen w-full flex flex-col gap-10 justify-center items-center">
      <Logo />
      <Heading className="text-center">404 - Página não encontrada</Heading>
    </main>
  )
}
