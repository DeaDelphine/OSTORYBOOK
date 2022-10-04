import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';


const Login = () => {
  const emailValue = useSelector((state) => state.email);
  const passwordValue = useSelector((state) => state.password);
  console.log(emailValue);

  return (
  <div>
    <LoginForm 
      email=""
      password=""
      isLogged = {false}
      loggedMessage="Bienvenue"
      changeField={(newValue, identifier) => {
        console.log(`on active la fonction changeField, newValue=${newValue}, identifier=${identifier}`)
      }}
      handleLogin={() => {

      }}
      handleLogout={() => {
        
      }}
    />
  </div>
);
}
export default Login;
