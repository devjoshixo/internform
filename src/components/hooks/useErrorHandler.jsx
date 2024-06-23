import { useEffect, useState } from 'react';

const COMMON = ['name', 'phone', 'email', 'skills', 'date'];

const useErrorHandler = (formDetails) => {
  const [error, setError] = useState({});
  console.log(error);

  const roleErrorCheck = (formDetails) => {
    let flag = false;
    let keys = checkError(formDetails);
    if (!keys) {
      return true;
    }
    if (formDetails.role.trim() == '') {
      return false;
    }
    if (formDetails.role == 'Developer') {
      if (error.experience) {
        flag = false;
      } else if (!error.portfolio) {
        flag = true;
      }
    } else if (formDetails.role == 'Designer') {
      if (error.experience || error.portfolio) {
        flag = false;
      }
      if (!error.experience || !error.portfolio) {
        flag = true;
      }
    } else if (formDetails.role == 'Manager') {
      if (error.manager) {
        flag = false;
      } else if (!error.manager) {
        flag = false;
      }
    }
    let commonflag = true;
    Object.keys(error).map((item) => {
      if (COMMON.includes(item)) {
        commonflag = false;
      }
    });
    if (flag && commonflag) {
      return true;
    }
  };
  const checkError = (formDetails) => {
    let urlRegex =
      /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    let phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const keys = Object.keys(formDetails);
    let newError = {};

    if (formDetails.name.trim() == '') {
      newError['name'] = true;
    }
    if (formDetails.phone <= 0 || !phoneRegex.test(formDetails.phone)) {
      newError['phone'] = true;
    }

    if (!formDetails.experience.isDigit && formDetails.experience <= 0) {
      newError['experience'] = true;
    }

    if (formDetails.skills.length == 0) {
      newError['skills'] = true;
    }
    if (formDetails.email.trim() == '' || !emailRegex.test(formDetails.email)) {
      newError['email'] = true;
    }
    if (formDetails.role.trim() == '') {
      newError['role'] = true;
    }
    if (!urlRegex.test(formDetails.portfolio)) {
      newError['portfolio'] = true;
    }
    if (!formDetails.manager.isDigit && formDetails.manager <= 0) {
      newError['manager'] = true;
    }

    setError((prevState) => {
      return { ...newError };
    });
    return Object.keys(newError).length;
  };

  return [error, checkError, roleErrorCheck];
};

export default useErrorHandler;
