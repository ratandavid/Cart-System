import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import ProductGrid from './Pages/ProductGrid';
import Viewcart from './Pages/Viewcart';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/" element={<ProductGrid />} />
        <Route path="viewcart" element={<Viewcart />} />
      </Routes>

    </>
  );
}

export default App;
