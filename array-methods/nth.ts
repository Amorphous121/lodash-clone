const nth = <T>(array: T[], index: number = 0): T | null | undefined => {
  if (!Array.isArray(array)) return null;
  if (index < 0) {
    let newIndex = Math.abs(index);
    if (newIndex > array.length) return undefined;
    else return array[array.length - newIndex];
  }
  return array[index];
};

export default nth;
