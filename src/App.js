import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login/LoginPage';
import SignIn from './Login/SignIn/SignIn';
import SignUp from './Login/SignUp/SignUp';
import InputForm from './Login/SignUp/InputForm';
import SelectCompany from './Login/SignUp/SelectCompany';
import InputName from './Login/SignUp/InputName';
import InputJob from './Login/SignUp/InputJob';
import InputProfile from './Login/SignUp/InputProfile';

import './css/screen.css';
function App() {
  return (
    <div className="screen">
      <Route path="/" component={Login} exact />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} exact />
      <Route path="/SignUp/InputForm" component={InputForm} />
      <Route path="/SignUp/SelectCompany" component={SelectCompany} />
      <Route path="/SignUp/InputName" component={InputName} />
      <Route path="/SignUp/InputJob" component={InputJob} />
      <Route path="/SignUp/InputProfile" component={InputProfile} />
    </div>
  );
}
export default App;

/*app.js파일은 어떤 역할을 하는걸까요*/