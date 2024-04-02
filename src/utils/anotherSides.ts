export const anotherSides = (sideA: number, sideB: number, sideC: number) => {
    const longestIndex = [sideA, sideB, sideC].indexOf(Math.max(sideA, sideB, sideC));
    return [sideA, sideB, sideC].filter((_, index) => index !== longestIndex);
};
