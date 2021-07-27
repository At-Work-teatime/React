import React from 'react';
import { Button } from 'antd';
/* antd가 뭘 의미하는지 모르겠어요! */

function SignIn() {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <Button type="primary" shape="circle" size="large">
        로그인
      </Button>
    </div>
  );
}

export default SignIn;
