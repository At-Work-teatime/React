import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import {  FloatingBtn } from '../../style/style';
import { getTargetUrl }from './util'

function InputName({history,match}) {
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
        placeholder="홍길동"
        onChange={onChangeName}
      />
            <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />

    </div>
  );
}

export default InputName;
