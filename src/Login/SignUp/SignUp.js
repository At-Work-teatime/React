import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import imgA from '/Users/hug.ing/Desktop/at-work-react/src/css/source/img1.png';

import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <div>
      <img src={imgA} width="327px" alt="illustration"/>
      <section class="title__main">
        함께 일해도 낯설기만한회사 동료들
      </section>
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
