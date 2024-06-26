import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import BookService from '../Service/Bookservice';

const Loginpage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
        const response = await BookService.loginUser({
            email: formData.username,
            user_password: formData.password
        });

        if (response && response.data) {
            console.log(response.data);
            if (response.data === 'Invalid Login. Try Again') {
                setError("Invalid credentials");
            } else {
                localStorage.setItem('token', response.data);
                console.log(response.data);

                const userDetailsResponse = await BookService.generateUserByToken(response.data);
                console.log("User Details Response:", userDetailsResponse); 
                if (userDetailsResponse && userDetailsResponse.data && userDetailsResponse.data.length > 0) {
                    const user = userDetailsResponse.data[0];
                    const userId = user.user_id;
                    console.log("User ID:", userId);
                    navigate(`/${userId}`);
                } else {
                    console.error('User ID not found in response:', userDetailsResponse);
                    setError("Failed to retrieve user details");
                }
            }
        } else {
            console.error('Login failed:', response);
            setError("Invalid credentials");
        }
    } catch (error) {
        console.error('Login failed:', error);
        setError("Invalid credentials");
    }
};
  return (
    <>
      <Box sx={{ backgroundColor: '#F0F0F0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
          <Toolbar variant="dense">
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '150px', marginRight: 'auto' }}>
              <AutoStoriesIcon sx={{ marginRight: '4px' }} />
              <Typography variant="h6" color="inherit" component="div">
                BookStore
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          height={350}
          width={400}
          marginLeft="auto"
          marginRight="auto"
          marginTop={20}
          display="flex"
          flexDirection="column"
          borderRadius={2}
          borderColor={'grey'}
          p={2}
          sx={{ backgroundColor: 'white', border: '1px solid grey', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Box sx={{ marginBottom: 'auto' }}>
            <Typography variant="h6" gutterBottom textAlign="center" marginBottom={6} marginLeft={2}>
              Login Page
            </Typography>
            <Box display="flex" alignItems="center" marginBottom={5} marginLeft={2}>
              <Typography variant="subtitle1" marginRight={3.5}>
                Username:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                placeholder='Username'
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Box>
            <Box display="flex" alignItems="center" marginBottom={2} marginLeft={2}>
              <Typography variant="subtitle1" marginRight={4}>
                Password:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                type="password"
                placeholder='Password'
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" marginBottom={2} marginLeft={2}>
            {error && <Typography color="error">{error}</Typography>} 
          </Box>
          <Box display="flex" justifyContent="center" marginTop={-2} marginLeft={2} marginBottom={2}  color={'grey'}>
          <Link component={RouterLink} to="/forgot" color="primary" underline="always">
            Forgot Password?
          </Link>  
          </Box>
          <Box display="flex" justifyContent="center" marginBottom={4} marginLeft={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Login
            </Button>
          </Box>
          <Box display="flex" justifyContent="left" marginBottom={4} marginLeft={2} marginTop={-1} color={'grey'} >
            <span style={{fontStyle:'italic'}}> Don't have a Account : </span>
            <Link component={RouterLink} to="/register" color="primary" underline="none">
              Create new Account
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Loginpage;
