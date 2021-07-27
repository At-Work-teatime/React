import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

function InputJob() {

  const [job, setJob] = useState('');
  const onChangeJob = (e) => {
    const job = e.target.value;
    setJob(e.target.value);
  };

  return (
    <div>
      3<h3>당신의 직책을 알려주세요</h3>
      <Input
        allowClear
        style={{ width: '40%' }}
        placeholder="디자이너"
        onChange={onChangeJob}
      />
       <Link to="/SignUp/InputProfile">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<RightOutlined />}
          onChange= {<RightOutlined />}
         />
      </Link>
    </div>
  );
}

export default InputJob;
