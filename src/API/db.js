
export const couriers = [
    {
        name: 'DPD courier',
        requirements: (weight, length, width, height) => {
            return (
                parseFloat(weight) <= 31.5 &&
                parseFloat(length) <= 150 &&
                (parseFloat(height) + parseFloat(width) + parseFloat(length)) <= 300
            );
        },
        price: '15'
    },
    {
        name: 'DPD PICKUP',
        requirements: (weight, length, width, height) => {
            return (
                parseFloat(weight) <= 20 &&
                parseFloat(length) <= 170 &&
                ((parseFloat(height) * 2) + (parseFloat(width) * 2) + parseFloat(length)) <= 250
            );
        },
        price: '11'
    },
    {
        name: 'DHL',
        requirements: (weight, length, width, height) => {
            const longest = Math.max(length, width, height);
            const anotherLongest = () => {
                const sides = [length, width, height].filter(item => item !== longest);
                return Math.max(...sides);
            };

            return (
                parseFloat(weight) <= 31.5 &&
                parseFloat(longest) <= 120 &&
                parseFloat(anotherLongest()) <= 60 &&
                ((parseFloat(height) * 2) + (parseFloat(width) * 2) + parseFloat(length)) <= 240
            );
        },
        price: '20'
    },
];