import React from 'react';
import { Box, Typography } from '@mui/material';
import LineChart from '../Graphs/LineChart';

const GraphBox = () => {
    return (
        <Box
            sx={{
                // background: 'rgba(255, 255, 255, 0.05)',
                background: 'rgba(66, 61, 1, 0.22)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 215, 0, 0.2)',
                p: { xs: 2, md: 2 },
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px) scale(1.02)',
                    borderColor: 'rgba(255, 215, 0, 0.4)',
                    boxShadow: '0 8px 40px rgba(255, 215, 0, 0.2)',
                },
                width: '100%',
        
            }}
        >
            <LineChart />
        </Box>
    )
}

export default GraphBox