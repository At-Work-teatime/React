import React from 'react';
import {Title} from "../style/Text";
import {FullBtn} from "../style/button";

function Login({history}) {
  return (
    <div>
    <Title> 
    직장생활을 위한 네트워킹 플랫폼, at-work!
    </Title>
      <FullBtn color="#3182F6" onClick={() => history.push("./SignUp/Onboarding")}>
      계정 만들기
      </FullBtn>
      <FullBtn color="#303030">
      이미 계정이 있어요!
      </FullBtn>
    </div>
  );
}

export default Login;
