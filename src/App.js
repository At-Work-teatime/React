import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login/LoginPage';
import SignIn from './Login/SignIn/SignIn';
import SignUp from './Login/SignUp/SignUp';
import InputForm from './Login/SignUp/InputForm';

import './css/screen.css';
import GlobalStyle from './global-style';
function App() {
  return (
    <div className="screen">
      <GlobalStyle />
      <Route path="/" component={Login} exact />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} exact />
      <Route path="/SignUp/InputForm" component={InputForm} />
    </div>
  );
}
export default App;
