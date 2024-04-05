import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { TextField, Button } from '@mui/material';
import BookService from '../Service/Bookservice'

const Registerpage = () => {
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '', 
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  };
  const handleSubmit = () => {
  
    const formData = {
      user_firstname: formValue.firstName,
      user_lastname: formValue.lastName,
      email: formValue.email,
      user_dob: formValue.dob,
      user_password: formValue.password
    };
  
    BookService.registerUser(formData)
      .then(response => {
        console.log('Response from backend:', response.data);
        if (response.data === 'User registered successfully') {
          window.alert('Registration successful!'); 
        }
      })
      .catch(error => {
        console.error('Error sending data to backend:', error);
      });
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
          height={620}
          width={620}
          marginLeft="auto"
          marginRight="auto"
          marginTop={5}
          marginBottom={5}
          display="flex"
          flexDirection="column"
          p={2}
          sx={{ backgroundColor: 'white', border: '1px solid grey', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Box>
            <Typography variant='h6' gutterBottom textAlign="center" marginTop={4}>
              Registration Page
            </Typography>
            <Box display='flex' alignItems='center' marginLeft={10} marginTop={4} marginBottom={6}>
              <Typography variant='subtitle1'>
                Firstname
              </Typography>
              <TextField name="firstName" variant='outlined' size='small' placeholder='First name...' sx={{ marginLeft: '150px', '& input': { padding: '5px 35px' } }} onChange={handleChange} />
            </Box>
            <Box display='flex' alignItems='center' marginLeft={10} marginTop={4}  marginBottom={6}>
              <Typography variant='subtitle1'>
                Lastname
              </Typography>
              <TextField name="lastName" variant='outlined' size='small' placeholder='Last name...' sx={{ marginLeft: '150px', '& input': { padding: '5px 35px' } }} onChange={handleChange} />
            </Box>
            <Box display='flex' alignItems='center' marginLeft={10} marginTop={4}  marginBottom={6}>
              <Typography variant='subtitle1'>
                Email
              </Typography>
              <TextField name="email" variant='outlined' size='small' placeholder='Email Id...' sx={{ marginLeft: '180px', '& input': { padding: '5px 35px' } }} onChange={handleChange} />
            </Box>
            <Box display='flex' alignItems='center' marginLeft={10} marginTop={4}  marginBottom={6}>
              <Typography variant='subtitle1'>
                Date Of Birth
              </Typography>
              <input 
                type="date"
                name="dob"
                value={formValue.dob}
                onChange={handleChange}
                style={{ marginLeft: '20px', padding: '5px 10px', width: 'auto', height: '35px' }}
              />
            </Box>
            <Box display='flex' alignItems='center' marginLeft={10} marginTop={4} marginBottom={5}>
              <Typography variant='subtitle1'>
                Password
              </Typography>
              <TextField name="password" variant='outlined' size='small' placeholder='Password...' sx={{ marginLeft: '150px', '& input': { padding: '5px 35px' } }} onChange={handleChange} />
            </Box>
            <Box display="flex" justifyContent="center" marginBottom={4} >
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Registerpage;
