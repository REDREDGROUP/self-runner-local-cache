import { getRunnerData } from './get-repo-data';
import { setFailed } from '@actions/core'
import { mkdirP, mv } from '@actions/io'

// import { isErrorLike } from './lib/isErrorLike'
// import log from './lib/log'

async function post(): Promise<void> {
  try {
    const { cacheDir, targetPath, cachePath } = getRunnerData()

    await mkdirP(cacheDir)
    await mv(targetPath, cachePath, { force: true })
  } catch (error: unknown) {
    // log.trace(error)
    // setFailed(isErrorLike(error) ? error.message : `unknown error: ${error}`)
  }
}

void post()
