import { inpost } from "./couriers/inpost";
import { dpd } from "./couriers/dpd";
import { dhl } from "./couriers/dhl";
import { fedex } from "./couriers/fedex";
import { orlen } from "./couriers/orlen";
import { pocztex } from "./couriers/pocztex";
import { ups } from "./couriers/ups";

export const data = [
    ...inpost,
    ...dpd,
    ...dhl,
    ...fedex,
    ...orlen,
    ...pocztex,
    ...ups
];