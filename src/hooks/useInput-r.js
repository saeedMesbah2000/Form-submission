import {useReducer, useEffect} from "react";

// prevent hard coding the actions
// it's just best practice :)
const Actions = {
  Change: "change",
  Blur: "blur",
  Reset: "reset",
};

const initailInputState = {
  value: "",
  isTouched: false,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case Actions.Change:
      return {...currentState, value: action.payload.value};

    case Actions.Blur:
      return {...currentState, isTouched: true};

    case Actions.Reset:
      return initailInputState;

    default:
      return currentState;
  }
};

const useInput = (valueValidation) => {
  // i just want to print it for once :/
  useEffect(() => {
    console.log("using useReducer");
  }, []);

  const [inputState, dispatch] = useReducer(reducer, initailInputState);

  const inputIsValid = valueValidation(inputState.value);
  const hasError = !inputIsValid && inputState.isTouched;

  const onChangeHandler = (event) => {
    dispatch({type: Actions.Change, payload: {value: event.target.value}});
  };

  const onBlurHandler = (event) => {
    dispatch({type: Actions.Blur});
  };

  const onResetHandler = (event) => {
    dispatch({type: Actions.Reset});
  };

  return {
    value: inputState.value,
    inputIsValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    onResetHandler,
  };
};

export default useInput;
