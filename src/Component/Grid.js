// GridComponent.js
import React from 'react';
import './Grid.css';
import book1 from '../Asserts/book1.jpeg';
import book2 from '../Asserts/book2.jpeg';

const GridComponent = () => {
  return (
    <div className='grid-container'>
      {[...Array(12)].map((_, index) => (      
        <div className='box' key={index} style={{ backgroundImage: `url(${book2})`, backgroundSize: '40%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center 10%', textAlign: 'center', position: 'relative'}}>
          <div style={{ marginTop: '40%', marginLeft: '7%', fontFamily: 'bold' }}>The Kite Runner</div>
          <div style={{ position: 'absolute', bottom: '25.8%', left: '17%', transform: 'translateX(-50%)', fontSize: '12px', color: "#9D9D9D", fontFamily: 'bold' }}>by Harry</div>
          <div style={{ position: 'absolute', bottom: '18.5%', left: '17%', transform: 'translateX(-50%)', fontSize: '12.5px', fontWeight:"bold" }}>Rs.2000</div>
          <button style={{ position: 'absolute', bottom: '5%', left: '27%', transform: 'translateX(-50%)', padding: '5px 10px', backgroundColor: '#A03037', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>Add to Cart</button>
          <button style={{ position: 'absolute', bottom: '5%', left: '75%', transform: 'translateX(-50%)', padding: '5px 10px', backgroundColor: 'white', color: 'black', borderRadius: '2px', cursor: 'pointer', border:'1px solid black' }}>Wishlist</button>
          <div className="background-overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
