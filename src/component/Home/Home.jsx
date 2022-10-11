import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Home.css';
// import ProductDetails from './SingleProduct/ProductDetails';
import { Link } from 'react-router-dom';
import { getData } from '../../Redux/Action';
import Create from '../CreateNewItems/Create';

const Home = () => {
  const state = useSelector((state) => state.reducer);
  console.log('state:', state);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      
      <div>
        <Create />
      </div>
      <div className='home-container'>
        {state.data.map((item) => {
          const { image, name, price1, price2, id } = item;
          return (
            <div className='container' key={id}>
              <Link to={`/products/${id}`}>
                <div>
                  <img src={image} alt='' />
                  <h4>{name}</h4>
                </div>
                <div className='price'>
                  <h4>${price1}</h4>
                  <h5>${price2}</h5>
                </div>
              </Link>
              {/* <button className='button'>AddTocart</button> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
