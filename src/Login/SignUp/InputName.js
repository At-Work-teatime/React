import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

function InputName() {
  const [name, setName] = useState('');
  const [error, setErrror] = useState('');
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  return (
    <div>
      1<h3>당신의 이름을 알려주세요</h3>
      <Input
        allowClear
        style={{ width: '40%' }}
        placeholder="홍길동"
        onChange={onChangeName}
      />
      <Link to="/SignUp/InputJob">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<RightOutlined />}
         />
      </Link>
    </div>
  );
}

export default InputName;
