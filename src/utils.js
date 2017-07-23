export function createGroupedArray (arr, chunkSize) {
  let groups = []
  let i
  for (i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize))
  }
  return groups
}
