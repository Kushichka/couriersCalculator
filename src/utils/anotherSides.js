
export const anotherSides = (array) => {
    const maxValueIndex = array.indexOf(Math.max(...array));
    array.splice(maxValueIndex, 1);
    return array;
}