import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../Footer';
import {  useNavigate } from 'react-router-dom';
import CenteredButtons from './ButtonCenter';

const categories = ['Face Care', 'Hair Care', 'Skin Care', 'Personal Hygiene', 'Cosmetics'];

const additionalItems = ['Daily Deals', 'Brands', 'New Release', 'Styling Tips', 'Special Day Wear'];

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const navigate=useNavigate();
  const handleLoginClick = () => {
    navigate('/login')
  };

  const handleContactClick = () => {
    console.log('Clicked on contact');
  };

  const handleCategoryClick = (category) => {
    console.log(`Clicked on category: ${category}`);
    // Add logic to handle category click
  };

  const handleAdditionalItemClick = (item) => {
    console.log(`Clicked on additional item: ${item}`);
    // Add logic to handle additional item click
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '140vh', background: 'url(https://vivecosmetic.com/wp-content/uploads/2020/08/Top-10-Cosmetic-Companies-in-India.jpg)' }}>
      {/* Header */}
      <AppBar position="static" style={{backgroundColor:''}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1}}>
            GLAM MART
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <SearchIcon />
            </div>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="filled"
                InputProps={{ 'aria-label': 'search' }}
              />
          </div>
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
          <Button color="inherit" onClick={handleContactClick}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Navigation Bar */}
      <AppBar position="relative" color="default">
        <Toolbar>
          {categories.map((category, index) => (
            <Button key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose} width={300}>
        <List>
          {additionalItems.map((item, index) => (
            <ListItem button key={index} onClick={() => handleAdditionalItemClick(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
    <div>
 <CenteredButtons/>

</div>
      {/* Footer */}
      <Footer onClick={() => {}} />
    </div>
  );
};

export default App;
