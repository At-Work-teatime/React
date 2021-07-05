import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <div>
      <h1>
        함께 일해도 낯설기만한 <br />
        회사 동료들
      </h1>
      <Link to="/SignUp/InputForm">
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

export default SignUp;
