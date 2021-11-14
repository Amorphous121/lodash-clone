/**
 * @function compact - Returns an array with all falsy values removed.
 * @param array Array of elements
 * @returns Array of elements without null or undefined values
 */
const compact = <T>(array: T[]): T[] | null => {
  if (!Array.isArray(array)) return null;
  const result: T[] = [];
  for (const item of array) {
    if (item) result.push(item);
  }
  return result;
};

export default compact;
