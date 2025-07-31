import React from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getWhatsAppUrl } from '../utils/whatsapp';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl("Hello! I'm interested in your service."), '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, sm: 24, md: 32 },
        right: { xs: 16, sm: 24, md: 32 },
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Tooltip 
        title="Chat with us on WhatsApp" 
        placement="left"
        arrow
        sx={{
          '& .MuiTooltip-tooltip': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            padding: { xs: '8px 12px', sm: '10px 14px' },
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          '& .MuiTooltip-arrow': {
            color: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      >
        <Fab
          onClick={handleWhatsAppClick}
          sx={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: '#fff',
            width: { xs: 56, sm: 64, md: 72 },
            height: { xs: 56, sm: 64, md: 72 },
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px) scale(1.05)',
              boxShadow: '0 12px 35px rgba(37, 211, 102, 0.4)',
              background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
            },
            '&:active': {
              transform: 'translateY(-1px) scale(1.02)',
            },
            '& .MuiSvgIcon-root': {
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            },
          }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default FloatingWhatsApp; 