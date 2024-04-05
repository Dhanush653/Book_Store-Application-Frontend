import React from 'react';
import Header from './Header';
import book1 from '../Asserts/book2.jpeg';

const Cart = () => {
  return (
    <div>
      <Header />
      <div style={{ border: '1.7px solid #DCDCDC', width: '700px', height: '250px', marginLeft: '10%', marginTop:'3%', position: 'relative' }}>
        <p style={{ position: 'absolute', top: '10px', left: '10%', transform: 'translateX(-50%)', fontSize: '20px' }}>My Cart</p>
        <img src={book1} alt="Book 1" style={{ maxWidth: '40%', maxHeight: '40%', objectFit: 'contain', position: 'absolute', left: '10%', top: '50%', transform: 'translate(-50%, -50%)' }} />
        <p style={{ position: 'absolute', top: '22.5%', left: '22.5%', transform: 'translateX(-50%)', fontSize: '14px',color:'#0A0102' }}>Kite Runner</p>
        <p style={{ position: 'absolute', top: '31.7%', left: '20.4%', transform: 'translateX(-50%)', fontSize: '10px', fontWeight:'bold', color:'#9D9D9D' }}>by Harry</p>
        <p style={{ position: 'absolute', top: '38.5%', left: '21.1%', transform: 'translateX(-50%)', fontSize: '15px',color:'#0A0102' , fontWeight:'bold'}}>Rs.1500</p>
        <div style={{ position: 'absolute', top: '63%', left: '25%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}> 
          <button style={{ marginRight: '5px' }}>-</button>
          <input type="text" style={{ width: '30px', textAlign: 'center', border: '1px solid #9D9D9D', borderRadius: '3px', padding: '3px' }} value="1" />
          <button style={{ marginLeft: '5px' }}>+</button>  
        </div>
        <p style={{ position: 'absolute', top: '57%', left: '37%', transform: 'translateX(-50%)', fontSize: '15px',color:'#0A0102' }}>Remove</p>
        <button style={{ position: 'absolute', bottom: '20px', right: '20px', padding: '8px 35px', backgroundColor: '#3371B5', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>Place Order</button>
      </div>
      <div style={{ border: '1.7px solid #DCDCDC', width: '700px', height: '400px', marginLeft: '10%', marginTop:'2%', position: 'relative', fontWeight:'bold'}}>
        <p style={{ position: 'absolute', top: '10px', left: '13%', transform: 'translateX(-50%)', fontSize: '15px', fontStyle:'Lato', color:'#333232', fontWeight:'normal' }}>Customer Details</p>
        <input placeholder="Name" style={{ position: 'absolute', top: '60px', left: '4.5%', width: '230px', height: '30px', borderRadius: '3px', border: '1px solid #DCDCDC', padding: '4px' }} />
        <input placeholder="Phone Number" style={{ position: 'absolute', top: '60px', left: '42%', width: '230px', height: '30px', borderRadius: '3px', border: '1px solid #DCDCDC', padding: '4px' }} />
        <input placeholder="Pincode" style={{ position: 'absolute', top: '110px', left: '4.5%', width: '230px', height: '30px', borderRadius: '3px', border: '1px solid #DCDCDC', padding: '4px' }} />
        <input placeholder="Locality" style={{ position: 'absolute', top: '110px', left: '42%', width: '230px', height: '30px', borderRadius: '3px', border: '1px solid #DCDCDC', padding: '4px' }} />
        <input placeholder="Address" style={{ position: 'absolute', top: '160px', left: '4.5%', width: '494px', height: '90px', borderRadius: '3px', border: '1px solid #DCDCDC', padding: '4px' }} />
        <input placeholder="City/town" style={{ position: 'absolute', top: '270px', left: '4.5%', width: '230px', height: '30px', borderRadius: '3px', border: '1px solid #DCDCDC', padding: '4px' }} />
        <input placeholder="Landmark" style={{ position: 'absolute', top: '270px', left: '42%', width: '230px', height: '30px', borderRadius: '3px', border: '1px solid #DCDCDC', padding: '4px' }} />
        <div style={{ position: 'absolute', top: '340px', left: '4%' }}>
          <input type="radio" id="home" name="address" value="home" />
          <label htmlFor="home" style={{ marginRight: '60px', fontSize:'12px', color:'grey' }}>Home</label>
          <input type="radio" id="work" name="address" value="work" />
          <label htmlFor="work" style={{ marginRight: '60px' , fontSize:'12px', color:'grey'}}>Work</label>
          <input type="radio" id="others" name="address" value="others" />
          <label htmlFor="others" style={{fontSize:'12px', color:'grey'}}>Others</label>
        </div>
        <button style={{ position: 'absolute', bottom: '20px', right: '20px', padding: '8px 45px', backgroundColor: '#3371B5', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>Continue</button>
      </div>
      <div style={{ border: '1.7px solid #DCDCDC', width: '700px', height: '250px', marginLeft: '10%', marginTop:'2%', position: 'relative', fontWeight:'bold', marginBottom:'3%'}}>
      <p style={{ position: 'absolute', top: '10px', left: '12.5%', transform: 'translateX(-50%)', fontSize: '15px' , fontWeight:'normal'}}>Order Summery</p>
      <img src={book1} alt="Book 1" style={{ maxWidth: '40%', maxHeight: '40%', objectFit: 'contain', position: 'absolute', left: '10%', top: '50%', transform: 'translate(-50%, -50%)' }} />
      <p style={{ position: 'absolute', top: '23.5%', left: '22.5%', transform: 'translateX(-50%)', fontSize: '14px',color:'#0A0102', fontWeight:'normal' }}>Kite Runner</p>
      <p style={{ position: 'absolute', top: '31.7%', left: '20.4%', transform: 'translateX(-50%)', fontSize: '10px', fontWeight:'bold', color:'#9D9D9D' }}>by Harry</p>
      <p style={{ position: 'absolute', top: '38.5%', left: '21.1%', transform: 'translateX(-50%)', fontSize: '15px',color:'#0A0102' , fontWeight:'bold'}}>Rs.1500</p>
      <button style={{ position: 'absolute', bottom: '20px', right: '20px', padding: '8px 45px', backgroundColor: '#3371B5', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
