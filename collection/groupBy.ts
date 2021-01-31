interface Item {
  [k: string]: any
}

type Selector<T = Item> =
  | keyof T
  | ((item: T) => string)

export default function groupBy<T = Item>(array: T[], selector: Selector<T>) {
  return array.reduce((r: {[k: string]: T[]}, v) => {
    let k
    if (typeof selector === 'string') {
      k = v[selector]
    } else if (typeof selector === 'function') {
      k = selector(v)
    }
    if (!r[k]) r[k] = []
    r[k].push(v)

    return r
  }, {})
}