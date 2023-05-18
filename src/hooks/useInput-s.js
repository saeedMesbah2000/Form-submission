import {useState, useEffect} from "react";

const useInput = (valueValidation) => {
  // i just want to print it for once :/
  useEffect(() => {
    console.log("using useState");
  }, []);

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
