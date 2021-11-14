/**
 * @function concat Creates a new array concatenating array with any additional arrays and/or values.
 * @param array Array of elements.
 * @param args List of elements
 */
const concat = <T>(array: T[], ...args: any[]): T[] | null => {
  if (!Array.isArray(array)) return null;
  let arr = array;
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      const [e] = args[i];
      arr.push(e);
      continue;
    }
    arr.push(args[i]);
  }
  return arr;
};

export default concat;
