/**
 * @function drop - Returns a new array with the first n elements removed.
 * @param array  - The array to query.
 * @param n  - The number of elements to drop.
 * @returns  - Returns the slice of array.
 */
const drop = <T>(array: T[], n: number): T[] => {
  return array.slice(n);
};

export default drop;
