import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login/LoginPage';
import SignIn from './Login/SignIn/SignIn';
import SignUp from './Login/SignUp/Onboarding';
import InputEmail from './Login/SignUp/InputEmail';
import SelectCompany from './Login/SignUp/SelectCompany';
import InputName from './Login/SignUp/InputName';
import InputJob from './Login/SignUp/InputJob';
import InputProfile from './Login/SignUp/InputProfile';
import MainPage from './Main/MainPage';
import './css/screen.css';
import InputInterest from './Login/SignUp/Interest';

function App() {
  return (
    <div className="screen">
      <Route path="/" component={Login} exact />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} exact />
      <Route path="/SignUp/InputEmail" component={InputEmail} />
      <Route path="/SignUp/SelectCompany" component={SelectCompany} />
      <Route path="/SignUp/InputName" component={InputName} />
      <Route path="/SignUp/InputJob" component={InputJob} />
      <Route path="/SignUp/InputProfile" component={InputProfile} />
      <Route path="/SignUp/Interest" component={InputInterest} />
      <Route path="/main" component={MainPage} />
    </div>
  );
}
export default App;
