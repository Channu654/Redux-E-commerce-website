import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Model } from './AddtoCartmodel/Model';
import Home from './Home/Home';

import Navbar from './Navbar/Navbar';
import ProductDetails from './SingleProduct/ProductDetails';

const Routing = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='/model' element={<Model />} />
      </Routes>
    </div>
  );
};

export default Routing;
