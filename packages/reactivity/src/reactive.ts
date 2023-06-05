import { mutableHandlers } from './baseHandlers'
import { isObject } from '@vue/shared'

/**
 * 响应式 Map 缓存对象
 */
export const reactiveMap = new WeakMap<object, any>()

export const enum ReactiveFlags {
    IS_REACTIVE = '__v_isReactive',
}

export function reactive(target: object) {
    return createReactiveObject(target, mutableHandlers, reactiveMap)
}

/**
 * 为复杂数据类型创建响应式对象
 * @param target
 * @returns
 */
function createReactiveObject(target: object, baseHandlers: ProxyHandler<any>, proxyMap: WeakMap<object, any>) {
    // reactive 不允许代理基本类型
    if (!isObject(target)) {
        return target
    }

    // 1. 如果被代理的对象传了进来，那么直接返回即可，不必再进行不必要的深度代理
    if (target[ReactiveFlags.IS_REACTIVE]) {
        return target
    }

    const existingProxy = proxyMap.get(target)

    if (existingProxy) {
        return existingProxy
    }

    const proxy = new Proxy(target, baseHandlers)

    proxyMap.set(target, proxy)

    return proxy
}
