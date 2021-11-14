/**
 * @function chunk - Split an array into chunks of a given size
 * @param arr Array to split
 * @param size Size of each chunk
 * @returns Array of chunks
 */
const chunk = <T>(arr: T[], size: number): T[][] | null => {
  if (!Array.isArray(arr)) return null;
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
};

export default chunk;
