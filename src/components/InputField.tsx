import React from 'react';
import './style.css';

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' className='input-box' placeholder='Enter a task' />
      <button className='input-submit' type='submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;
