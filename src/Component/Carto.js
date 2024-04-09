import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Typography, Button, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import Bookservice from '../Service/Bookservice'; 
const Carto = () => {
  const { userId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [address, setAddress] = useState(''); 
  const [showOrderSummary, setShowOrderSummary] = useState(false); 

  useEffect(() => {
    fetchCartItems(userId);
  }, [userId]);

  const fetchCartItems = async (userId) => {
    try {
      const response = await Bookservice.fetchCartItems(userId);
      const cartItemsWithDetails = await Promise.all(response.data.map(async (item) => {
        const bookDetailsResponse = await Bookservice.fetchBookDetails(item.book_id);
        return { ...item, book: bookDetailsResponse.data };
      }));
      setCartItems(cartItemsWithDetails);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handlePlaceOrder = () => {
    setShowCustomerDetails(true);
  };

  const handleContinue = () => {
    setShowOrderSummary(true);
  };

  const handleCheckout = () => {
    const orderDTO = {
      cart_id: cartItems.length > 0 ? cartItems[0].cart_id : null, 
      address: address 
    };
    console.log('Sending to backend:', orderDTO); 
    
    Bookservice.placeOrder(orderDTO)
      .then(response => {
        console.log('Order placed successfully:', response.data);
       
        window.location.href = `/orders/${userId}/${address}`;
      })
      .catch(error => {
        console.error('Error placing order:', error);
        
      });
  };

  const handleQuantityChange = (event, cartId) => {
    const newQuantity = event.target.value;
    Bookservice.updateQuantity(cartId, newQuantity)
      .then(response => {
        console.log('Quantity updated successfully:', response.data);
        fetchCartItems(userId);
      })
      .catch(error => {
        console.error('Error updating quantity:', error);
      });
  };

  return (
    <div className='container'>
      <Header />
      <div className='top'>
        <div className='book'>
          <Typography variant='h5'>
            
          </Typography>
        </div>
      </div>

      <div style={{ margin: '20px 165px', padding: '20px', border: '1px solid #707070', maxWidth: '800px' }}>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <div style={{ marginBottom: '50px' }}>
            <Typography variant='h5' marginBottom={6}>
              My Cart
            </Typography>
            {cartItems.map((item, index) => (
              <React.Fragment key={item.cart_id}>
                {item.book && (
                  <div style={{ marginBottom: '80px' , marginLeft:'20px'}}>
                    <img
                      src={`/Asserts/${item.book.book_logo.includes('/carto/') ? item.book.book_logo.replace('/carto/', '') : item.book.book_logo}`}
                      alt={item.book.book_name}
                      style={{ width: '90px', height: 'auto', marginRight: '20px' }}
                    />
                    <div>
                      <Typography variant="h6" marginLeft={17} marginTop={-17} fontSize='16px'>{item.book.book_name}</Typography>
                      <Typography variant="subtitle1" marginLeft={17} fontSize='12px' color='#9D9D9D'>Author: {item.book.book_author}</Typography>
                      <Typography variant="subtitle1" marginLeft={17} fontSize='17px' >Rs. {item.book_price}</Typography>
                      <div style={{ display: 'flex', alignItems: 'center', marginTop:'35px' }}>
                        <Typography variant="subtitle1" style={{ marginRight: '10px', marginLeft:'135px' ,color:'#9D9D9D',fontSize:'12px' }}>Quantity:</Typography>
                        <TextField
                        type='number'
                        defaultValue={1}
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(e, item.cart_id)}
                        style={{ width:'60px', marginTop:'5px'}}
                        InputProps={{
                        style: { height: '25px' } 
                        }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        <Button variant="contained" color="primary" style={{ marginTop: '10px', marginLeft: 'auto', display: 'block' }} onClick={handlePlaceOrder}>Place Order</Button>
      </div>

      {showCustomerDetails && (
        <div style={{ margin: '20px 165px', padding: '20px', border: '1px solid #707070', maxWidth: '800px' }}>
          <Typography variant='h5' marginBottom={6}>
            Customer Details
          </Typography>
          <form style={{marginLeft:'0'}}>
            <TextField label="Name" variant="outlined" style={{ marginRight: '10px' }} />
            <TextField label="Phone number" variant="outlined" style={{ marginRight: '10px' }} />
            <TextField label="Address" variant="outlined" style={{ width: '457px', marginRight: '10px', marginTop:'10px', marginBottom:'10px' }} onChange={(e) => setAddress(e.target.value)} />
            <div></div>
            <TextField label="City/Town" variant="outlined" style={{ marginRight: '10px' }} />
            <TextField label="Landmark" variant="outlined" style={{ marginRight: '10px' }} />
            <RadioGroup row aria-label="addressType" name="addressType" style={{marginLeft:'10px', marginTop:'10px'}}>
              <FormControlLabel value="home" control={<Radio />} label="Home" style={{marginRight:'5'}} />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <Button variant="contained" color="primary" style={{ marginLeft: 'auto', display: 'block' }} onClick={handleContinue}>Continue</Button>
          </form>
        </div>
      )}

      {showOrderSummary && (
        <div style={{ margin: '20px 165px', padding: '20px', border: '1px solid #707070', maxWidth: '800px' }}>
          <Typography variant='h5' marginBottom={6}>
            Order summary
          </Typography>
          {cartItems.map((item, index) => (
            <React.Fragment key={item.cart_id}>
              {item.book && (
                <div style={{ marginBottom: '80px' , marginLeft:'20px'}}>
                  <img
                    src={`/Asserts/${item.book.book_logo.includes('/carto/') ? item.book.book_logo.replace('/carto/', '') : item.book.book_logo}`}
                    alt={item.book.book_name}
                    style={{ width: '90px', height: 'auto', marginRight: '20px' }}
                  />
                  <div>
                    <Typography variant="h6" marginLeft={17} marginTop={-17} fontSize='16px'>{item.book.book_name}</Typography>
                    <Typography variant="subtitle1" marginLeft={17} fontSize='12px' color='#9D9D9D'>Author: {item.book.book_author}</Typography>
                    <Typography variant="subtitle1" marginLeft={17} fontSize='17px' >Rs. {item.book_price}</Typography>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
          <Button variant="contained" color="primary" style={{ marginLeft: 'auto', display: 'block' }} onClick={handleCheckout}>Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default Carto;
