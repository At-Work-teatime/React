import React from 'react';
import styled from "styled-components";

import "../../css/screen.css";
import imgA from '../../css/source/img1.png';
import iconA from '../../css/icon/arrow-right.svg';

function SignUp2({history}) {
  return (
    <div className="none">
      <div className="img">
        <img src={imgA} width="327px" alt="illustration"/>
      </div>
      <section>
        <form className="text__title">
          함께 일일일
        </form>
        <form className="text_subtitle">
          atwork는 회사사람들이 친해지는 그날까지 함께합니다.
        </form>
      </section>
      <button className="btn-floting" onClick={() => history.push('../SignUp/InputForm')}>
        <img src={iconA} width="40px" height="40px" alt="icon"/>
      </button>
      <span className="btn-text" >
        <a href="../LoginPage.js">
        건너뛰기
        </a>
      </span>

    </div>
  );
}

export default SignUp2;
