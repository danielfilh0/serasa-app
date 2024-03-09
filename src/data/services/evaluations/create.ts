import { request } from '../http-client'

type CreateParams = {
  name: string
  comment?: string
  rating: number
}

export function create(data: CreateParams) {
  return request('/api/evaluations', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
