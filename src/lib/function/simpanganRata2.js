import mean from './mean.js'

const simpanganRata2 = (arr) => {
  const _mean = mean(arr)
  const x = arr.filter((v, i, a) => {
    return a.indexOf(v) === i
  }).map(v => {
    return Math.abs(v - _mean) * arr.filter(_v => v === _v).length
  }).reduce((a, b) => {
    return a + b
  })
  return { x, n: arr.length}
}

export default simpanganRata2