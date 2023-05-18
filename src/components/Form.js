import useInput from "../hooks/useInput";

const nameValidation = (value) => {
  console.log(value.trim() !== "");
  return value.trim() !== "";
};
const emailValidation = (value) => {
  return value.includes("@");
};

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    inputIsValid: firstNameIsValid,
    hasError: firstNameError,
    onBlurHandler: firstNameOnBlurHandler,
    onChangeHandler: firstNameOnChangeHandler,
    onResetHandler: firstNameOnResetHandler,
  } = useInput(nameValidation);

  const {
    value: lastNameValue,
    inputIsValid: lastNameIsValid,
    hasError: lastNameError,
    onBlurHandler: lastNameOnBlurHandler,
    onChangeHandler: lastNameOnChangeHandler,
    onResetHandler: lastNameOnResetHandler,
  } = useInput(nameValidation);

  const {
    value: emailValue,
    inputIsValid: emailIsValid,
    hasError: emailError,
    onBlurHandler: emailOnBlurHandler,
    onChangeHandler: emailOnChangeHandler,
    onResetHandler: emailOnResetHandler,
  } = useInput(emailValidation);

  const onSubmitHandler = (event) => {
    // do not send http request to server because we don't have real server to begin with
    // and also if th request sent the page will reload and restart the react application and we will lose our state :)
    event.preventDefault();

    console.log("working submit");
    firstNameOnResetHandler();
    lastNameOnResetHandler();
    emailOnResetHandler();
  };

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="control-group">
          <div className={`form-control ${firstNameError && "invalid"}`}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={firstNameValue}
              onChange={firstNameOnChangeHandler}
              onBlur={firstNameOnBlurHandler}
            />
            {firstNameError && (
              <p className="error-text">Please enter a first name.</p>
            )}
          </div>

          <div className={`form-control ${lastNameError && "invalid"}`}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              value={lastNameValue}
              onChange={lastNameOnChangeHandler}
              onBlur={lastNameOnBlurHandler}
            />
            {lastNameError && (
              <p className="error-text">Please enter a last name.</p>
            )}
          </div>
        </div>

        <div className={`form-control ${emailError && "invalid"}`}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            value={emailValue}
            onChange={emailOnChangeHandler}
            onBlur={emailOnBlurHandler}
          />
          {emailError && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>

        <div className={`form-actions`}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
