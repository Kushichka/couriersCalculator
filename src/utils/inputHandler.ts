export const inputHandler = (
    name: string,
    value: string,
    callback: (a: string, b: string) => void
) => {
    const pattern = /^(?:\d+([.,]\d*)?|[.,]\d+|)$/; // numbers, floating point number, empty string
    if (!pattern.test(value)) return;
    const newValue = value.replace(/,/g, ".");

    newValue.length > 4 ? callback(name, newValue.slice(0, 5)) : callback(name, newValue);
};
