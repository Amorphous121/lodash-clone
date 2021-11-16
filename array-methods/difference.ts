import { filter } from '..';
/**
 * @function difference - Returns the difference of two arrays
 * @param arr1 - First array
 * @param arr2 - Second array
 * @returns {Array | null} - Returns the difference of two arrays
 */
const difference = <T>(arr1: T[], arr2: T[]): T[] | null => {
  const list = filter(arr1, (ele1: T) =>
    arr2.every((ele2: T) => ele1 !== ele2)
  );
  return list;
};

export default difference;
