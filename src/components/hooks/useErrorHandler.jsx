import { useEffect, useState } from 'react';

const useErrorHandler = (formDetails) => {
  const [error, setError] = useState({});

  const checkError = (formDetails, ticked) => {
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const keys = Object.keys(formDetails);
    let newError = {};

    if (formDetails.name.trim() == '') {
      newError['name'] = true;
    }
    if (!formDetails.phone.isDigit && formDetails.phone <= 0) {
      newError['phone'] = true;
    }
    if (!formDetails.experience.isDigit && formDetails.phone <= 0) {
      newError['experience'] = true;
    }
    if (formDetails.email.trim() == '' || !emailRegex.test(formDetails.email)) {
      newError['email'] = true;
    }
    if (formDetails.role.trim() == '') {
      newError['role'] = true;
    }
    console.log(newError);
    setError((prevState) => {
      return { ...newError };
    });
    return Object.keys(newError).length === 0;
  };

  return [error, checkError];
};

export default useErrorHandler;
