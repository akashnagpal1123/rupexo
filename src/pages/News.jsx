import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper, Link } from '@mui/material';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      // IMPORTANT: You need to get an API key from newsapi.org and replace 'YOUR_API_KEY'
      const API_KEY = '513edfa749f247dd970696675f106251'; 
      try {
        const response = await fetch(`/api/everything?q=cryptocurrency&pageSize=6&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.articles) {
          setNewsArticles(data.articles);
        }
      } catch (error) {
        console.error("Error fetching crypto news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: '#111' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
          Crypto News
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ color: '#fff' }}>
          Your daily source for the latest news and updates in the cryptocurrency world.
        </Typography>

        <Box sx={{ mt: 6 }}>
          {newsArticles.length > 0 ? (
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
              Loading news...
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default News; 