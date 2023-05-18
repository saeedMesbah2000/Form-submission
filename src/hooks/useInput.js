import {useState} from "react";

const useInput = (valueValidation) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = valueValidation(inputValue);
  const hasError = !inputIsValid && inputIsTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const onResetHandler = (event) => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    value: inputValue,
    inputIsValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    onResetHandler,
  };
};

export default useInput;
