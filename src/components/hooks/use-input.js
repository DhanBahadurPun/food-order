import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnterValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);
  const [checkedValue, setCheckedValue] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouch;

  const valueChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const checkedChangeHandler = (event) => {
    setCheckedValue(event.target.checked);
  };

  const blurChangeHandler = () => {
    setIsTouch(true);
  };

  const reset = () => {
    setEnterValue("");
    setIsTouch(false);
    setCheckedValue(false);
  };

  return {
    value: enteredValue,
    checkedValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    blurChangeHandler,
    checkedChangeHandler,
    reset,
  };
};

export default useInput;
