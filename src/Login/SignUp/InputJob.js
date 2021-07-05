import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

function InputJob() {
  return (
    <div>
      3<h3>당신의 직책을 알려주세요</h3>
      <Link to="/SignUp/InputProfile">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<RightOutlined />}
        ></Button>
      </Link>
    </div>
  );
}

export default InputJob;
