import React from "react";
import "../../css/screen.css";
import imgB from "../../css/source/img2.png";
import iconA from "../../css/icon/arrow-right.svg";
import {Link} from 'react-router-dom'
import {Title, SubTitle} from "../../style/Text";
import {FloatingBtn, TextBtn} from '../../style/button'

function SignUp({ history }) {
  return (
    <div className="none">
      <div className="img">
        <img src={imgB} width="327px" alt="illustration" />
      </div>
      <Title>
        어떤 대화를 해야할지 막막한가요?
      </Title>
      <SubTitle>
        atwork는 회사사람들이 친해지는 그날까지 함께합니다.
      </SubTitle>
      <FloatingBtn
        onClick={() => history.push("./Onboarding3")}>
        <img src={iconA} width="40px" height="40px" alt="icon" />
      </FloatingBtn>
      <TextBtn>
        <Link to="../SignIn">건너뛰기</Link>
      </TextBtn>
    </div>
  );
}

export default SignUp;
