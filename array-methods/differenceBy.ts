import filter from '../array-methods/filter';

/**
 * @function differenceBy - Returns the difference of arrays based on the provided function.
 * @param arr1 - The first array to compare.
 * @param arr2 - The second array to compare.
 * @param iteratee - The function used to compare values.
 * @returns {Array} - Returns the difference of arrays based on the provided function.
 */
const differenceBy = <T>(
  arr1: T[],
  arr2: T[],
  iteratee: ((val: T) => T) | keyof T
): T[] | null => {
  if (typeof iteratee !== 'function') {
    return filter(arr1, (object1) =>
      arr2.every((object2) => object1[iteratee] !== object2[iteratee])
    );
  }
  return filter(arr1, (ele1: T) =>
    arr2.every((ele2: T) => iteratee(ele1) !== iteratee(ele2))
  );
};

export default differenceBy;
