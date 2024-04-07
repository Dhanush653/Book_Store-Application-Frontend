import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import order from '../Asserts/order.png'

const Orders = () => {
  const { userId, address } = useParams(); 

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            className="img"
            src={order}
            alt="order"
            style={{ width: '100%', height: '40vh' }}
          />
          <div style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', color: '#333232', fontWeight: '500' ,whiteSpace: 'nowrap'}}>Order Placed Successfully</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem', padding: '0 2rem' }}>
        <p style={{ fontWeight: 200, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: '1.25rem', color: '#4B5563', textAlign: 'center' }}>
          hurray!!! your order is confirmed<br />
          the order id is #123456 save the order id <br />for further
          communicamation..
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', marginBottom: '4rem' }}>
        <table style={{ borderCollapse: 'collapse', width: '75%', textAlign: 'center', border: '1px solid black' }}>
          <thead>
            <tr style={{ background: '#fafafa' }}>
              <th style={{ border: '1px solid #dcdcdc', padding: '14px' }}>Email us</th>
              <th style={{ border: '1px solid #dcdcdc', padding: '14px' }}>Contact us</th>
              <th style={{ border: '1px solid #dcdcdc', padding: '14px' }}>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#f2f2f2' }}>
              <td style={{ border: '1px solid #e2e2e2', padding: '18px' }}>admin@bookstore.com</td>
              <td style={{ border: '1px solid #e2e2e2', padding: '18px' }}>+91 8163475881</td>
              <td style={{ border: '1px solid #e2e2e2', padding: '18px' }}>
                {address} 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem' }}>
        <div>
          <a href={`/${userId}`}> 
            <button style={{ backgroundColor: '#3371b5', borderRadius: '3px', color: '#fff', padding: '0.5rem 1rem', border: 'none', cursor: 'pointer', marginBottom:'10px' }}>
              CONTINUE SHOPPING
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Orders;
