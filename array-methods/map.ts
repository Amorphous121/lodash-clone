/**
 * @function map - Returns a new array with the results of calling a provided function on every element in this array.
 * @param array Array of Elements
 * @param callback Predicate to be applied to each element
 * @returns Array of elements that after maping with the predicate
 */

const map = <T>(
  array: T[],
  callback: (value: T, index: number, arr: T[]) => T
): T[] | null => {
  if (!Array.isArray(array)) return null;
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const p = callback(array[i], i, array);
    result.push(p);
  }
  return result;
};

export default map;
