import { data } from "../API/db";

export const calculateSuitableCouriers = (weight, length, width, height, callback) => {
    const suitable = data.filter(courier => {
        // if(courier.oversize) return

        return courier.requirements.every(req => {
            return req.formula({
                w: parseFloat(weight),
                a: parseFloat(length),
                b: parseFloat(width),
                c: parseFloat(height)
            });
        });
    });

    if (weight && length && width && height) {
        callback(suitable);
    }
};