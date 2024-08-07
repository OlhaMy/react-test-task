import MyComponent from "/MyComponent/MyComponent";

export const loginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    <label htmlFor={passwordId}>Password</label>;
    <input type="password" name="password" id={passwordId} />;

    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
