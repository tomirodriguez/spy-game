export const changePositionFromArray = <T>(
  array: T[],
  fromIndex: number,
  toIndex: number
): T[] => {
  const newArray = [...array];
  const element = newArray[fromIndex];

  if (!element) return newArray;

  newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, element);

  return newArray;
};
