import FormContext from './FormContext';
import react, { useState, useEffect } from 'react';

const FormState = (props) => {
  const [roleSelector, setRoleSelector] = useState({});
  const [formDetails, setFormDetails] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    if (formDetails.role.trim() == '') return;

    setRoleSelector({ [formDetails.role]: true });
  }, [formDetails.role]);

  //
  ////State value update
  const changeFormDetails = (event) => {
    const name = event.target.getAttribute('name');
    setFormDetails((prevState) => {
      if (name == 'phone') {
        if (!isNaN(event.target.value)) {
          return { ...prevState, [name]: event.target.value.trim() };
        } else return prevState;
      }
      return { ...prevState, [name]: event.target.value };
    });
  };

  return (
    <FormContext.Provider
      value={{ roleSelector, formDetails, changeFormDetails }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
