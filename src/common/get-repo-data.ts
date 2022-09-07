import path from 'path'

import * as core from '@actions/core'
import errorMissingEnv from './error/expected.error'
import errorMissingValue from './error/required.error'
const { GITHUB_REPOSITORY, RUNNER_TOOL_CACHE } = process.env
const CWD = process.cwd()

type Vars = {
  cacheDir: string
  cachePath: string
  options: {
    key: string
    path: string,
    oldCacheRemove: string
    flashCache: string
  }
  targetDir: string
  targetPath: string,

}

export const getRunnerData = (): Vars => {
  if (!RUNNER_TOOL_CACHE) {
    return errorMissingEnv(RUNNER_TOOL_CACHE)
  }
  if (!GITHUB_REPOSITORY) {
    return errorMissingEnv(GITHUB_REPOSITORY)
  }

  const options = {
    key: core.getInput('key'),
    path: core.getInput('path'),
    oldCacheRemove: core.getInput('oldCacheRemove'),
    flashCache: core.getInput('flashCache')
  }

  if (!options.path) {
    return errorMissingValue('path')
  }
  if (!options.key) {
    return errorMissingValue('key')
  }

  const cacheDir = path.join(RUNNER_TOOL_CACHE, GITHUB_REPOSITORY, options.key)
  const cachePath = path.join(cacheDir, options.path)
  const targetPath = path.resolve(CWD, options.path)
  const { dir: targetDir } = path.parse(targetPath)

  return {
    cacheDir,
    cachePath,
    options,
    targetDir,
    targetPath
  }
}
