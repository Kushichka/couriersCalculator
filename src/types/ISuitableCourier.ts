export interface ISuitableCourier {
    name: string;
    price: { standard: string; onDelivery: string };
    colors: { bgColor: string; fontColor: string };
}
