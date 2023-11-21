import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

class Login extends Component {
  constructor() {
    super();
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();


    this.state = {
      message: (
        <div>

          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }} style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            }}>
              Login Here
            </Typography>
          </Toolbar>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
            <Container maxWidth="sm" style={{ height: '500px', backgroundColor: 'lightgray', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)', borderRadius: '15px', textAlign: 'center' }}>
              <h1 className='loginhere'>Login Here</h1><br></br>
              <h2>Email / Username:</h2>
              <TextField id="standard-basic" label="Enter your email/username" variant="outlined" inputRef={this.emailRef} required />
              <h2>Password:</h2>
              <TextField id="standard-basic" label="Enter your password" variant="outlined" type='password' inputRef={this.passwordRef} required /><br></br><br></br><br></br>
              <Button variant="contained" onClick={() => this.changeMessage()}>Login</Button>
              <br></br>
              <br></br>

              <Button variant="text" component={Link} to="/register">
                New User? Click here to Register
              </Button>
            </Container>
          </div>
        </div>
      ),
      isDrawerOpen: false,
      scrollY: 0
    };
  }




  /////////Validation functions

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  }

  validateFirstName(firstName) {
    return !!firstName.trim();   //first name is not empty
  }

  validateLastName(lastName) {
    return !!lastName.trim();   //last name is not empty
  }


  /////changing functions
  changeMessage() {
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;

    if (!email || !password) {
      window.alert('Please fill both email and password');
      return;
    }

    if (!this.validateEmail(email)) {
      window.alert('Invalid email format. Enter correct email format');
      return;
    }

    if (!this.validatePassword(password)) {
      window.alert('Invalid password format. Enter password that satisfies our password policy.');
      return;
    }





    this.setState({
      message: (
        <div>

          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }} style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            }}>
              Login Successful
            </Typography>
            <IconButton color="inherit" component={Link} to="/home">
              <HomeRoundedIcon style={{ color: 'black' }} />
            </IconButton>

          </Toolbar>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'black' }}>
            <img src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png' width={100} height={100} />
            <h4 style={{ fontWeight: '800', fontFamily: 'cursive', fontSize: '30px' }}>Login Successful</h4>
          </div>
        </div>
      ),
    });
  }
  render() {
    return (
      <div style={{ backgroundImage: 'url(https://images.everydayhealth.com/images/what-are-natural-skin-care-products-alt-1440x810.jpg?sfvrsn=616dd3f2_4)', backgroundSize: 'cover', minHeight: '100vh' }}>
        {this.state.message}
        <footer style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          &copy; Developed for Joshua
        </footer>

      </div>
    );
  }
}

export default Login;