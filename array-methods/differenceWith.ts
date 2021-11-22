/**
 * @function differenceWith - Returns the difference of two arrays,
 * @param arr1  - The first array to compare.
 * @param arr2  - The second array to compare.
 * @param comp  - The function used to compare values.
 * @returns   - Returns the difference of two arrays,
 */
const differenceWith = <T>(
  arr1: T[],
  arr2: T[],
  comp: (value1: T, value2: T) => boolean
): T[] => {
  return arr1.filter((value1) => arr2.every((value2) => !comp(value1, value2)));
};

export default differenceWith;
