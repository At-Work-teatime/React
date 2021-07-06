import React, { useState } from 'react';
/* 어떤 상황에서 useState를 사용하나요?*/
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { isEmail } from '../../common/email';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

function InputForm() {
  const [email, setEmail] = useState('아경바보');
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
        allowClear /*텍스트 전체삭제*/
        style={{ width: '40%' }}
        placeholder="이메일"
        onChange={onChangeEmail} /*검색해보기*/
      />
      <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>
      {isEmail(email) ? (
        <Link to="/SignUp/SelectCompany">
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<RightOutlined />}
          ></Button>
        </Link>
      ) : (
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<RightOutlined />}
        ></Button>
      )}
    </div>
  );
}/*버튼은 왜 두개로 분리해놓으신건가요?! 이메일 에러났을 때 안눌리게 하는 건가요?*/

export default InputForm;
/*test*/