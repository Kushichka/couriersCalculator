export const anotherSides = (array: number[]) => {
    const longestIndex = array.indexOf(Math.max(...array));
    return array.filter((_, index) => index !== longestIndex);
};
