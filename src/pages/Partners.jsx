import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const partners = [
  { name: 'Coinbase', description: 'A leading cryptocurrency exchange platform.', logo: '/images/partners/coinbase.svg' },
  { name: 'Binance', description: 'The world\'s largest cryptocurrency exchange by trading volume.', logo: '/images/partners/binance.svg' },
  { name: 'Bybit', description: 'A cryptocurrency derivatives exchange.', logo: '/images/partners/bybit.jpg' },
  { name: 'OKX', description: 'A global cryptocurrency exchange and wallet platform.', logo: '' },
  { name: 'Robinhood', description: 'A commission-free investing and trading app.', logo: '' },
  { name: 'KuCoin', description: 'A global cryptocurrency exchange for numerous digital assets and cryptocurrencies.', logo: '/images/partners/kucoin.jpg' },
  { name: 'Bitget', description: 'A crypto exchange for spot and derivatives trading.', logo: '' },
  { name: 'Uniswap', description: 'A popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens.', logo: '/images/partners/uniswap.svg' },
];

const Partners = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#111' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
          Our Partners
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ color: '#fff', mb: 6 }}>
          We are proud to partner with some of the leading companies in the industry to provide you with the best services.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {partners.map((partner) => (
            <Grid item key={partner.name} xs={12} sm={6} md={4} lg={3}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: '#222',
                  color: '#fff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #FFD700'
                }}
              >
                {partner.logo ? (
                  <img src={partner.logo} alt={`${partner.name} logo`} style={{ maxHeight: '50px', maxWidth: '150px', marginBottom: '1rem' }} />
                ) : (
                null
                )}
                <Typography variant="h6" component="h3" sx={{ mt: 2, color: '#FFD700' }}>
                  {partner.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: '#ccc' }}>
                  {partner.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners; 