import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { MenuItem, Menu, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';

const UserDropdown = ({ userId }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        style={{ marginLeft: 'auto', marginRight:'50px' }}
      >
        <AccountCircleIcon />
        <Typography variant="body1" sx={{ marginLeft: 1 }}></Typography>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <Link component={RouterLink} to="/" color="black" underline="none">
        <MenuItem>Logout</MenuItem>
        </Link>
        <Link component={RouterLink} to="/reset" color="black" underline="none">
        <MenuItem>Reset Password</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default UserDropdown;
