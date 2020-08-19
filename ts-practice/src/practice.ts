function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap('aaa');

wrapped.param

interface Items<T, V> {
    list: T[]
    value: V
}

const items: Items<number, string> = {
    list: [1,2,3],
    value: 'aaa'
}