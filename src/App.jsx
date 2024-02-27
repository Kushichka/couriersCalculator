import { useCallback, useState } from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

import { FormCard } from './components/FormCard';
import { ResultTable } from './components/ResultTable';
import { createCouriersList } from './utils/createCouriersList';

import './App.css'

function App() {
    const [suitableCouriers, setSuitableCouriers] = useState([]);

    const changeSuitableCouriers = useCallback((suitable) => {
        const couriersList = createCouriersList(suitable);
        setSuitableCouriers(couriersList);
    }, []);

    return (
        <Container
            sx={{ py: { xs: 1, sm: 2, md: 5 } }}
        >
            <Box width={{ xs: 'auto', sm: 500, md: 700 }}>
                <Paper elevation={3}>
                    <Stack
                        direction='column'
                        justifyContent='center'
                        useFlexGap
                        spacing={{ sx: 0, md: 4 }}
                    >
                        <Box
                            textAlign='center'
                            bgcolor='#000'
                            color='#fff'
                        >
                            <Typography variant='h5' padding={1}>
                                Paczkulator
                            </Typography>
                        </Box>

                        <Stack
                            direction={{ sm: 'column', md: 'row' }}
                            spacing={{ sm: 2, md: 5 }}
                            sx={{
                                px: { sm: 2, md: 5 },
                                pb: { sm: 2, md: 5 }
                            }}
                        >
                            <FormCard changeSuitableCouriers={changeSuitableCouriers} />
                            <ResultTable data={suitableCouriers} />
                        </Stack>
                    </Stack>

                </Paper>
            </Box>
        </Container>
    )
}

export default App
