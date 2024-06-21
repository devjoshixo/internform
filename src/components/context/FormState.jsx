import FormContext from './FormContext';
import react, { useState } from 'react';

const FormState = (props) => {
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
      if (name == 'age') {
        if (!isNaN(event.target.value)) {
          return { ...prevState, [name]: event.target.value.trim() };
        } else return prevState;
      }
      return { ...prevState, [name]: event.target.value };
    });
  };

  return (
    <FormContext.Provider
      value={{ ticked, formDetails, changeFormDetails, toggleTicked }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
