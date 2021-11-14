/**
 * @function Gets the first element of array.
 * @param array Array of Elements
 * @returns Returns the first element of array.
 */
const head = <T>(array: T[]): T | undefined | null => {
  if (!Array.isArray(array)) return null;

  return array[0];
};

export default head;
