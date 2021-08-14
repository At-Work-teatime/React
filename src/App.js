import React from 'react';
import { Route } from 'react-router-dom';

import Login from './Login/LoginPage';
import SignIn from './Login/SignIn/SignIn';
import MainPage from './Main/MainPage';
import './css/screen.css';
// import InputInterest from './Login/SignUp/Interest';
import { useMediaQuery } from 'react-responsive';
import GetWindowSize from './GetWindowSize';
import { Screen } from './style/style';
import SignUp from './Login/SignUp/SignUp';

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 });
//   return isDesktop ? children : null;
// };
// const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
//   return isTablet ? children : null;
// };
// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile ? children : null;
// };
// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };



function App() {
  const size =  GetWindowSize();

  return (
    <Screen width={size.width}>
      <Route path="/" component={Login} exact />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/main" component={MainPage} />
    </Screen>
  );
}
export default App;
