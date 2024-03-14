
export const anotherSides = (array) => {
    const newArray = array.map(parseFloat);
    const longestIndex = newArray.indexOf(Math.max(...newArray));
    
    return newArray.filter((_, index) => index !== longestIndex);
}