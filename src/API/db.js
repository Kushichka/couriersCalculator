import { longestSide } from '../utils/longestSide';
import { anotherSides } from '../utils/anotherSides';

export const data = [
    {
        name: 'DPD paczka',
        price: '12',
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 150,
                description: 'Maksymalna długość boku < 150'
            },
            {
                formula: ({ a, b, c }) => a + b + c <= 300,
                description: '(Długość + Szerokość + Wysokość) < 300'
            }
        ]
    },
    {
        name: 'DPD punk odbioru (Pickup)',
        price: '9',
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 150,
                description: 'Maksymalna długość boku < 150'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return 2 * shortSides[0] + 2 * shortSides[1] + longestSide([a, b, c]) <= 300;
                },
                description: '(2 * a + 2 * b + najdłuższy bok) < 300'
            }
        ]
    },
    {
        name: 'DPD Pickup Station',
        price: '11',
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 59,
                description: 'Maksymalna długość boku < 59'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 50 && shortSides[1] <= 50) && 
                        (shortSides[0] <= 44 || shortSides[1] <= 44);
                },
                description: 'długość 59, szerokość 44, a wysokość 50'
            }
        ]
    },
    {
        name: 'DPD paczka niestandardowa',
        price: '50',
        requirements: [
            {
                formula: ({ w }) => w > 31.5 && w <= 50,
                description: 'Maksymalna waga 50 kg'
            },
            {
                formula: ({ a, b, c }) => {
                    const longSide = longestSide([a, b, c]);
                    return longSide > 150 && longSide <= 300;
                },
                description: 'Maksymalna długość boku < 300'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] + shortSides[1] <= 60;
                },
                description: 'Suma pozostałych boków < 60'
            }
        ]
    },
    {
        name: 'DHL paczka',
        price: '20',
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 120,
                description: 'Maksymalna długość boku < 120'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] <= 60 && shortSides[1] <= 60;
                },
                description: 'Pozostałe boki < 60'
            },
            {
                formula: ({ a, b, c }) => {
                    return a + b + c <= 300;
                },
                description: 'Suma boków < 300'
            }
        ]
    },
    {
        name: 'UPS paczka',
        price: '22',
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 274,
                description: 'Maksymalna długość boku < 274'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] * 2 + shortSides[1] * 2 + longestSide([a, b, c]) <= 400;
                },
                description: 'Łączne wymiary długości i obwodu < 400'
            }
        ]
    },
    {
        name: 'Fedex paczka',
        price: '25',
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 150,
                description: 'Maksymalna długość boku < 150'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] <= 70 && shortSides[1] <= 70;
                },
                description: 'Pozostałe boki < 70'
            },
            {
                formula: ({ a, b, c }) => {
                    const secondLongesttSides = Math.max(...anotherSides([a, b, c]));
                    return longestSide([a, b, c]) + secondLongesttSides < 180; 
                },
                description: 'Suma dwóch najdłuższych krawędzi < 180'
            }
        ]
    },
    {
        name: 'ORLEN paczka',
        price: '10',
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 20,
                description: 'Maksymalna długość boku < 20'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 30 && shortSides[1] <= 30) && 
                        (shortSides[0] <= 20 || shortSides[1] <= 20);
                },
                description: 'długość 59, szerokość 44, a wysokość 50'
            }
        ]
    },
    {
        name: 'Pocztex paczka',
        price: '8',
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 120,
                description: 'Maksymalna długość boku < 120'
            },
            {
                formula: ({ a, b, c }) => a + b + c <= 250,
                description: 'Suma boków < 250'
            }
        ]
    },
    {
        name: 'Pocztex 2XL',
        price: '22',
        requirements: [
            {
                formula: ({ w }) => w <= 30,
                description: 'Maksymalna waga 30 kg'
            },
            {
                formula: ({ a, b, c }) => {
                    const longest = longestSide([a, b, c]);
                    return longest > 120 && longest <= 150;
                },
                description: 'Maksymalna długość boku < 150'
            },
            {
                formula: ({ a, b, c }) => a + b + c > 250 && a + b + c <= 300,
                description: 'długość + szerokość + wysokość < 300'
            },
            {
                formula: ({ a, b, c }) => {
                    return a + b + c <= 250;
                },
                description: 'Suma boków < 250'
            }
        ]
    },
    {
        name: 'InPost paczkomat "A"',
        price: '11,99',
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 64,
                description: 'Maksymalna długość boku < 64'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 38 && shortSides[1] <= 38) && 
                        (shortSides[0] <= 8 || shortSides[1] <= 8);
                },
                description: '8 x 38 x 64'
            }
        ]
    },
    {
        name: 'InPost paczkomat "B"',
        price: '11,99',
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 64,
                description: 'Maksymalna długość boku < 64'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 38 && shortSides[1] <= 38) && 
                        (shortSides[0] <= 19 || shortSides[1] <= 19);
                },
                description: '19 x 38 x 64'
            }
        ]
    },
    {
        name: 'InPost paczkomat "C"',
        price: '11,99',
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 64,
                description: 'Maksymalna długość boku < 64'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 41 && shortSides[1] <= 41) && 
                        (shortSides[0] <= 38 || shortSides[1] <= 38);
                },
                description: '41 x 38 x 64'
            }
        ]
    },
    {
        name: 'InPost paczka standardowa',
        price: '14,99',
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 120,
                description: 'Maksymalna długość boku < 120'
            },
            {
                formula: ({ a, b, c }) => a + b + c <= 220,
                description: 'Suma wymiarów < 220'
            }
        ]
    },
    {
        name: 'InPost paczka niestandardowa',
        price: '19,99',
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => {
                    return longestSide([a, b, c]) > 120 || a + b + c > 220
                },
                description: 'jeden z wymiarów > 120 lub długość + szerokość + wysokość > 220'
            }
        ]
    }
];