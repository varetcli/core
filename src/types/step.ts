import type { Ora } from 'ora'

export type Step = {
  name: string
  // messages: {
  //   loading: string
  //   success: string
  //   fail: string
  //   skip: string
  // }
  onError: 'abort' | 'skip'
  handler: (message: Ora) => Promise<void>
}
