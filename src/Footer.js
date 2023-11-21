// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = ({ onClick }) => {
  const footerItems = ['About Us', 'Filters', 'Orders', 'Your Wallet', 'Rewards'];

  return (
    <AppBar position="static" style={{ marginTop: 'auto', backgroundColor: '#333' }}>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Toolbar>
          {footerItems.map((item, index) => (
            <Typography
              variant="subtitle1"
              color="inherit"
              style={{ marginRight: '16px', cursor: 'pointer' }}
              key={index}
              onClick={() => onClick(item)}
            >
              {item}
            </Typography>
          ))}
        </Toolbar>
      </Container>
      <Container>
      <div className="fText" style={{ textAlign: 'center' }}>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
      </Container>
    </AppBar>
  );
  
};


export default Footer;
