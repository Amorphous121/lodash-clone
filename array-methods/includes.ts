/**
 * @function includes
 * @param array Array of elements
 * @param value Elements to search for
 */

const includes = <T>(array: T[], value: T): boolean | null => {
  if (!Array.isArray(array)) return null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
};

export default includes;
