import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SingleData } from '../../Redux/Action';
import './ProductDetails.css';
import { Button } from '@chakra-ui/react';

const ProductDetails = () => {
  const state = useSelector((state) => state.reducer.currentData);
  console.log('state:', state);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log('id:', id);

  useEffect(() => {
    dispatch(SingleData(id));
  }, [dispatch, id]);

  return (
    <div className='details'>
      <img src={state.image} alt='' />
      <h4>{state.name}</h4>
      <div className='price-btn'>
        <h4>${state.price1}</h4>
        <h4 className='btn-line'>${state.price2}</h4>
      </div>
      <div className='addtocart'>
        <Button className='btn '>AddTocart</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
