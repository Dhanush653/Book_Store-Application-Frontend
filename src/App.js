import './App.css';
import {BrowserRouter, Route, Routes} 
from 'react-router-dom';
import Loginpage from './Component/Loginpage';
import Registerpage from './Component/Registerpage';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path = '/' element = {<Loginpage/>}/>   
        <Route path = '/register' element = {<Registerpage/>}/>   
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
