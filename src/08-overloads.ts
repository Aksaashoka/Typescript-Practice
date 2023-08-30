// Alan => [A,l,a,n] => string => string []
// [A,l,a,n] => Alan => string[] => string

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // String
  } else {
    return input.split(''); // Array
  }
}
const rtaArray = parseStr('Alan');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', rtaArray);
const rtaStr = parseStr(['A', 'l', 'a', 'n']);
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', rtaStr);
