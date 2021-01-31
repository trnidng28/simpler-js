interface Item {
  [k: string]: any
}

type Selector<T = Item> =
  | keyof T
  | ((item: T) => string)

export default function sortBy<T = Item>(array: T[], selector: Selector<T>) {
  return [...array].sort((a, b) => {
    let aValue, bValue
    if (typeof selector === 'string') {
      aValue = a[selector]
      bValue = b[selector]
    } else if (typeof selector === 'function') {
      aValue = selector(a)
      bValue = selector(b)
    }

    aValue = +aValue || aValue
    bValue = +bValue || bValue

    if (aValue > bValue) return 1
    if (aValue < bValue) return -1
    return 0
  })
}