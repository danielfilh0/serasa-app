import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { env } from '../environments'

export async function request(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_URL

  const response = await fetch(baseUrl + path, init)

  return response.json()
}
