import { useEffect, useState } from "react";
import { Card, Flex, InputNumber } from "antd";
import PropTypes from 'prop-types';

import { couriers } from '../../API/db';

const size = 'large';

export const FormCard = ({changeSuitableCouriers}) => {
    const [weight, setWeight] = useState(null);
    const [length, setLength] = useState(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const weightHandler = value => setWeight(value);
    const lengthHandler = value => setLength(value);
    const widthHandler = value => setWidth(value);
    const heightHandler = value => setHeight(value);
 
    useEffect(() => {
        const calculateSuitableCouriers = () => {
            const suitable = couriers.filter(courier => {
                return courier.requirements(weight, length, width, height);
            });

            changeSuitableCouriers(suitable);
        };

        calculateSuitableCouriers();
    }, [weight, length, width, height, changeSuitableCouriers]);

    return (
        <Card>
            <Flex vertical gap={20}>
                <InputNumber
                    addonAfter='kg'
                    min={0}
                    size={size}
                    placeholder='Waga'
                    onChange={weightHandler}
                    value={weight}
                />
                <InputNumber
                    addonAfter='cm'
                    min={0}
                    size={size}
                    placeholder='Długość'
                    onChange={lengthHandler}
                    value={length}
                />
                <InputNumber
                    addonAfter='cm'
                    min={0}
                    size={size}
                    placeholder='Szerokość'
                    onChange={widthHandler}
                    value={width}
                />
                <InputNumber
                    addonAfter='cm'
                    min={0}
                    size={size}
                    placeholder='Wysokość'
                    onChange={heightHandler}
                    value={height}
                />
            </Flex>
        </Card>
    )
};

FormCard.propTypes = {
    changeSuitableCouriers: PropTypes.func.isRequired
};
