import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../css/pageBase.css';

function Login() {
  return (
    <div className="pageBase">
      <h1>로그인/회원가입 페이지</h1>
      <Link to="./SignUp">
        <Button size={'large'}>AtWork가 처음이신가요?</Button>
      </Link>
      <br></br>
      <Link to="./SignIn">
        <Button size={'large'}>이미 계정이 있나요?</Button>
      </Link>
    </div>
  );
}

export default Login;
