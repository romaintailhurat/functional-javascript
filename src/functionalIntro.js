// Functionally programming '99 bottles of beer'

export function getEndLine(n) {
  return n > 1 ? `${n-1} bottles of beer on the wall` : `No more bottles of beer on the wall`;
}

export function generateArrayOf(length=10, thing=0) {
  return Array.apply(null, Array(length)).map(i => thing);
}

export function lyricSegment(n) {
  return []
    .concat(`${n} bottles of beer on the wall`)
    .concat(` ${n} bottles of beer`)
    .concat(` Take one down, pass it around`)
    .concat(` ${getEndLine(n)}`);
}

export function song(start=99, end=0, generatorfn=lyricSegment) {
  let generatedArray = generateArrayOf(start);
  let songArray = generatedArray.map(slot, i => { lyricSegment(start - i) })
}
