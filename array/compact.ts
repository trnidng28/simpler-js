export default function compact(arr: any[]) {
  return arr.filter(i => !!i)
}