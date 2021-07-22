import React from 'react';
import "/Users/hug.ing/Desktop/at-work-react/src/css/screen.css";
import imgA from '/Users/hug.ing/Desktop/at-work-react/src/css/source/img1.png';
import iconA from '../../css/icon/arrow-right.svg';

function SignUp2(history) {
  return (
    <div class="none">
      <div class="img">
        <img src={imgA} width="327px" alt="illustration"/>
      </div>
      <section>
        <form class="text__title">
          함께 일일일
        </form>
        <form class="text_subtitle">
          atwork는 회사사람들이 친해지는 그날까지 함께합니다.
        </form>
      </section>
      <button class="btn-floting" onClick={() => history.push('../SignUp/InputForm')}>
        <img src={iconA} width="40px" height="40px" alt="icon"/>
      </button>
      <span class="btn-text" >
        <a herf="/Users/hug.ing/Desktop/at-work-react/src/Login/LoginPage.js">
        건너뛰기
        </a>
      </span>

    </div>
  );
}

export default SignUp2;
