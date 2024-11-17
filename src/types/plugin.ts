import type { Job } from './job'

export type VaretPlugin = {
  name: string
  description: string
  jobs: Array<Job>
}
