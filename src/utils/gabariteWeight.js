
export const gabariteWeight = (array) => {
    const [dimensionA, dimensionB, dimensionC] = array;
    const weight = dimensionA * dimensionB * dimensionC / 6000;
    console.log(weight.toFixed(2));
    return weight.toFixed(2);
}