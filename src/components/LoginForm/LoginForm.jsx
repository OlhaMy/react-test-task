import { useId, useState } from "react";

const LoginForm = ({ onLogin }) => {
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };
};

export default LoginForm;
