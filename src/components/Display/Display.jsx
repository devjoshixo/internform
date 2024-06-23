import React, { useContext, useState, useEffect } from 'react';
import FormContext from './../context/FormContext';
import formatDateFromMilliseconds from '../Utility/dateFormatter';

const EXTRA = {
  Developer: [{ name: 'experience', label: 'Experience' }],
  Manager: [{ name: 'manager', label: 'Management Experience' }],
  Designer: [
    { name: 'experience', label: 'Experience' },
    { name: 'portfolio', label: 'Portfolio URL' },
  ],
};

const Display = () => {
  const [formattedDate, setFormattedDate] = useState('');

  const ctx = useContext(FormContext);
  useEffect(() => {
    setFormattedDate(formatDateFromMilliseconds(ctx.formDetails.date));
  }, []);
  return (
    <div className='w-4/7  overflow-hidden flex flex-col gap-6 items-center border-2 border-black bg-form-bg shadow-[15px_15px_1px,15px_15px_1px_2px_rgba(0,0,0,1)] shadow-form-shadow py-8 px-16'>
      <h2 className='bg-input-highlight p-3'>Your form has been submitted</h2>
      <div className='flex flex-col w-full'>
        <label className='bg-input-highlight pl-2'>Name</label>
        <input
          type='text'
          value={ctx.formDetails.name}
          className='bg-form-shadow pl-2 border text-sm py-[2px]'
          disabled
        />
      </div>
      <div className='flex flex-col w-full'>
        <label className='bg-input-highlight pl-2'>Email</label>
        <input
          type='text'
          value={ctx.formDetails.email}
          disabled
          className='bg-form-shadow pl-2 border text-sm py-[2px]'
        />
      </div>
      <div className='flex flex-col w-full'>
        <label className='bg-input-highlight pl-2'>Phone Number</label>
        <input
          type='text'
          value={ctx.formDetails.phone}
          disabled
          className='bg-form-shadow pl-2 border text-sm py-[2px]'
        />
      </div>
      <div className='flex flex-col w-full'>
        <label className='bg-input-highlight pl-2'>Role</label>
        <input
          type='text'
          value={ctx.formDetails.role}
          disabled
          className='bg-form-shadow pl-2 border text-sm py-[2px]'
        />
      </div>
      {EXTRA[ctx.formDetails.role].map((item) => {
        return (
          <div className='flex flex-col w-full'>
            <label className='bg-input-highlight pl-2'>
              {item.label[0].toUpperCase() + item.label.slice(1)}
            </label>
            <input
              type='text'
              value={ctx.formDetails[item.name]}
              disabled
              className='bg-form-shadow pl-2 border text-sm py-[2px]'
            />
          </div>
        );
      })}
      <div className='flex flex-col w-full'>
        <label className='bg-input-highlight pl-2'>Interview Time</label>
        <input
          type='text'
          value={formattedDate}
          disabled
          className='bg-form-shadow pl-2 border text-sm py-[2px]'
        />
      </div>
      <div className='flex flex-col w-full'>
        <label className='bg-input-highlight pl-2'>Additional Skills</label>
        <input
          type='text'
          value={ctx.formDetails.skills}
          disabled
          className='bg-form-shadow pl-2 border text-sm py-[2px]'
        />
      </div>
    </div>
  );
};

export default Display;
