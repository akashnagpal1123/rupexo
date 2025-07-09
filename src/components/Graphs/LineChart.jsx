// import React, { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
// import axios from 'axios';
// import { CircularProgress, Typography, Box } from '@mui/material';

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <Box
//         sx={{
//           background: 'rgba(0, 0, 0, 0.85)',
//           border: '1px solid rgba(255, 215, 0, 0.6)',
//           color: '#fff',
//           borderRadius: '10px',
//           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
//           p: '10px 15px',
//           backdropFilter: 'blur(5px)',
//         }}
//       >
//         <Typography sx={{ color: '#FFD700', fontWeight: 'bold', fontSize: '0.9rem' }}>{label}</Typography>
//         <Typography sx={{ color: '#FFF', fontSize: '1rem', fontWeight: 500 }}>{`₹${payload[0].value}`}</Typography>
//       </Box>
//     );
//   }
//   return null;
// };

// const LineChart = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchHistory = async () => {
//     try {
//       const res = await axios.get(
//         'https://api.coingecko.com/api/v3/coins/tether/market_chart',
//         {
//           params: { vs_currency: 'inr', days: 7, interval: 'daily' },
//         }
//       );

//       const formatted = res.data.prices.map(([timestamp, price]) => ({
//         date: new Date(timestamp).toLocaleDateString('en-IN', { weekday: 'short' }),
//         price: parseFloat(price.toFixed(2)),
//       }));

//       setData(formatted);
//     } catch (err) {
//       console.error('Failed to fetch chart data:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   return (
//     <Box sx={{ color: '#FFF', width: 420, height: 290, display: 'flex', flexDirection: 'column', }}>
//       <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', color: '#FFD700', fontSize: '1rem', fontWeight: 600 }}>
//         USDT/INR – 7 Day Trend
//       </Typography>

//       {loading ? (
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, my: 4 }}>
//           <CircularProgress sx={{ color: '#FFD700' }} />
//         </Box>
//       ) : (
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
//             <defs>
//               <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#FFD700" stopOpacity={0.4} />
//                 <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 215, 0, 0.1)" />
//             <XAxis dataKey="date" stroke="rgba(255, 255, 255, 0.6)" tick={{ fontSize: 11 }} />
//             <YAxis stroke="rgba(255, 255, 255, 0.6)" domain={['dataMin - 1', 'dataMax + 1']} tick={{ fontSize: 11 }} />
//             <Tooltip content={<CustomTooltip />} />
//             <Area
//               type="monotone"
//               dataKey="price"
//               stroke="#FFD700"
//               fill="url(#goldGradient)"
//               strokeWidth={2.5}
//               dot={{ r: 0 }}
//               activeDot={{ r: 6, fill: '#000', stroke: '#FFD700', strokeWidth: 2 }}
//               isAnimationActive={true}
//               animationDuration={1500}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       )}
//     </Box>
//   );
// };

// export default LineChart;



import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import axios from 'axios';
import { CircularProgress, Typography, Box } from '@mui/material';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          background: 'rgba(0, 0, 0, 0.85)',
          border: '1px solid rgba(255, 215, 0, 0.6)',
          color: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          p: '10px 15px',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Typography sx={{ color: '#FFD700', fontWeight: 'bold', fontSize: '0.9rem' }}>
          {label}
        </Typography>
        <Typography sx={{ color: '#FFF', fontSize: '1rem', fontWeight: 500 }}>
          ₹{payload[0].value}
        </Typography>
      </Box>
    );
  }
  return null;
};

const LineChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/tether/market_chart',
        {
          params: { vs_currency: 'inr', days: 7, interval: 'daily' },
        }
      );

      // Avoid duplicates by using weekday and keeping only last 7 unique days
      const seenDays = new Set();
      const filtered = res.data.prices
        .reverse()
        .filter(([timestamp]) => {
          const day = new Date(timestamp).toLocaleDateString('en-IN', {
            weekday: 'short',
          });
          if (seenDays.has(day)) return false;
          seenDays.add(day);
          return true;
        })
        .slice(0, 7)
        .reverse()
        .map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString('en-IN', {
            weekday: 'short',
          }),
          price: parseFloat(price.toFixed(2)),
        }));

      setData(filtered);
    } catch (err) {
      console.error('Failed to fetch chart data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <Box
      sx={{
        color: '#FFF',
        width: 420,
        height: 290,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          textAlign: 'center',
          color: '#FFD700',
          fontSize: '1rem',
          fontWeight: 600,
        }}
      >
        USDT/INR – 7 Day Trend
      </Typography>

      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            my: 4,
          }}
        >
          <CircularProgress sx={{ color: '#FFD700' }} />
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD700" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 215, 0, 0.1)" />
            <XAxis
              dataKey="date"
              stroke="rgba(255, 255, 255, 0.6)"
              tick={{ fontSize: 11 }}
            />
            <YAxis
              stroke="rgba(255, 255, 255, 0.6)"
              domain={['dataMin - 1', 'dataMax + 1']}
              tick={{ fontSize: 11 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#FFD700"
              fill="url(#goldGradient)"
              strokeWidth={2.5}
              dot={{ r: 0 }}
              activeDot={{
                r: 6,
                fill: '#000',
                stroke: '#FFD700',
                strokeWidth: 2,
              }}
              isAnimationActive={true}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};

export default LineChart;
