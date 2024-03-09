import { request } from '../http-client'

type GetResponse = {
  hasEvaluation: boolean
}

export function get(): Promise<GetResponse> {
  return request('/api/evaluations')
}
