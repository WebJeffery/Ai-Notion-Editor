import { registerModule } from './register-module'
import textStyle from './text-style'

const BaseModules = [textStyle]

BaseModules.forEach((module) => registerModule(module))
