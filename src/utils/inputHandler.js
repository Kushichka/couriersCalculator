
export const inputHandler = (value, callback) => {
    const pattern = /^(?:\d+|)$/; // only numbers available
    // const pattern = /^\d+$/; // only numbers available

    if(!pattern.test(value)) return;
    value.length > 4 ? callback(value.slice(0,4)) : callback(value);
};