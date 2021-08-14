import React from 'react';
import { Button, Select } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import {  FloatingBtn } from '../../style/style';
import { getTargetUrl }from './util'

function SelectCompany({history,match}) {
  return (
    <div>
      <h1>현재 56명의 팀원들이 가입되어 있습니다</h1>
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />
    </div>
  );
}

export default SelectCompany;
