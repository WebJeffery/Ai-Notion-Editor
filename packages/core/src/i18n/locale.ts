/**
 * @description i18n init
 * @author WebJeffery
 */

import enResources from './lang/en'
import zhResources from './lang/zh-CN'
import { i18nAddResources } from './index'

i18nAddResources('en', enResources)
i18nAddResources('zh-CN', zhResources)
