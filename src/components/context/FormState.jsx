import FormContext from './FormContext';
import dayjs from 'dayjs';
import react, { useState, useEffect } from 'react';

const FormState = (props) => {
  const CURRENT_DATE = new Date();
  const [roleSelector, setRoleSelector] = useState({});
  const [formDetails, setFormDetails] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    manager: '',
    portfolio: '',
    experience: '',
    date: dayjs(CURRENT_DATE.setMinutes(CURRENT_DATE.getMinutes() + 5)),
    skills: [],
  });

  useEffect(() => {
    if (formDetails.role.trim() == '') {
      return;
    }

    console.log(formDetails);
    setRoleSelector({ [formDetails.role]: true });
  }, [formDetails.role]);

  console.log(formDetails.skills);
  //
  ////
  const changeFormSkill = (event) => {
    const name = event.target.name || event.target.getAttribute('name');
    setFormDetails((prevState) => {
      let skills = prevState.skills;
      if (skills.includes(name)) {
        skills = skills.filter((item) => {
          if (item != name) {
            return item;
          }
        });
        return { ...prevState, skills: [...skills] };
      }
      return { ...prevState, skills: [...skills, name] };
    });
  };

  //
  ////State value update
  const changeFormDetails = (event) => {
    const name = event.target.getAttribute('name');
    setFormDetails((prevState) => {
      if (name == 'phone' || name == 'experience' || name == 'manager') {
        if (!isNaN(event.target.value)) {
          return { ...prevState, [name]: event.target.value.trim() };
        } else return prevState;
      }
      return { ...prevState, [name]: event.target.value };
    });
  };

  //
  ////
  const formDateChanger = (value) => {
    setFormDetails((prevState) => {
      return { ...prevState, date: value };
    });
  };

  return (
    <FormContext.Provider
      value={{
        roleSelector,
        formDetails,
        changeFormDetails,
        formDateChanger,
        changeFormSkill,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
