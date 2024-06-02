import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { logos } from "../../assets/logos";
import { CourierLogo } from "../ui/CourierLogo";

export const GlsInfo = () => {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            gap={{ xs: 2, sm: 4 }}
        >
            <CourierLogo
                name="GLS"
                src={logos.gls}
                width="6rem"
            />

            <Stack
                direction="column"
                flexGrow={1}
                gap={1}
            >
                <Box>
                    <Typography variant="body2">
                        Forma paczki: <strong>dowolna</strong>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Pakowanie: <strong>karton, folia, foliopak</strong> bez szczególnych wymagań
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2">
                        Maksymalna długość: <strong>180cm</strong>
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
                        Wzór na objętość paczki: <strong>A+(2xB)+(2xC) &lt;= 300</strong>
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
