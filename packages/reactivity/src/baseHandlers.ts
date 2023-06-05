// import { track, trigger } from './effect'
import { ReactiveFlags } from './reactive'

function createGetter() {
    return function get(target: object, key: string | symbol, receiver: object) {
        const result = Reflect.get(target, key, receiver)

        if (key === ReactiveFlags.IS_REACTIVE) return true
        // track(target, key)

        return result
    }
}

function createSetter() {
    return function set(target: object, key: string | symbol, value: unknown, receiver: object) {
        const result = Reflect.set(target, key, value, receiver)

        // trigger(target, key, value)

        return result
    }
}

const get = createGetter()

const set = createSetter()

export const mutableHandlers: ProxyHandler<object> = {
    get,
    set,
}
