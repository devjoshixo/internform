import React, { useState } from 'react';
import Form from './components/Form/Form.jsx';
import './App.css';
import Display from './components/Display/Display.jsx';

function App() {
  const [formPage, setFormPage] = useState(true);

  const formPageHandler = (value) => {
    setFormPage(value);
  };

  return (
    <div className='w-3/4 pt-[5rem] h-full mx-auto flex justify-center items-center'>
      {formPage ? <Form setFormPage={setFormPage} /> : <Display />}
    </div>
  );
}

export default App;
