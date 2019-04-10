// 核心文件，方法
import Vue from './instance/index'
// 初始化全局api
import { initGlobalAPI } from './global-api/index'
// 获取一个boolean 类型的变量，来判断是不是ssr
import { isServerRendering } from 'core/util/env'
// 不清楚
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
// 初始化全局变量
initGlobalAPI(Vue)
// 为vue原型定义属性$isServer
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
// 为vue原型定义属性$ssrContext
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
