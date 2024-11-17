import type { Step } from './step'

export type Job = {
  name: string
  description: string
  steps: Array<Step>
}
