import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { logos } from "../../assets/logos";
import { CourierLogo } from "../ui/CourierLogo";

export const DpdInfo = () => {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            gap={{ xs: 2, sm: 4 }}
        >
            <CourierLogo
                name="DPD"
                src={logos.dpd}
                width="6rem"
            />

            <Stack
                direction="column"
                flexGrow={1}
                gap={1}
            >
                <Box>
                    <Typography variant="body2">
                        Forma paczki:{" "}
                        <strong>prostopadłościan z którego nie wystaje żaden ponadwymiarowy element</strong>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Pakowanie: <strong>karton, foliopak DPD lub no name</strong>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Maksymalna długość: <strong>150cm</strong>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Maksymalna waga: <strong>31,5kg</strong>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Maksymalna objętość paczki: <strong>300cm</strong>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Wzór na objętość paczki: <strong>A+B+C &lt;= 300cm</strong>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Waga gabarytowa: <strong>(Wysokość + Długość + Szerokość) / 6000</strong>
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    );
};
