import { useCallback, useState } from "react";
import { Container, Stack } from "@mui/material";

import { FormCard } from "./components/FormCard";
import { ResultTable } from "./components/ResultTable";
import { Header } from "./components/Header";

function App() {
    const [suitableCouriers, setSuitableCouriers] = useState([]);

    const changeSuitableCouriers = useCallback((suitable) => {
        setSuitableCouriers(suitable);
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Stack>
                    {/* Place for <AlertMessage /> */}
                    
                    <Stack
                        direction="column"
                        justifyContent="center"
                        useFlexGap
                        spacing={{ sx: 0, md: 4 }}
                    >
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={{ xs: 2, sm: 5 }}
                            sx={{ pb: { xs: 2, sm: 5, md: 5 } }}
                        >
                            <FormCard changeSuitableCouriers={changeSuitableCouriers} />
                            <ResultTable couriers={suitableCouriers} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

export default App;
