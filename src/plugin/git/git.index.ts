import { createJob, createVaretPlugin } from 'lib'
import { steps } from './git.steps'
import type { Step } from 'types'

const gitJob = createJob({
  name: 'git',
  description: 'git init, .gitignore',
  steps: steps as Step[],
})

export const gitPlugin = createVaretPlugin({
  name: 'git',
  description: 'Core git plugin for varet.',
  jobs: [gitJob],
})
