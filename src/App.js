import './App.css';
import {BrowserRouter, Route, Routes} 
from 'react-router-dom';
import Loginpage from './Component/Loginpage';
import Registerpage from './Component/Registerpage';
import Homepage from './Component/Homepage';
import Cart from './Component/Cart';
import Orders from './Component/order';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path = '/' element = {<Loginpage/>}/>   
        <Route path = '/register' element = {<Registerpage/>}/>
        <Route path='/home' element = {<Homepage/>}/> 
        <Route path='/cart' element = {<Cart/>}/>
        <Route path = '/orders' element = {<Orders/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
