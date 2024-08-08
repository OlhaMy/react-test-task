import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };

  return (
    <>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
    </>
  );
}

export default App;
