import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopePage from './pages/shop/Shop';


function App() {
  return (
    <div >
    <Routes>
      <Route  path='/' element={<HomePage />} />
      <Route  path='/shop' element={<ShopePage />} />
    </Routes>  
    </div>
  );
}

export default App;
