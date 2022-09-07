import { setFailed } from "@actions/core"
import { getRunnerData } from "./common/get-repo-data"


const main = async () => {
    try {
        const { cachePath, targetDir, targetPath, options } = getRunnerData()

    } catch (e: unknown) {
        setFailed(`Failed Local Cache Runner. ${e}`)
    }
}