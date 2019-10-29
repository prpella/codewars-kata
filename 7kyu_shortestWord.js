function findShort(s){
  let shortest = s.split(' ').sort((a, b) => a.length - b.length)
  return shortest[0].length
}