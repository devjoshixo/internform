import React, { useState } from 'react';
import './Form.css';
import tick from '../../assets/tick.svg';

const form = () => {
  const [ticked, setTicked] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: '',
    age: '',
    email: '',
    guest: '',
  });

  //
  ////Guest input toggler
  const toggleTicked = () => {
    setTicked((prevState) => {
      setFormDetails((prev) => {
        return { ...prev, guest: '' };
      });

      return !prevState;
    });
  };

  //
  ////State value update
  const changeFormDetails = (event) => {
    const name = event.target.getAttribute('name');
    setFormDetails((prevState) => {
      return { ...prevState, [name]: event.target.value };
    });
  };

  const submitFormDetails = (event) => {
    event.preventDefault();
    console.log(formDetails);
  };

  return (
    <div className='w-5/7 flex flex-col gap-8 items-center border-2 border-black bg-form-bg shadow-[15px_15px_1px,15px_15px_1px_2px_rgba(0,0,0,1)] shadow-form-shadow py-8 px-16'>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={formDetails.name}
        onChange={changeFormDetails}
        className='w-full border-b-[5px] bg-form-bg pl-3 focus:border-form-shadow outline-none transition duration-200 ease-out md:ease-in'
      />
      <input
        type='Email'
        placeholder='Email'
        name='email'
        value={formDetails.email}
        onChange={changeFormDetails}
        className='w-full border-b-[5px] bg-form-bg pl-3 focus:border-form-shadow outline-none transition duration-200 ease-out md:ease-in'
      />
      <input
        type='text'
        placeholder='Age'
        name='age'
        value={formDetails.age}
        onChange={changeFormDetails}
        className='w-full border-b-[5px] bg-form-bg pl-3 focus:border-form-shadow outline-none transition duration-200 ease-out md:ease-in'
      />

      {/* Guest Div Box */}
      <div className='flex flex-col gap-2'>
        {/* Guest tickbox */}
        <div
          className='flex gap-2 cursor-pointer justify-center'
          onClick={toggleTicked}
        >
          <p>Are you attending with a guest</p>
          <div class='checkbox-wrapper-12'>
            <div class='cbx'>
              <input id='cbx-12' type='checkbox' checked={ticked} />
              <label for='cbx-12'></label>
              <svg width='15' height='14' viewbox='0 0 15 14' fill='none'>
                <path d='M2 8.36364L6.23077 12L13 2'></path>
              </svg>
            </div>

            <img src={tick} alt='' />
          </div>
        </div>
        {/* Guest tickbox */}
        <div className={`${ticked ? 'block' : 'hidden'} animate-slideIn`}>
          <input
            type='text'
            placeholder='Guest Name'
            name='guest'
            value={formDetails.guest}
            onChange={changeFormDetails}
            className={` w-full border-b-[5px] bg-form-bg pl-3 focus:border-form-shadow outline-none transition duration-200 ease-out md:ease-in`}
          />
        </div>
      </div>
      {/* Guest Div Box */}

      <button
        onClick={submitFormDetails}
        className='bg-form-shadow w-2/5 p-2 text-base font-mono font-thin border border-button shadow-[3px_3px_1px_1px,3px_3px_1px_2px_rgba(0,0,0,1)] shadow-form-primary-highlight hover:bg-button hover:text-form-bg'
      >
        Submit
      </button>
    </div>
  );
};

export default form;
