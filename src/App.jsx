import { useCallback, useState } from 'react';
import { Card, Flex } from 'antd';

import { FormCard } from './components/FormCard';
import { ResultTable } from './components/ResultTable';

import './App.css'

function App() {
    const [suitableCouriers, setSuitableCouriers] = useState([]);

    const changeSuitableCouriers = useCallback((suitable) => {
        setSuitableCouriers(suitable.map((item, index) => (
            {
                key: index,
                courier: item.name,
                price: `${item.price} zł`,
            }
        )));
    }, []);

    return (
        <Card
            title={<span style={{ color: '#fff' }}>Paczkulator</span>}
            style={{
                // width: '968px',
                textAlign: 'center',
                boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'}} 
        >
            <Flex vertical>
                <Flex gap={20} wrap='wrap' justify='center'>
                    <FormCard changeSuitableCouriers={changeSuitableCouriers} />
                    <ResultTable data={suitableCouriers} />
                </Flex>
            </Flex>
        </Card>
    )
}

export default App
