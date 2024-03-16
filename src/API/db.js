import { Inpost } from "./couriers/inpost";
import { Dhl } from './couriers/dhl';
import { Gls } from "./couriers/gls";

const inpost = new Inpost();
const gls = new Gls();
const dhl = new Dhl();

export const couriers = [
    inpost,
    gls,
    dhl
];