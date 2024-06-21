import { useEffect, useState } from 'react';

const useErrorHandler = (formDetails) => {
  const [error, setError] = useState({});

  const checkError = (formDetails, ticked) => {
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const keys = Object.keys(formDetails);
    let newError = {};

    if (formDetails.name.trim() == '') {
      newError = { ...newError, name: true };
    }
    if (!formDetails.age.isDigit && formDetails.age <= 0) {
      newError = { ...newError, age: true };
    }
    if (formDetails.email.trim() == '' || !emailRegex.test(formDetails.email)) {
      newError = { ...newError, email: true };
    }
    if (ticked) {
      if (formDetails.guest.trim() == '') {
        newError = { ...newError, guest: true };
      }
    }
    setError((prevState) => {
      return { ...newError };
    });
    return Object.keys(newError).length === 0;
  };

  return [error, checkError];
};

export default useErrorHandler;
