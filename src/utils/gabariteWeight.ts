export const gabariteWeight = (array: number[]) => {
    const [dimensionA, dimensionB, dimensionC] = array;
    const weight = (dimensionA * dimensionB * dimensionC) / 6000;

    return +weight.toFixed(2);
};
