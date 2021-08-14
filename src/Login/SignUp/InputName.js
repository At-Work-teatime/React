import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import {  FloatingBtn, Input, SubTitle, Title } from '../../style/style';
import { getTargetUrl }from './util'
import '../../css/screen.css';
import img1 from "../../css/source/img_number_1.png";
import iconA from "../../css/icon/arrow-right.svg";

function InputName({history, match}) {

return (
  <div className = "NameTop">
      <img src={img1} width="36px" alt="Frip-logo" />
      <Title margin="36px 0px 0px 0px">
        이름을 알려주세요
      </Title>
      <SubTitle width="275px" margin="15px 0px 0px 0px">
      영어이름이 있을 경우 영어이름을, 없을 경우 한글 이름을 영문으로 써주세요.
      </SubTitle>
      <Input allowClear placeholder="David hong" margin="29px 0px 0px 0px"/>
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />
  </div>
  );
}

export default InputName;
