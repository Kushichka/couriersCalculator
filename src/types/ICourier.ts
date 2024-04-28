export type TPrice = {
    standard: string;
    onDelivery: string;
};

export type TLink = {
    link: string;
};

export type TCourierPrice = TPrice | TLink;

export type TColors = { bgColor: string; fontColor: string };

export interface ISuitableCourier {
    name: string;
    price: TCourierPrice;
    colors: TColors;
    description?: string;
    logo?: string;
}

export type TCalculatePrice = (
    weight: string,
    dimensionA: string,
    dimensionB: string,
    dimensionC: string
) => ISuitableCourier | null;

export interface ICourier {
    name: string;
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;
    logo?: React.ReactNode;
    calculatePrice: TCalculatePrice;
}
