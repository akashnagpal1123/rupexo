import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#222222',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
        }
      }}
    >
      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Company Section with Links and Contact */}
          <Grid item xs={12}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 6 },
              alignItems: { xs: 'flex-start', md: 'flex-start' }
            }}>
              {/* Rupexo Branding and Social Media */}
              <Box sx={{ flex: { xs: '1', md: '2' } }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#FFD700',
                    fontWeight: 700,
                    mb: 2,
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                  }}
                >
                  Rupexo
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFD700',
                    opacity: 0.9,
                    mb: 3,
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Leading the future of digital innovation. We provide cutting-edge solutions 
                  that transform businesses and drive success in the digital age.
                </Typography>
                
                {/* Social Media Icons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {[
                    { icon: <Facebook />, href: '#', label: 'Facebook' },
                    { icon: <Twitter />, href: '#', label: 'Twitter' },
                    { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
                    { icon: <Instagram />, href: '#', label: 'Instagram' },
                    { icon: <GitHub />, href: '#', label: 'GitHub' }
                  ].map((social) => (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      sx={{
                        color: '#FFD700',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 215, 0, 0.1)',
                          borderColor: '#FFD700',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>

              {/* Company Links */}
              <Box sx={{ flex: { xs: '1', md: '1' } }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFD700',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.1rem', sm: '1.2rem' }
                  }}
                >
                  Company
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {['About Us', 'Our Team', 'Careers', 'Press', 'Blog', 'News', 'Partners'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      sx={{
                        color: '#FFD700',
                        opacity: 0.8,
                        textDecoration: 'none',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        '&:hover': {
                          color: '#FFF',
                          opacity: 1,
                          transform: 'translateX(5px)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Contact Info */}
              <Box sx={{ flex: { xs: '1', md: '1' } }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFD700',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.1rem', sm: '1.2rem' }
                  }}
                >
                  Contact
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#FFD700',
                      opacity: 0.8,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      lineHeight: 1.4
                    }}
                  >
                    <strong>Email:</strong><br />
                    info@rupexo.com
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#FFD700',
                      opacity: 0.8,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      lineHeight: 1.4
                    }}
                  >
                    <strong>Phone:</strong><br />
                    +1 (555) 123-4567
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#FFD700',
                      opacity: 0.8,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      lineHeight: 1.4
                    }}
                  >
                    <strong>Address:</strong><br />
                    123 Innovation St<br />
                    Tech City, TC 12345
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#FFD700',
                      opacity: 0.8,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      lineHeight: 1.4
                    }}
                  >
                    <strong>Hours:</strong><br />
                    Mon-Fri: 9AM-6PM<br />
                    Sat: 10AM-4PM
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Section */}
      <Box sx={{ 
        borderTop: '1px solid rgba(255, 215, 0, 0.2)',
        mt: { xs: 3, md: 4 }
      }}>
        <Container maxWidth="lg">
          <Box sx={{
            py: { xs: 2, md: 3 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: { xs: 2, sm: 0 }
          }}>
            {/* Copyright */}
            <Typography
              variant="body2"
              sx={{
                color: '#FFD700',
                opacity: 0.7,
                textAlign: { xs: 'center', sm: 'left' },
                fontSize: { xs: '0.8rem', sm: '0.9rem' }
              }}
            >
              © {currentYear} Rupexo. All rights reserved.
            </Typography>

            {/* Legal Links */}
            <Box sx={{
              display: 'flex',
              gap: { xs: 2, sm: 3 },
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' }
            }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  sx={{
                    color: '#FFD700',
                    opacity: 0.7,
                    textDecoration: 'none',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    '&:hover': {
                      color: '#FFF',
                      opacity: 1
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer; 