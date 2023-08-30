// Alan => [A,l,a,n] => string => string []
// [A,l,a,n] => Alan => string[] => string
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;
// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // String
//   } else {
//     return input.split(''); // Array
//   }
// }
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // String
  } else if (typeof input === 'string') {
    return input.split(''); // Array
  } else if (typeof input === 'number') {
    return true; // Array
  }
}
const rtaArray = parseStr('Alan');
rtaArray.reverse();
console.log('rtaArray', rtaArray);

const rtaStr = parseStr(['A', 'l', 'a', 'n']);
rtaStr.toLowerCase();
console.log('rtaStr', rtaStr);
const rtaBool = parseStr(3);
console.log(rtaBool);
