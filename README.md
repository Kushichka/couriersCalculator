# Couriers Calculator

Calculator for calculating a suitable courier for sending a parcel. You can set formulas for each courier depending on your preferences.

The parameters required for calculation are **weight**, **height**, **width** and **length** of the parcel.

**Weight** is entered in the first field, unit is kilograms.  
**Length, height** and **width** can be entered in any order, despite placeholders.

## Tech Stack

-   React
-   TypeScript
-   [Material UI](https://mui.com/material-ui/)

## Installation

Install with npm:

```bash
  npm install
```

## Usage

-   You can configure the main variables to your needs in the **src/config.ts** file.

```javascript
export const config = {
    ...

    maxParcelLength: 200,
    standardPalletDimensions: {
        length: 120,
        width: 80,
    }

    ...
}
```

-   In the **src/API/couriers** folder you can add a file with the class of the courier you need. Example:

```javascript
export class CourierName implements ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TPrice;
    };
    colors: TColors;

    constructor() {
        this.name = {
            weightFrom0To5: "CourierName (up to 5 kg)",
            weightFrom5To10: "CourierName (up to 10 kg)",
            weightFrom10To20: "CourierName (up to 20 kg)",
            weightFrom20To31: "CourierName (up to 31,5 kg)",
        };
        this.price = prices.courierName;
        // couriers brand colors
        this.colors = {
            bgColor: "#ffcc00",
            fontColor: "#d40511",
        };
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);

        //your formulas
        switch (true) {
            case w > 31.5:
                return null;

            case w > 10 && longest <= config.longestParcelSide.courierName>:
                return {
                    name: this.name.weightFrom10To20,
                    price: this.price.weightFrom10To20,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
```

-   In the **src/API/prices.ts** add an object with prices:

```bash
    courierName: {
        weightFrom0To5: { standard: "16,16", onDelivery: "17,44" },
        weightFrom5To10: { standard: "19,11", onDelivery: "22,55" },
        weightFrom10To20: { standard: "22,33", onDelivery: "25,17" },
        weightFrom20To31: { standard: "25,44", onDelivery: "28,28" },
    },
```

-   In **src/API/db.ts** add the courier to the array **couriers**

## Demo

You can try it out in this [demo](https://couriers-calculator.vercel.app/)
