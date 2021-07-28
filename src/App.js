import React from 'react';
import { Route } from 'react-router-dom';

import Login from './Login/LoginPage';
import SignIn from './Login/SignIn/SignIn';
import Onboarding from './Login/SignUp/Onboarding';
import Onboarding2 from './Login/SignUp/Onboarding2';
import Onboarding3 from './Login/SignUp/Onboarding3';
import InputEmail from './Login/SignUp/InputEmail';
import SelectCompany from './Login/SignUp/SelectCompany';
import InputName from './Login/SignUp/InputName';
import InputJob from './Login/SignUp/InputJob';
import InputProfile from './Login/SignUp/InputProfile';
import InputInterest from './Login/SignUp/Interest';
import MainPage from './Main/MainPage';


import './css/screen.css';

function App() {
  return (
    <div className="screen">
      <Route path="/" component={Login} exact />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp/Onboarding" component={Onboarding} />
      <Route path="/SignUp/Onboarding2" component={Onboarding2} />
      <Route path="/SignUp/Onboarding3" component={Onboarding3} />
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
