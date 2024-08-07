import "./App.css";
import { LoginForm } from "./components/LoginForm/LoginForm";

function App() {
  const handelLogin = (userDate) => {
    console.log(userDate);
  };

  return (
    <>
      <h1>Please login your account!</h1>

      <LoginForm onLogin={handelLogin} />
    </>
  );
}

export default App;
