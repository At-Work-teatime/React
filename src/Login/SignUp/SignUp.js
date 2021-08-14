import React from 'react';
import { Route } from 'react-router-dom';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
import InputEmail from './InputEmail';
import SelectCompany from './SelectCompany';
import InputName from './InputName';
import InputJob from './InputJob';
import InputProfile from './InputProfile';
import InputInterest from './Interest';
import { useMediaQuery } from 'react-responsive';
// import GetWindowSize from '../../GetWindowSize';
import { Onboarding } from '../../style/style';

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
// function getTargetUrl(url) {
//   const to = url.split('/');
//   console.log(url);
//   console.log(to);
//   if (to.length === 2) {
//     return `${url}/1`;
//   }
//   return `/${to[1]}/${Number(to[2]) + 1}`;
// }
function SignUp() {
  return (
    <Onboarding>
      <Route path="/SignUp/1" component={Onboarding1} />
      <Route path="/SignUp/2" component={Onboarding2}/>
      <Route path="/SignUp/3" component={Onboarding3}/>
      <Route path="/SignUp/4" component={InputEmail} />
      <Route path="/SignUp/5" component={SelectCompany} />
      <Route path="/SignUp/6" component={InputName} />
      <Route path="/SignUp/7" component={InputJob} />
      <Route path="/SignUp/8" component={InputProfile} />
      <Route path="/SignUp/9" component={InputInterest} />
    </Onboarding>
  );
}
export default SignUp;
