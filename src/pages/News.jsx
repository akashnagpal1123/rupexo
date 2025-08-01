import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper, Link, Button, CircularProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchNews = async (forceRefresh = false) => {
    try {
      // Check if we have cached news and if it's less than 24 hours old
      const cachedNews = localStorage.getItem('crypto-news');
      const lastFetchTime = localStorage.getItem('crypto-news-timestamp');
      const isCacheValid = cachedNews && lastFetchTime && 
        (Date.now() - parseInt(lastFetchTime)) < 24 * 60 * 60 * 1000; // 24 hours

      if (!forceRefresh && isCacheValid) {
        const parsedNews = JSON.parse(cachedNews);
        setNewsArticles(parsedNews);
        setLastUpdated(new Date(parseInt(lastFetchTime)));
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      
      // Using CryptoCompare API - more reliable and works in production
      const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.Data && data.Data.length > 0) {
        // Transform CryptoCompare data to match our expected format
        const transformedNews = data.Data.slice(0, 6).map(article => ({
          title: article.title,
          description: article.body,
          url: article.url,
          publishedAt: new Date(article.published_on * 1000).toISOString(),
          source: {
            name: article.source || 'CryptoCompare'
          }
        }));
        
        setNewsArticles(transformedNews);
        setLastUpdated(new Date());
        
        // Cache the news and timestamp
        localStorage.setItem('crypto-news', JSON.stringify(transformedNews));
        localStorage.setItem('crypto-news-timestamp', Date.now().toString());
      } else {
        setError('No articles found');
      }
    } catch (error) {
      console.error("Error fetching crypto news:", error);
      setError('Failed to load news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleRefresh = () => {
    fetchNews(true); // Force refresh
  };

  const formatLastUpdated = (date) => {
    if (!date) return '';
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#111' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#FFD700', fontWeight: 'bold' }}>
              Crypto News
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph sx={{ color: '#fff' }}>
              Your daily source for the latest news and updates in the cryptocurrency world.
            </Typography>
            {lastUpdated && (
              <Typography variant="body2" sx={{ color: '#ccc', fontStyle: 'italic' }}>
                Last updated: {formatLastUpdated(lastUpdated)}
              </Typography>
            )}
          </Box>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={handleRefresh}
            disabled={loading}
            sx={{
              color: '#FFD700',
              borderColor: '#FFD700',
              '&:hover': {
                borderColor: '#E6C300',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
              },
              '&:disabled': {
                color: '#666',
                borderColor: '#666',
              }
            }}
          >
            {loading ? <CircularProgress size={20} sx={{ color: '#FFD700' }} /> : 'Refresh'}
          </Button>
        </Box>

        <Box sx={{ mt: 6 }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
              <CircularProgress sx={{ color: '#FFD700' }} />
              <Typography sx={{ color: '#fff', ml: 2 }}>
                Loading latest news...
              </Typography>
            </Box>
          ) : error ? (
            <Typography align="center" sx={{ color: '#ff6b6b' }}>
              {error}
            </Typography>
          ) : newsArticles.length > 0 ? (
            newsArticles.map((article, index) => (
              <Paper key={index} sx={{ p: 4, mb: 4, backgroundColor: '#222', color: '#fff', border: '1px solid #FFD700' }}>
                <Typography variant="h4" component="h3" sx={{ color: '#FFD700' }}>
                  {article.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#ccc', mb: 2 }}>
                  {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {article.description}
                </Typography>
                <Link href={article.url} target="_blank" rel="noopener" sx={{
                  color: '#FFD700',
                  '&:hover': {
                    color: '#E6C300'
                  }
                }}>
                  Read More
                </Link>
              </Paper>
            ))
          ) : (
            <Typography align="center" sx={{ color: '#fff' }}>
              No news articles found.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default News; 