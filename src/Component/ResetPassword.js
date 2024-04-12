// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import bookService from '../Service/Bookservice'; 
// import { Link } from 'react-router-dom';

// const ResetPassword = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     user_oldPassword: '',
//     user_newPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     bookService.resetPassword(formData)
//       .then(response => {
//         console.log(response); // Handle success response
//       })
//       .catch(error => {
//         console.error(error); // Handle error response
//       });
//   };

//   return (
//     <div sx={{ backgroundColor: '#F0F0F0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
//         <Toolbar variant="dense">
//           <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '150px', marginRight: 'auto' }}>
//             <AutoStoriesIcon sx={{ marginRight: '4px' }} />
//             <Typography variant="h6" color="inherit" component="div">
//               BookStore
//             </Typography>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box
//         height={420}
//         width={400}
//         marginLeft="auto"
//         marginRight="auto"
//         marginTop={15}
//         display="flex"
//         flexDirection="column"
//         borderRadius={2}
//         borderColor={'grey'}
//         p={2}
//         sx={{ backgroundColor: 'white', border: '1px solid grey', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
//       >
//         <Typography variant="h6" gutterBottom textAlign="center" marginBottom={6} marginLeft={2}>
//           Reset Password
//         </Typography>
//         <TextField
//           name="email"
//           label="Email"
//           variant="outlined"
//           style={{ marginTop: '10px', marginLeft: '50px', width: '70%', marginBottom: '10px' }}
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <TextField
//           name="user_oldPassword"
//           label="Old Password"
//           variant="outlined"
//           style={{ marginTop: '10px', marginLeft: '50px', width: '70%', marginBottom: '10px' }}
//           value={formData.user_oldPassword}
//           onChange={handleChange}
//         />
//         <TextField
//           name="user_newPassword"
//           label="New Password"
//           variant="outlined"
//           style={{ marginTop: '10px', marginLeft: '50px', width: '70%', marginBottom: '10px' }}
//           value={formData.user_newPassword}
//           onChange={handleChange}
//         />

//         <Button variant='contained' color='primary' sx={{ width: '20%', marginLeft: '70%', marginTop: '20px', marginBottom: '25px' }} onClick={handleSubmit}>Change</Button>
//         <Link to='/'>
//           <Button variant='contained' color='error' sx={{ width: '37%', marginLeft: '40px', marginTop: '-112px' }}>Back to login</Button>
//         </Link>
//       </Box>
//     </div>
//   );
// }

// export default ResetPassword;

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bookService from '../Service/Bookservice'; 
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    user_oldPassword: '',
    user_newPassword: ''
  });
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    bookService.resetPassword(formData)
      .then(response => {
        console.log(response); // Handle success response
        setPasswordChanged(true); // Set state to indicate password changed successfully
      })
      .catch(error => {
        console.error(error); // Handle error response
      });
  };

  return (
    <div style={{ backgroundColor: '#F0F0F0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" style={{ backgroundColor: '#A03037' }}>
        <Toolbar variant="dense">
          <Box style={{ display: 'flex', alignItems: 'center', marginLeft: '150px', marginRight: 'auto' }}>
            <AutoStoriesIcon style={{ marginRight: '4px' }} />
            <Typography variant="h6" color="inherit" component="div">
              BookStore
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        height={420}
        width={400}
        marginLeft="auto"
        marginRight="auto"
        marginTop={15}
        display="flex"
        flexDirection="column"
        borderRadius={2}
        borderColor={'grey'}
        p={2}
        style={{ backgroundColor: 'white', border: '1px solid grey', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
      >
        <Typography variant="h6" gutterBottom textAlign="center" marginBottom={6} marginLeft={2}>
          Reset Password
        </Typography>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          style={{ marginTop: '10px', marginLeft: '50px', width: '70%', marginBottom: '10px' }}
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="user_oldPassword"
          label="Old Password"
          variant="outlined"
          style={{ marginTop: '10px', marginLeft: '50px', width: '70%', marginBottom: '10px' }}
          value={formData.user_oldPassword}
          onChange={handleChange}
        />
        <TextField
          name="user_newPassword"
          label="New Password"
          variant="outlined"
          style={{ marginTop: '10px', marginLeft: '50px', width: '70%', marginBottom: '10px' }}
          value={formData.user_newPassword}
          onChange={handleChange}
        />
        {passwordChanged && <Typography variant="body1" style={{ color: 'green', textAlign: 'center' }}>Password changed successfully</Typography>}
        <Button variant="contained" color="primary" style={{ width: '20%', marginLeft: '70%', marginTop: '20px', marginBottom: '25px' }} onClick={handleSubmit}>
          Change
        </Button>
        <Link to='/'>
          <Button variant="contained" color="error" style={{ width: '37%', marginLeft: '40px', marginTop: '-112px' }}>
            Back to login
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default ResetPassword;
