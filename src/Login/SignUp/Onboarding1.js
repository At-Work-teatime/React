import { Title, SubTitle, FloatingBtn, Screen, TextBtn } from '../../style/style';

import React from 'react';
import '../../css/screen.css';
import imgA from '../../css/source/img1.png';
import iconA from '../../css/icon/arrow-right.svg';
import { Link } from 'react-router-dom';
import { getTargetUrl }from './util'

function Onboarding1({ history,match }) {
  return (
    <Screen>
      <div className="img">
        <img src={imgA} width="327px" alt="illustration" />
      </div>
      <Title>함께 일해도 낯설기만한회사 동료들</Title>
      <SubTitle>atwork는 회사사람들이 친해지는 그날까지 함께합니다.</SubTitle>
      <TextBtn>
        <Link to="../SignUp/1">건너뛰기</Link>
      </TextBtn>
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />

    </Screen>
  );
}

export default Onboarding1;
