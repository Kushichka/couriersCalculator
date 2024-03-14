import { useCallback, useState } from "react";
import { Container, Stack } from "@mui/material";

import { FormCard } from "./components/FormCard";
import { ResultTable } from "./components/ResultTable";
import { createCouriersList } from "./utils/createCouriersList";
import { Header } from "./components/Header";

import "./App.css";

function App() {
    const [suitableCouriers, setSuitableCouriers] = useState([]);

    const changeSuitableCouriers = useCallback((suitable) => {
        const couriersList = createCouriersList(suitable);
        setSuitableCouriers(couriersList);
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
                            <ResultTable data={suitableCouriers} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

export default App;
