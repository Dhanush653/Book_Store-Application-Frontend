// import React, { useState } from 'react';
// import Header from './Header';
// import { Typography } from '@mui/material';
// import './Homepage.css';
// import axios from 'axios';
// import { useEffect } from "react";
// import {Link} from 'react-router-dom';

const Homepage = () => {
  const [bookData, setBookData] = useState([]);
  
  const [buttonClicked, setButtonClicked] = useState({});

  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/books');
      setBookData(response.data);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  const addToCart = async (book_id, price) => {
    try {
      const cartUserData = {
        book_quantity: 1,
        book_price: price,
        book_id: book_id,
        user_id: 1
      };

      const response = await axios.post('http://localhost:8080/cart/add', cartUserData);
      console.log(response.data);
      // Set button status to 'clicked'
      setButtonClicked(prevState => ({
        ...prevState,
        [book_id]: true
      }));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className='container'>
      <Header />
      <div className='top'>
        <div className='book'>
          <Typography variant='h5'>
            Books
          </Typography>
        </div>
        <div className='select-container'>
          <select name="sort" id="sort">
            <option value="">Sort by relevance</option>
            <option value="lowtohigh">Price: Lowest To Highest</option>
            <option value="hightolow">Price: Highest To Lowest</option>
          </select>
        </div>
      </div>

      <div style={{ paddingLeft: '11rem', paddingRight: '11rem', paddingTop: '2rem', borderColor: '#E2E2E2' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))', gap: '2rem' }}>
          {bookData.map(item => (
            <div key={item.book_id} style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', borderRadius: '3px', background: '#ffffff', maxHeight: '90%', maxWidth: '100%' }}>
              <div style={{ backgroundColor: '#f5f5f5', height: '55%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={`./Asserts/${item.book_logo}`}
                  alt="Book Cover"
                  id="book"
                  style={{ marginLeft: '25%', marginRight: '25%', height: '85%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.5s' }}
                />
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontWeight: '400', margin: '2px', padding: '2px', fontSize: '16.5px' }}>{item.book_name}</h3>
                  <h5 style={{ fontWeight: '500', margin: '2px', padding: '2px', color: '#9D9D9D', fontSize: '12px' }}>{item.book_author}</h5>
                </div>
                <p style={{ color: '#666666' }}>
                  <span style={{ fontWeight: 'bold', color: '#0A0102', marginLeft: '1%', fontSize: '13.5px' }}>Rs. {item.book_price}</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {buttonClicked[item.book_id] ? (
                    <Link to="/cart">
                    <button style={{backgroundColor:'blue', color: 'white', borderRadius: '2px', width: '150%', cursor: 'pointer', padding: '7% 25%' }}>
                      Go To Cart
                    </button>
                    </Link>
                  ) : (
                    <button onClick={() => addToCart(item.book_id, item.book_price)} style={{ backgroundColor: '#a03037', color: 'white', borderRadius: '2px', width: '45%', cursor: 'pointer', padding: '2% 2%' }}>
                      Add TO BAG
                    </button>
                  )}
                  <button className="wishlistButton" style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '2px', width: '45%', cursor: 'pointer', padding: '2% 2%' }}>
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;