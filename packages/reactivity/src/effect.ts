export function effect<T = any>(fn: () => T) {
    const _effect = new ReactiveEffect(fn)

    _effect.run()
}

export let activeEffect: ReactiveEffect | undefined = undefined

export class ReactiveEffect<T = any> {
    public fn: () => T

    constructor(fn: () => T) {
        this.fn = fn
    }

    public run() {
        activeEffect = this

        return this.fn()
    }
}

/**
 *  收集依赖
 */
export function track(target: object, key: string | symbol) {
    console.log('收集依赖:  ')
}

/**
 * 触发依赖
 */
export function trigger(target: object, key: string | symbol, newValue: unknown) {
    console.log('触发依赖：target')
}
