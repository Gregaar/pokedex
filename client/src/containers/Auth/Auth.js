import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import authStyles from "./AuthStyles";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../shared/Utility";

const Auth = (props) => {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "MyEmail@MyProvider.com",
        title: "",
      },
      label: "Email Address",
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
      dataTip: "Please enter a valid email address.",
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      label: "Password",
      value: "",
      validation: {
        required: true,
        minLength: 6,
        maxLength: 16,
      },
      valid: false,
      touched: false,
      dataTip: "Your password length must be between 6 and 16 characters.",
    },
  });

  const [axiosState, setAxiosState] = useState({
    message: null,
  });

  const signupFormSubmitHandler = async (event) => {
    event.preventDefault();
    setAxiosState({ message: null });
    await axios({
      method: "post",
      url: "/signup/newuser",
      data: {
        email: authForm.email.value,
        password: authForm.password.value,
      },
    })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        setAxiosState({
          message: error.response.data,
        });
      });
  };

  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    await axios({
      method: "post",
      url: "/login/auth",
      data: {
        email: authForm.email.value,
        password: authForm.password.value,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error.response);
        setAxiosState({
          message: error.response.data,
        });
      });
  };

  const inputChangeHandler = (event) => {
    const updatedForm = updateObject(authForm, {
      [event.target.id]: updateObject(authForm[event.target.id], {
        value: event.target.value,
        valid: checkValidity(event.target.value, authForm[event.target.id].validation),
        touched: true,
      }),
    });
    setAuthForm(updatedForm);
  };

  const formElementsArray = [];
  for (let property in authForm) {
    formElementsArray.push({
      id: property,
      config: authForm[property],
    });
  }

  let form = formElementsArray.map((element) => {
    return (
      <Input
        key={element.id}
        id={element.id}
        elementConfig={element.config.elementConfig}
        htmlFor={element.id}
        change={inputChangeHandler}
        value={element.config.value}
        required={element.config.required}
        label={element.config.label}
        touched={element.config.touched}
        shouldValidate={element.config.validation}
        invalid={!element.config.valid}
        dataTip={element.config.dataTip}
      />
    );
  });

  // GOALS:
  // 1. Setup validation for Email & password - create a function for this.
  // 2. Create a USER model with mongoose
  // 3. Create the POST requests for LOGIN and LOGOUT on Server side
  // When form is submitted, it goes to the server. Server does validation on its end and sends back a response, with either creating a new account or not.
  // New account created = form input is valid && email isn't already taken
  // New account is INVALID = form input is invalid && email IS taken
  // 4. Store the tokens and pass them back to the client
  // 5. Create authenticated paths to test authentication properly

  const classes = authStyles();

  const errorStyle = axiosState.message ? classes.AxiosError : classes.HideError;

  const header =
    props.page === "signup" ? (
      <h1 className={classes.Heading}>Create Your Dream Team Acccount</h1>
    ) : (
      <h1 className={classes.Heading}>Login to your Dream Team Account</h1>
    );

  const isRegistered =
    props.page === "signup" ? (
      <p>
        Already have an account?{" "}
        <NavLink to="/login" exact>
          Click here to Login
        </NavLink>
      </p>
    ) : (
      <p>
        Don't have an account yet?{" "}
        <NavLink to="/signup" exact>
          Click here to Sign up
        </NavLink>
      </p>
    );

  const determineFormFunction = props.page === "signup" ? signupFormSubmitHandler : loginFormSubmitHandler;

  return (
    <form onSubmit={determineFormFunction} className={classes.Form}>
      <div className={classes.Container}>
        {header}
        <p className={errorStyle}>Error: {axiosState.message}</p>
        {form}
        <Button invalid={!authForm.password.valid} className={classes.Button}>
          Submit
        </Button>
        {isRegistered}
      </div>
    </form>
  );
};

export default Auth;
