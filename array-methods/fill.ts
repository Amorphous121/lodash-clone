/**
 * @function fill Fills elements of array with value from start up to, but not including, end.
 * @param array Array to fill.
 * @param value Value to be filled in array.
 * @param start starting index from which filling should be done.
 * @param end ending index upto which position filling should be done.
 */
const fill = <T>(
  array: T[],
  value: T,
  start: number = 0,
  end: number = array.length
): T[] | null => {
  if (!Array.isArray(array)) return null;
  start = start || 0;
  end = end || array.length;
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
};

export default fill;
