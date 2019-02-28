import * as StyleDictionary from 'style-dictionary'
import { projectDir } from '../src/cnst/paths.cnst'

const colors = StyleDictionary.extend(`${projectDir}/colors.json`)
colors.buildAllPlatforms()
