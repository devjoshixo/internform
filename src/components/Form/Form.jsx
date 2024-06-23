import React, { useState, useContext } from 'react';
import './Form.css';
import tick from '../../assets/tick.svg';
import useErrorHandler from '../hooks/useErrorHandler';
import formContext from '../context/FormContext.jsx';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import enLocale from 'date-fns/locale/en-IN';
import dayjs from 'dayjs';

const form = (props) => {
  const ctx = useContext(formContext);
  const [error, checkError, roleErrorCheck] = useErrorHandler(ctx.formDetails);

  //
  ////
  const submitFormDetails = (event) => {
    event.preventDefault();
    if (roleErrorCheck(ctx.formDetails)) {
      props.setFormPage(false);
    }
  };

  return (
    <div className='w-2/5 flex flex-col gap-6 items-center border-2 border-black bg-form-bg shadow-[15px_15px_1px,15px_15px_1px_2px_rgba(0,0,0,1)] shadow-form-shadow py-8 px-16'>
      <h2>Fill your details</h2>
      {/* // */}
      {/* Name Input */}
      <div className='w-full'>
        <input
          type='text'
          placeholder='Full Name'
          name='name'
          value={ctx.formDetails.name}
          onChange={ctx.changeFormDetails}
          className={` w-full bg-form-bg border-b-[5px] pl-3 pt-1 focus:border-[#4f62b8]  ${
            error.name == true ? 'border-error-highlight' : ''
          } outline-none transition duration-200 ease-out md:ease-in`}
        />
        <p className='text-[12px] text-error-highlight font-mono font-thin min-h-3 h-3 max-w-9/12'>
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
        <p className='text-[12px] text-error-highlight font-mono font-thin min-h-3 h-3 max-w-9/12'>
          {error.email ? 'Please provide a correct email' : ''}
        </p>
      </div>
      {/* Email Input */}
      {/* // */}

      {/* // */}
      {/* Phone Input */}
      <div className='w-full'>
        <input
          type='text'
          placeholder='Phone Number'
          name='phone'
          value={ctx.formDetails.phone}
          onChange={ctx.changeFormDetails}
          className={`w-full border-b-[5px] bg-form-bg pl-3 focus:border-[#4f62b8] ${
            error.phone == true ? 'border-error-highlight' : 'border-b-[5px]'
          } outline-none transition duration-200 ease-out md:ease-in`}
        />
        <p className='text-[12px] text-error-highlight font-mono font-thin min-h-3 h-3 max-w-9/12'>
          {error.phone ? 'Please provide correct phone number' : ''}
        </p>
      </div>
      {/* Phone Input */}
      {/* // */}

      {/* // */}
      {/* Role selector  */}
      <div className='w-full'>
        <select
          name='role'
          onChange={ctx.changeFormDetails}
          className={`w-full border ${
            error.role ? 'border-error-highlight' : 'border-font-color'
          }  rounded-[5px] bg-form-bg text-sm px-3 py-1`}
        >
          <option value='' default hidden>
            Applying for Position
          </option>
          <option value='Developer' className='p-1'>
            Developer
          </option>
          <option value='Designer' className=' rounded-[20px]'>
            Designer
          </option>
          <option value='Manager' className=' rounded-[20px]'>
            Manager
          </option>
        </select>
        <p className='text-[12px] text-error-highlight font-mono font-thin min-h-3 h-2 max-w-9/12'>
          {error.role ? 'Please select a role' : ''}
        </p>
      </div>
      {/* Role selector  */}
      {/* // */}

      {/* // */}
      {/* Experience Input */}
      {ctx.roleSelector['Developer'] || ctx.roleSelector['Designer'] ? (
        <div className='w-full'>
          <input
            type='text'
            placeholder='Relevant Experiences (years)'
            name='experience'
            value={ctx.formDetails.experience}
            onChange={ctx.changeFormDetails}
            className={`w-full border-b-[5px] bg-form-bg pl-3 focus:border-[#4f62b8] ${
              error.experience == true ? 'border-error-highlight' : ''
            } outline-none transition duration-200 ease-out md:ease-in`}
          />
          <p className='text-[12px] text-error-highlight font-mono font-thin min-h-3 h-3 max-w-9/12'>
            {error.experience ? 'Please provide experience details' : ''}
          </p>
        </div>
      ) : (
        ''
      )}
      {/* Experience Input */}
      {/* // */}

      {/* // */}
      {/* Portfolio Input */}
      {ctx.roleSelector['Designer'] && (
        <div className='w-full'>
          <input
            type='text'
            placeholder='Portfolio URL'
            name='portfolio'
            value={ctx.formDetails.portfolio}
            onChange={ctx.changeFormDetails}
            className={`w-full border-b-[5px] bg-form-bg pl-3 focus:border-[#4f62b8] ${
              error.portfolio == true ? 'border-error-highlight' : ''
            } outline-none transition duration-200 ease-out md:ease-in`}
          />
          <p className='text-[12px] text-error-highlight font-mono font-thin min-h-3 h-3 max-w-9/12'>
            {error.portfolio ? 'Please provide experience details' : ''}
          </p>
        </div>
      )}
      {/* Portfolio Input */}
      {/* // */}

      {/* // */}
      {/* Manager Experience Input */}
      {ctx.roleSelector['Manager'] && (
        <div className='w-full'>
          <input
            type='text'
            placeholder='Managment Experience (years)'
            name='manager'
            value={ctx.formDetails.manager}
            onChange={ctx.changeFormDetails}
            className={`w-full border-b-[5px] bg-form-bg pl-3 focus:border-[#4f62b8] ${
              error.manager == true ? 'border-error-highlight' : ''
            } outline-none transition duration-200 ease-out md:ease-in`}
          />
          <p className='text-[12px] text-error-highlight font-mono font-thin min-h-3 h-3 max-w-9/12'>
            {error.manager ? 'Please provide experience details' : ''}
          </p>
        </div>
      )}
      {/* Manager Experience Input */}
      {/* // */}

      {/* // */}
      {/* Additional Skills */}
      {console.log(error)}
      <div className='flex flex-col justify-start w-full gap-1'>
        <p
          className={`mb-1 border-b-4 w-1/2 ${
            error.skills ? 'border-error-highlight' : ''
          } `}
        >
          Additional Skills :
        </p>
        <div
          className='flex gap-2 items-center'
          onClick={ctx.changeFormSkill}
          name='Javascript'
        >
          <input
            name='Javascript'
            type='checkbox'
            className='rounded w-4 h-4 accent-form-shadow hover:bg-form-shadow'
            checked={ctx.formDetails.skills.includes('Javascript')}
          />

          <label name='Javascript' className='text-[0.95rem]'>
            Javascript
          </label>
        </div>
        <div
          className='flex gap-2 items-center'
          onClick={ctx.changeFormSkill}
          name='CSS'
        >
          <input
            name='CSS'
            type='checkbox'
            className='rounded w-4 h-4 accent-form-shadow hover:bg-form-shadow'
            checked={ctx.formDetails.skills.includes('CSS')}
          />
          <label className='text-[0.95rem]' name='CSS'>
            CSS
          </label>
        </div>
        <div
          className='flex gap-2 items-center'
          onClick={ctx.changeFormSkill}
          name='Python'
        >
          <input
            name='Python'
            type='checkbox'
            checked={ctx.formDetails.skills.includes('Python')}
            className='rounded w-4 h-4 accent-form-shadow hover:bg-form-shadow'
          />
          <label className='text-[0.95rem]' name='Python'>
            Python
          </label>
        </div>
      </div>
      {/* Additional Skills */}
      {/* // */}

      {/* // */}
      {/* Interview Time */}
      <LocalizationProvider dateAdapter={AdapterDayjs} locale={'enLocale'}>
        <DateTimePicker
          name='date'
          className='datepicker'
          disablePast
          value={ctx.formDetails.date}
          onChange={(event) => {
            ctx.formDateChanger(event);
          }}
          format='DD/MM/YYYY hh:mm a'
        />
      </LocalizationProvider>
      {/* Interview Time */}
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
