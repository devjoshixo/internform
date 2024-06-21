import React, { useContext } from 'react';
import FormContext from './../context/FormContext';

const Display = () => {
  const ctx = useContext(FormContext);
  return (
    <div className='w-5/7 flex flex-col gap-6 items-center border-2 border-black bg-form-bg shadow-[15px_15px_1px,15px_15px_1px_2px_rgba(0,0,0,1)] shadow-form-shadow py-8 px-16'>
      <h2 className='bg-input-highlight p-3'>Your form has been submitted</h2>
      <div className='flex flex-col'>
        <label className='bg-input-highlight pl-2'>Name</label>
        <input
          type='text'
          value={ctx.formDetails.name}
          disabled
          className='bg-form-shadow pl-2 border'
        />
      </div>
      <div className='flex flex-col'>
        <label className='bg-input-highlight pl-2'>Email</label>
        <input
          type='text'
          value={ctx.formDetails.email}
          disabled
          className='bg-form-shadow pl-2 border'
        />
      </div>
      <div className='flex flex-col'>
        <label className='bg-input-highlight pl-2'>Age</label>
        <input
          type='text'
          value={ctx.formDetails.age}
          disabled
          className='bg-form-shadow pl-2 border'
        />
      </div>
      {ctx.ticked && (
        <div className='flex flex-col'>
          <label className='bg-input-highlight pl-2'>Guest</label>
          <input
            type='text'
            value={ctx.formDetails.guest}
            disabled
            className='bg-form-shadow pl-2 border'
          />
        </div>
      )}
    </div>
  );
};

export default Display;
