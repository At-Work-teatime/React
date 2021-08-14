import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import {  FloatingBtn } from '../../style/style';
import { getTargetUrl }from './util'

function InputJob({history,match}) {
  const [job, setJob] = useState('');
  const onChangeJob = (e) => {
    const job = e.target.value;
    setJob(e.target.value);
  };

  return (
    <div>
      3<h3>당신의 직책을 알려주세요</h3>
      <Input allowClear  placeholder="디자이너" onChange={onChangeJob} />
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />

    </div>
  );
}

export default InputJob;
