export const withTolerance = (value: number, tolerance: number): number => {
    return value + (value * tolerance) / 100;
};
