import React from 'react';
import styled from "styled-components";
import {Title} from "../LoginPage";

import imgA from '../../css/source/img1.png';
import iconA from '../../css/icon/arrow-right.svg';

const SubTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  width: 193px;
  color: #707070;
`;

function SignUp({history}) {
  return (
    <div class="none">
      <div class="img">
        <img src={imgA} width="327px" alt="illustration"/>
      </div>
      <Title>
        함께 일해도 낯설기만한회사 동료들
      </Title>
      <SubTitle>
        atwork는 회사사람들이 친해지는 그날까지 함께합니다.
      </SubTitle>
      <button class="btn-floting" onClick={() => history.push('../SignUp/InputName')}>
        <img src={iconA} width="40px" height="40px" alt="icon"/>
      </button>
      <span class="btn-text" >
        <a href="/Users/hug.ing/Desktop/at-work-react/src/Login/LoginPage.js">
        건너뛰기
        </a>
      </span>
    </div>
  );
}

export default SignUp;
