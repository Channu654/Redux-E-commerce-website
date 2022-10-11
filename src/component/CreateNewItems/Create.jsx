import React from 'react';
import './Create.css';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Create = () => {
  const [input, setInput] = useState({
    Name: '',
    url: '',
    price: '',
    strike_price: '',
  });
  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const [formdata, setFormData] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newData = { ...input, id: uuidv4() };
    setFormData(...formdata, newData);
   
  };
  console.log('formdata', formdata);
  return (
    <div>
      <form action='' onSubmit={formSubmit}>
        <div className='create-form'>
          <input
            type='text'
            placeholder='item name'
            name='Name'
            value={input.Name}
            onChange={handleInput}
          />
          <br />
          <input
            type='text'
            placeholder='item url'
            name='url'
            value={input.url}
            onChange={handleInput}
          />
          <br />
          <input
            type='text'
            placeholder='price'
            name='price'
            value={input.price}
            onChange={handleInput}
          />
          <br />
          <input
            type='text'
            placeholder='strike_price'
            name='strike_price'
            value={input.strike_price}
            onChange={handleInput}
          />
          <br />
          <Button type='submit' className='add-btn'>
            AddItem
          </Button>
          <br />
        </div>
      </form>
    </div>
  );
};

export default Create;
