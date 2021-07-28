import React from "react";
import "../../css/screen.css";
import imgC from "../../css/source/img3.png";
import iconA from "../../css/icon/arrow-right.svg";
import {Link} from 'react-router-dom'
import {Title, SubTitle} from "../../style/Text";
import {FloatingBtn, TextBtn} from '../../style/button'

function SignUp({ history }) {
  return (
    <div className="none">
      <div className="img">
        <img src={imgC} width="327px" alt="illustration" />
      </div>
      <Title>
        쉽게 찾아보고 알아갈 수 있는 atwork!
      </Title>
      <SubTitle>
        atwork는 회사사람들이 친해지는 그날까지 함께합니다.
      </SubTitle>
      <FloatingBtn
        onClick={() => history.push("./InputEmail")}>
        <img src={iconA} width="40px" height="40px" alt="icon" />
      </FloatingBtn>
      <TextBtn>
        <Link to="../SignIn">건너뛰기</Link>
      </TextBtn>
    </div>
  );
}

export default SignUp;
