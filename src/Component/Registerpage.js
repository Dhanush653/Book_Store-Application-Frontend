import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { TextField, Select, MenuItem, Button } from '@mui/material';

const Registerpage = () => {
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = () =>{
    console.log(formValue)
  }

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
              <Typography variant='subtitle1' marginRight={13.5}>
                Date Of Birth
              </Typography>
              <Select
                variant='outlined'
                size='small'
                name="dobDay"
                value={formValue.dobDay}
                onChange={handleChange}
                sx={{ width: '70px', marginLeft: '20px' }}
              >
                <MenuItem value=''>Day</MenuItem>
                {[...Array(31)].map((_, index) => (
                  <MenuItem key={index + 1} value={(index + 1).toString()}>{index + 1}</MenuItem>
                ))}
              </Select>
              <Select
                variant='outlined'
                size='small'
                name="dobMonth"
                value={formValue.dobMonth}
                onChange={handleChange}
                sx={{ width: '70px', marginLeft: '20px' }}
              >
                <MenuItem value=''>Month</MenuItem>
                {[...Array(12)].map((_, index) => (
                  <MenuItem key={index + 1} value={(index + 1).toString()}>{index + 1}</MenuItem>
                ))}
              </Select>
              <Select
                variant='outlined'
                size='small'
                name="dobYear"
                value={formValue.dobYear}
                onChange={handleChange}
                sx={{ width: '85px', marginLeft: '20px' }}
              >
                <MenuItem value=''>Year</MenuItem>
                {[...Array(50)].map((_, index) => (
                  <MenuItem key={index + 1970} value={(index + 1970).toString()}>{index + 1970}</MenuItem>
                ))}
              </Select>
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
