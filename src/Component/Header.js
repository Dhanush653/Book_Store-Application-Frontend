import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import book from '../Asserts/book.png';
import Dropdown from './Dropdown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar({ bookData, setFilteredBookData }) {
  const { userId } = useParams();

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    const filteredData = bookData.filter(item =>
      item.book_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBookData(filteredData);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginLeft: 15 }}
          >
            <img src={book} alt='book' className='bookicon' />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: -3 }}
          >
            Bookstore
          </Typography>
          <Search sx={{ backgroundColor: "white" }}>
            <SearchIconWrapper sx={{ color: "#9D9D9D" }}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: "#9D9D9D", paddingRight: 30 }}
              onChange={handleSearch}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" aria-label="show cart" color="inherit" sx={{ marginRight: 5 }}>
            <Link to={`/carto/${userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Badge color="error">
                <Typography variant='body1' sx={{ marginRight: 1, fontSize: 'small' }}>Cart</Typography>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </IconButton>
          <Dropdown userId={userId} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
