import React from 'react';
import {Title} from "../style/Text";
import {FullButton} from "../style/button";

function Login({history}) {
  return (
    <div>
    <Title> 
    직장생활을 위한 네트워킹 플랫폼, at-work!
    </Title>
      <FullButton color="#3182F6" onClick={() => history.push("./SignUp")}>
      계정 만들기
      </FullButton>
      <FullButton color="#303030">
      이미 계정이 있어요!
      </FullButton>
    </div>
  );
}

export default Login;
