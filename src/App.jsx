import { useCallback, useState } from 'react';
import { Flex, Typography } from 'antd';

import { FormCard } from './components/FormCard';

import './App.css'
import { ResultTable } from './components/ResultTable';

function App() {
    const [suitableCouriers, setSuitableCouriers] = useState([]);

    const changeSuitableCouriers = useCallback((suitable) => {
        setSuitableCouriers(suitable.map((item, index) => (
            {
                key: index,
                courier: item.name,
                price: item.price
            }
        )));
    }, []);

    return (
        <Flex vertical gap={20}>
            <Typography.Title style={{ color: '#fff' }}>
                SASKA Kalkulkator Wagi
            </Typography.Title>

            <FormCard changeSuitableCouriers={changeSuitableCouriers} />

            <ResultTable data={suitableCouriers} />
        </Flex>
    )
}

export default App
