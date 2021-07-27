import React from 'react';
import { Button, Select } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

function SelectCompany() {
  return (
    <div>
      <h1>현재 56명의 팀원들이 가입되어 있습니다</h1>
      <Link to="/SignUp/InputName">
        <Button type="primary" shape="circle" size="large">
          ok
        </Button>
      </Link>
    </div>
  );
}

export default SelectCompany;
