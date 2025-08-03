import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import {
  Box,
  Container,
  Typography,
  TextField,
  CircularProgress,
  Alert,
  Grid,
  InputAdornment,
  Paper,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

axiosRetry(axios, { retries: 3, retryDelay: () => 2000 });

const Section3 = () => {
  const [rate, setRate] = useState(null);
  const [inr, setInr] = useState('');
  const [usdt, setUsdt] = useState('');
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Function to be created
  //Rate to be customized


  // Fetch exchange rate on load
  useEffect(() => {
    const fetchRate = async () => {
      try {
        setLoading(true);
        const cached = localStorage.getItem('inr-usdt');
        const timestamp = localStorage.getItem('inr-usdt-timestamp');
        const isFresh = cached && timestamp && Date.now() - parseInt(timestamp) < 5 * 60 * 1000;

        if (isFresh) {
          setRate(parseFloat(cached));
          setSource('cache');
        } else {
          const { data } = await axios.get(
            'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=inr'
          );
          const liveRate = data.tether.inr;
          localStorage.setItem('inr-usdt', liveRate.toString());
          localStorage.setItem('inr-usdt-timestamp', Date.now().toString());
          setRate(liveRate);
          setSource('api');
        }
      } catch (err) {
        console.error("Failed to fetch exchange rate:", err);
        setError('Failed to fetch exchange rate. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, []);

  const handleInrChange = useCallback(
    (e) => {
      const value = e.target.value;
      setInr(value);
      if (rate && value) {
        const result = parseFloat(value) / rate;
        setUsdt(result.toFixed(4));
      } else {
        setUsdt('');
      }
    },
    [rate]
  );

  const handleUsdtChange = useCallback(
    (e) => {
      const value = e.target.value;
      setUsdt(value);
      if (rate && value) {
        const result = parseFloat(value) * rate;
        setInr(result.toFixed(2));
      } else {
        setInr('');
      }
    },
    [rate]
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(180deg, #000000 0%, #0A0A0A 50%, #000000 100%)',
        // background: 'linear-gradient(180deg,rgba(58, 51, 0, 0.27) 0%, #0A0A0A 50%,rgba(17, 17, 17, 0.65) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle at 80% 80%, rgba(255, 241, 160, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={12}
          sx={{
            p: { xs: 3, md: 5 },
            background: 'rgba(34, 34, 34, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: 4,
            color: '#FFF',
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            INR ⇄ USDT Converter
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, opacity: 0.8, maxWidth: 600, mx: 'auto' }}>
            Get instant and accurate conversions based on live market rates.
          </Typography>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress sx={{ color: '#FFD700' }} />
              <Typography sx={{ ml: 2, alignSelf: 'center' }}>Loading live rate...</Typography>
            </Box>
          ) : error ? (
            <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
          ) : (
            <Box>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    type="number"
                    label="You Send (INR)"
                    value={inr}
                    onChange={handleInrChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'rgba(255, 215, 0, 0.5)' },
                        '&:hover fieldset': { borderColor: '#FFD700' },
                        '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 215, 0, 0.7)' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                      input: { color: '#FFF' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={1} sx={{ textAlign: 'center' }}>
                  <SwapHorizIcon sx={{ color: '#FFD700', fontSize: 40, transform: { xs: 'rotate(90deg)', md: 'none' } }} />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    type="number"
                    label="You Receive (USDT)"
                    value={usdt}
                    onChange={handleUsdtChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'rgba(255, 215, 0, 0.5)' },
                        '&:hover fieldset': { borderColor: '#FFD700' },
                        '&.Mui-focused fieldset': { borderColor: '#FFD700' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 215, 0, 0.7)' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#FFD700' },
                      input: { color: '#FFF' },
                    }}
                  />
                </Grid>
              </Grid>
              {rate && (
                <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, opacity: 0.7 }}>
                  Live rate: 1 USDT = ₹{rate-1} 
                  {/* (from {source}) */}
                </Typography>
              )}
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Section3;
