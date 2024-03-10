import { Box, Typography } from "@mui/material";

export const Header = () => {
    return (
        <Box
            color='#fff'
            sx={{ 
                backgroundColor: 'primary.main',
                px: { xs: 2, md: 5 },
                py: 1
            }}
        >
            <Typography variant='h5'>
                Paczkulator
            </Typography>
        </Box>
    )
}
