// import React from 'react'
// import Header from './Header';
// import { Typography } from '@mui/material';
// import './Homepage.css';

// const Homepage = () => {
//   return (
//     <div>
//       <Header />
//       <div className='top' style={{ overflow: 'visible' }}>  {/* Added style attribute */}
//         <div>
//           <Typography variant='h5' marginLeft='11.3%' marginTop='2%'>
//             Books
//           </Typography>
//         </div>
//         <select name="sort" id="sort">
//           <option value="">Sort Items</option>
//         <option value="lowtohigh">Price: Lowest To Higest</option>
//         <option value="hightolow">Price: Higest To Lowest</option>
//         </select>
//       </div>
//     </div>
//   )
// }

// export default Homepage
import React from 'react';
import Header from './Header';
import { Typography } from '@mui/material';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='top'>
        <div>
          <Typography variant='h5'>
            Books
          </Typography>
        </div>
        <div className='select-container'>
          <select name="sort" id="sort">
            <option value="">Sort Items</option>
            <option value="lowtohigh">Price: Lowest To Highest</option>
            <option value="hightolow">Price: Highest To Lowest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
