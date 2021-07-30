import React, { useState } from "react";
import iconA from "../../css/icon/arrow-right.svg";
import { isEmail } from "../../common/email";
import { Link } from "react-router-dom";
import {FloatingBtn} from '../../style/button'
import {Title, SubTitle} from '../../style/Text'
import {Input} from '../../style/input'

function InputEmail({ history }) {
  const [email, setEmail] = useState("");
  const [error, setErrror] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    if (!isEmail(email)) {
      setErrror("올바르지 않은 이메일 형식 입니다.");
    } else {
      setErrror("");
      setEmail(email);
    }
  };
  return (
    <div>
      <Title>
        직장생활을 위한 네트워킹 플랫폼, atwork!
      </Title>
      <SubTitle>
        회사에서 사용하는 이메일을 입력해주세요
      </SubTitle>
      <Input allowClear
       placeholder="이메일"/>
      <div style={{ color: "red", fontSize: "12px" }}>{error}</div>
      {isEmail(email) ? (
        <Link to="/SignUp/SelectCompany">
        <FloatingBtn
        background-color="#707070">
          <img src={iconA} width="40px" height="40px" alt="icon" />
        </FloatingBtn>
        </Link>
      ) : (
        <FloatingBtn 
        onClick={() => history.push("./SelectCompany")}
        background-color="#3182f6">
          <img src={iconA} width="40px" height="40px" alt="icon" />
        </FloatingBtn>
      )}
    </div>
  );
}

export default InputEmail;
