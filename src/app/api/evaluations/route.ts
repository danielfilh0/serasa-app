import { NextRequest, NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const ipAddress = req.headers.get('x-real-ip') ?? '127.0.0.1'

  try {
    const hasEvaluation = await prisma.evaluation.findUnique({
      where: {
        ipAddress
      }
    })

    return NextResponse.json(
      { hasEvaluation: !!hasEvaluation },
      { status: 200 }
    )
  } catch {
    return NextResponse.json({ error: 'Unknown error.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const ipAddress = req.headers.get('x-real-ip') ?? '127.0.0.1'

  try {
    const hasEvaluation = await prisma.evaluation.findUnique({
      where: {
        ipAddress
      }
    })

    if (hasEvaluation)
      return NextResponse.json(
        { error: 'Evaluation already exists.' },
        { status: 409 }
      )

    const data = await req.json()
    const schema = z.object({
      name: z.string().min(1, 'O nome é obrigatório'),
      comment: z.string(),
      rating: z.coerce
        .number({ required_error: 'A avaliação é obrigatória' })
        .min(1, 'A avaliação é obrigatória')
    })

    const { name, comment, rating } = schema.parse(data)

    const newEvaluation = await prisma.evaluation.create({
      data: {
        name,
        comment,
        rating,
        ipAddress
      }
    })

    return NextResponse.json(newEvaluation, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Unknown error.' }, { status: 500 })
  }
}
