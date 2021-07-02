import React from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
function InputForm() {
  return (
    <div>
      <h1>직장생활을 위한 네트워킹 플랫폼, atwork!</h1>
      <h3>회사에서 사용하는 이메일을 입력해주세요</h3>
      <Input.Search allowClear style={{ width: '40%' }} placeholder="이메일" />
      <br />
      <Button type="primary" shape="circle" size="large">
        {'>'}
      </Button>
    </div>
  );
}

export default InputForm;
