import React from 'react';
import {  FloatingBtn , SubTitle } from '../../style/style';
import { getTargetUrl }from './util'
import '../../css/screen.css';

import img1 from "../../css/source/img_logo.png";
import imgA from "../../css/source/img_company_1.png";
import imgB from "../../css/source/img_company_2.png";
import imgC from "../../css/source/img_company_3.png";
import imgD from "../../css/source/img_company_4.png";
import imgE from "../../css/source/img_company_5.png";
import { Center } from '../../Main/Layout'


function SelectCompany({history, match}) {
  return (
    <div className="CompanyCenter">
      <img src={img1} width="60px" alt="Frip-logo" />
      <SubTitle margin = "16px 0px 51px 0px" color = "000000" textalign = "center">
        (주)프렌트립
      </SubTitle>
      <SubTitle margin = "0px 0px 16px 0px" textalign="center" width="100%">
        현재 56명의 팀원들이 가입되어 있습니다
      </SubTitle>
      <Center>
        <img src={imgA} width="48px" alt="illustration" />
        <img src={imgB} width="48px" alt="illustration" />
        <img src={imgC} width="48px" alt="illustration" />
        <img src={imgD} width="48px" alt="illustration" />
        <img src={imgE} width="48px" alt="illustration" />
      </Center>
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />
    </div>
  );
}

export default SelectCompany;
