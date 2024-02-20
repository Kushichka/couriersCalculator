import { useEffect, useState } from "react";
import { Card, Flex, InputNumber } from "antd";
import PropTypes from 'prop-types';

import { data } from '../../API/db';

const inputStyles = {
    size: 'large',
    width: { width: '12rem' }
};

export const FormCard = ({ changeSuitableCouriers }) => {
    const [weight, setWeight] = useState(null);
    const [length, setLength] = useState(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const weightHandler = value => setWeight(value);
    const lengthHandler = value => setLength(value);
    const widthHandler = value => setWidth(value);
    const heightHandler = value => setHeight(value);

    const inputsData = [
        { unit: 'kg', minValue: 0, size: inputStyles.size, prefix: '', placeholder: 'Waga', onChange: weightHandler, value: weight, style: inputStyles.width },
        { unit: 'cm', minValue: 0, size: inputStyles.size, prefix: 'A', placeholder: 'Długość', onChange: lengthHandler, value: length, style: inputStyles.width },
        { unit: 'cm', minValue: 0, size: inputStyles.size, prefix: 'B', placeholder: 'Szerokość', onChange: widthHandler, value: width, style: inputStyles.width },
        { unit: 'cm', minValue: 0, size: inputStyles.size, prefix: 'C', placeholder: 'Wysokość', onChange: heightHandler, value: height, style: inputStyles.width }
    ];

    const inputs = inputsData.map(item => (
        <InputNumber
            key={item.placeholder}
            addonBefore={item.prefix}
            addonAfter={item.unit}
            min={item.minValue}
            maxLength={4}
            size={item.size}
            placeholder={item.placeholder}
            onChange={item.onChange}
            value={item.value}
            style={item.style}
        />
    ));

    useEffect(() => {
        const calculateSuitableCouriers = () => {
            const suitable = data.filter(courier => {
                return courier.requirements.every(req => {
                    return req.formula({w: weight, a: length, b: width, c: height});
                });
            });

            if(weight && length && width && height) {
                changeSuitableCouriers(suitable);
            }
        };

        calculateSuitableCouriers();
    }, [weight, length, width, height, changeSuitableCouriers]);

    return (
        <Card
            title='Wymiary'
            type="inner"
            style={{textAlign: 'center'}}
        >
            <Flex vertical gap={20}>
                {inputs}
            </Flex>
        </Card>
    )
};

FormCard.propTypes = {
    changeSuitableCouriers: PropTypes.func.isRequired
};
