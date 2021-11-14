/**
 * @function filter - Returns an array of elements that pass a test
 * @param array Array of Elements.
 * @param callback Predicate that returns true or false.
 * @returns Array of Elements that pass the predicate.
 */
const filter = <T>(
  array: T[],
  callback: (value: T, index: number, arr: T[]) => boolean
): T[] | null => {
  if (!Array.isArray(array)) return null;

  let result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};

export default filter;
