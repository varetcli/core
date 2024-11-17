import { confirm } from '@inquirer/prompts'
import { execSync } from 'child_process'
import { defaultGitIgnore } from './git.constant'
import { createStep } from 'lib'
import { exit } from 'process'

const gitInitStep = createStep({
  name: 'git init',
  handler: async (message) => {
    try {
      message.start('Running git init')
      execSync('git init')
      message.succeed('Initialized git')
    } catch (error) {
      message.fail('Failed to initialize git')
    }
  },
  onError: 'abort',
})

const gitIgnoreStep = createStep({
  name: 'create .gitignore',
  onError: 'skip',
  handler: async (message) => {
    try {
      const shouldCreateGitIgnore = await confirm({
        message: 'Create recommended .gitignore?',
        default: true,
      })
      message.start(
        'Creating .gitignore file with sensible defaults',
      )
      if (shouldCreateGitIgnore) {
        execSync(`echo "${defaultGitIgnore}" > .gitignore`)
        message.succeed('Created .gitignore file')
      } else {
        message.info('Skipped creating .gitignore file')
      }
    } catch (error) {
      message.fail('Failed to create .gitignore')
    }
  },
})

export const steps = [gitInitStep, gitIgnoreStep]
