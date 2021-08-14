import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { isEmail } from '../../common/email';
import { Link } from 'react-router-dom';
import { Title, FloatingBtn, SubTitle } from '../../style/style';

function InputEmail({history}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const onChangeEmail = (e) => {
    const email = e.target.value;
    if (!isEmail(email)) {
      setError('올바르지 않은 이메일 형식 입니다.');
    } else {
      setError('');
      setEmail(email);
    }
  };
  const submit = () => {
        if (isEmail(email)) {
          history.push('/SignUp/2')
        }
  }
  return (
    <div>
      <SubTitle>
        직장생활을 위한
        <br /> 네트워킹 플랫폼, atwork!
      </SubTitle>
      <h3>회사에서 사용하는 이메일을 입력해주세요</h3>
      <Input
        allowClear /* 텍스트 전체삭제 */
        style={{ width: '60%' }}
        placeholder="이메일"
        onChange={onChangeEmail} /* 검색해보기 */
      />
      {email}
      <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>
      <div>        <FloatingBtn  onClick={submit}/>
</div>
    </div>
  );
}

export default InputEmail;
