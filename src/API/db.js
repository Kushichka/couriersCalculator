
export const couriers = [
    {
        name: 'DPD kurier',
        type: 'Paczka',
        price: '15',
        currency: 'zł',
        requirements: (weight, length, width, height) => {
            return (
                parseFloat(weight) <= 31.5 &&
                parseFloat(length) <= 150 &&
                (parseFloat(height) + parseFloat(width) + parseFloat(length)) <= 300
            );
        }
    },
    {
        name: 'DPD PICKUP',
        type: 'Paczka',
        price: '11',
        currency: 'zł',
        requirements: (weight, length, width, height) => {
            return (
                parseFloat(weight) <= 20 &&
                parseFloat(length) <= 170 &&
                ((parseFloat(height) * 2) + (parseFloat(width) * 2) + parseFloat(length)) <= 250
            );
        }
    },
    {
        name: 'DHL',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL3',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DH2L',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL1',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DH3L1',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DH2L1',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL12',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL125',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL124',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL123',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL122',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
    {
        name: 'DHL121',
        type: 'Paczka',
        price: '20',
        currency: 'zł',
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
        }
    },
];