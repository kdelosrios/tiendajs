import './App.css';
import React from 'react';
import Header from './components/layaout/Header';
import { Footer } from './components/layaout/Footer';
import { Home } from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductDetails from './components/products/ProductDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
      <div className='container container-fluid'>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/Home"  element={<Home />}/>
          <Route path="/producto/:id" element={<ProductDetails/>}></Route>
      </Routes> 
      </div>
      <Footer/>
    </div>
//    </Router>
  );
}

export default App;
