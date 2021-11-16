/**
 * @function findIndex - Finds the index of the first element in the array that satisfies the provided testing function.
 * @param array The array to inspect.
 * @param callback The function invoked per iteration
 * @returns
 */
const findIndex = <T>(array: T[], callback: (item: T) => boolean) => {
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i]);
    if (result) return i;
  }
  return -1;
};
