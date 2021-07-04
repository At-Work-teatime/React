import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { isEmail } from '../../common/email';
import { Link } from 'react-router-dom';

function InputForm() {
  const [email, setEmail] = useState('');
  const [error, setErrror] = useState('');
  const onChangeEmail = (e) => {
    const email = e.target.value;
    if (!isEmail(email)) {
      setErrror('올바르지 않은 이메일 형식 입니다.');
    } else {
      setErrror('');
      setEmail(email);
    }
  };
  return (
    <div>
      <h1>
        직장생활을 위한
        <br /> 네트워킹 플랫폼, atwork!
      </h1>
      <h3>회사에서 사용하는 이메일을 입력해주세요</h3>
      <Input
        allowClear
        style={{ width: '40%' }}
        placeholder="이메일"
        onChange={onChangeEmail}
      />
      <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>
      {isEmail(email) ? (
        <Link to="/SignUp/SelectCompany">
          <Button type="primary" shape="circle" size="large">
            {'>'}
          </Button>
        </Link>
      ) : (
        <Button type="primary" shape="circle" size="large">
          {'>'}
        </Button>
      )}
    </div>
  );
}

export default InputForm;
