export default function ascii(string: string) {
  if (typeof string.normalize !== 'undefined') {
    return string.replace(/Đ/g, 'D')
      .replace(/đ/g, 'd')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  return string
}