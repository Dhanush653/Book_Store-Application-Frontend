import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Component/Loginpage';
import Registerpage from './Component/Registerpage';
import Homepage from './Component/Homepage';
import Order from './Component/order';
import Carto from './Component/Carto';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/:userId" element={<Homepage />} /> 
          <Route path="/orders/:userId/:address" element={<Order />} />
          <Route path="/carto/:userId" element={<Carto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
