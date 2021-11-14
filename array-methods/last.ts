/**
 * @function last Gets the last element of array.
 * @param array The array to query.
 * @returns Returns the last element of array.
 */
const last = <T>(array: T[]): T | null => {
  if (!Array.isArray(array)) return null;
  return array[array.length - 1];
};

export default last;
