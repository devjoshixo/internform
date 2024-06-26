import React, { useState, useContext } from 'react';
import './Form.css';
import tick from '../../assets/tick.svg';
import useErrorHandler from '../hooks/useErrorHandler';
import formContext from '../context/FormContext.jsx';

const form = (props) => {
  const ctx = useContext(formContext);
  const [error, checkError] = useErrorHandler(ctx.formDetails);

  //
  ////
  const submitFormDetails = (event) => {
    event.preventDefault();
    if (checkError(ctx.formDetails, ctx.ticked)) {
      props.setFormPage(false);
    }
  };

  return (
    <div className='w-5/7 flex flex-col gap-6 items-center border-2 border-black bg-form-bg shadow-[15px_15px_1px,15px_15px_1px_2px_rgba(0,0,0,1)] shadow-form-shadow py-8 px-16'>
      <h2>Fill your details</h2>
      {/* // */}
      {/* Name Input */}
      <div className='w-full'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={ctx.formDetails.name}
          onChange={ctx.changeFormDetails}
          className={` w-full bg-form-bg border-b-[5px] pl-3 pt-1 focus:border-[#4f62b8]  ${
            error.name == true ? 'border-error-highlight' : ''
          } outline-none transition duration-200 ease-out md:ease-in`}
        />
        <p className='text-[12px] text-error-highlight font-mono font-thin h-3'>
          {error.name ? 'Please provide a name' : ''}
        </p>
      </div>
      {/* Name Input */}
      {/* // */}

      {/* // */}
      {/* Email Input */}
      <div className='w-full'>
        {' '}
        <input
          type='Email'
          placeholder='Email'
          name='email'
          value={ctx.formDetails.email}
          onChange={ctx.changeFormDetails}
          className={`w-full border-b-[5px] bg-form-bg pl-3 focus:border-[#4f62b8] ${
            error.email == true ? 'border-error-highlight' : ''
          } outline-none transition duration-200 ease-out md:ease-in`}
        />
        <p className='text-[12px] text-error-highlight font-mono font-thin h-3'>
          {error.email ? 'Please provide a correct email' : ''}
        </p>
      </div>
      {/* Email Input */}
      {/* // */}

      {/* // */}
      {/* Age Input */}
      <div className='w-full'>
        <input
          type='text'
          placeholder='Age'
          name='age'
          value={ctx.formDetails.age}
          onChange={ctx.changeFormDetails}
          className={`w-full border-b-[5px] bg-form-bg pl-3 focus:border-[#4f62b8] ${
            error.age == true ? 'border-error-highlight' : ''
          } outline-none transition duration-200 ease-out md:ease-in`}
        />
        <p className='text-[12px] text-error-highlight font-mono font-thin h-3'>
          {error.age ? 'Please provide a correct age' : ''}
        </p>
      </div>
      {/* Age Input */}
      {/* // */}

      {/* // */}
      {/* Guest Div Box */}
      <div className='flex flex-col gap-2'>
        {/* // */}
        {/* Guest tickbox */}
        <div
          className='flex gap-2 cursor-pointer justify-center'
          onClick={ctx.toggleTicked}
        >
          <p>Are you attending with a guest</p>
          <div className='checkbox-wrapper-12'>
            <div className='cbx'>
              <input
                id='cbx-12'
                type='checkbox'
                checked={ctx.ticked}
                onChange={() => {}}
              />
              <label htmlFor='cbx-12'></label>
              <svg width='15' height='14' viewBox='0 0 15 14' fill='none'>
                <path d='M2 8.36364L6.23077 12L13 2'></path>
              </svg>
            </div>

            <img src={tick} alt='' />
          </div>
        </div>
        {/* // */}
        {/* Guest tickbox */}
        {/* // */}

        {/* // */}
        {/* Guest name */}
        <div className={`${ctx.ticked ? 'block' : 'hidden'} animate-slideIn`}>
          <input
            type='text'
            placeholder='Guest Name'
            name='guest'
            value={ctx.formDetails.guest}
            onChange={ctx.changeFormDetails}
            className={` w-full border-b-[5px] bg-form-bg pl-3 focus:border-[#4f62b8] ${
              error.guest == true ? 'border-error-highlight' : ''
            } outline-none transition duration-200 ease-out md:ease-in`}
          />
          <p className='text-[12px] text-error-highlight font-mono font-thin h-3'>
            {error.guest ? 'Please provide a Guest name' : ''}
          </p>
        </div>
      </div>
      {/* // */}
      {/* Guest Div Box */}
      {/* // */}
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
