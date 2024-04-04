import './App.css';
import {BrowserRouter, Route, Routes} 
from 'react-router-dom';
import Loginpage from './Component/Loginpage';
import Registerpage from './Component/Registerpage';
import Homepage from './Component/Homepage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path = '/' element = {<Loginpage/>}/>   
        <Route path = '/register' element = {<Registerpage/>}/>
        <Route path='/home' element = {<Homepage/>}/> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
