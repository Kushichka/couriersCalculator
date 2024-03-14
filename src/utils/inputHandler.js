
export const inputHandler = (name, value, callback) => {
    const pattern = /^(?:\d+(\.\d*)?|\.\d+|)$/; // numbers, floating point number, empty string

    if (!pattern.test(value)) return;
    value.length > 4 ? callback(name, value.slice(0, 5)) : callback(name, value);
};