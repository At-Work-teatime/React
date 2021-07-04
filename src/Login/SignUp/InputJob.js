import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

function InputJob() {
  return (
    <div>
      2<h3>당신의 직책을 알려주세요</h3>
      <Link to="/SignUp/InputJop">
        <Button type="primary" shape="circle" size="large">
          {'>'}
        </Button>
      </Link>
    </div>
  );
}

export default InputJob;
