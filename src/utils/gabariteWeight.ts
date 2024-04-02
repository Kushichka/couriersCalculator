export const gabariteWeight = (sideA: number, sideB: number, sideC: number) => {
    const weight = (sideA * sideB * sideC) / 6000;

    return +weight.toFixed(2);
};
