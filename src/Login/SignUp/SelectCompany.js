import React from 'react';
import '../../css/screen.css';
import imgA from "../../css/source/img_logo.png";
import iconA from "../../css/icon/ok.svg";
import { SubTitle } from '../../style/Text';
import { FloatingBtn } from '../../style/button'

function SelectCompany({history}) {
  return (
    <div className="center">
      <img src={imgA} width="60px" alt="Frip-logo" />
      <SubTitle margin = "16px 0px 51px 0px" color = "000000" textalign = "center">
        (주)프렌트립
      </SubTitle>
      <SubTitle margin = "0px 0px 16px 0px" textalign="center" width="100%">
        현재 56명의 팀원들이 가입되어 있습니다
      </SubTitle>
      <FloatingBtn
        onClick={() => history.push("./InputName")}>
        <img src={iconA} width="40px" height="40px" alt="icon" />
      </FloatingBtn>
    </div>
  );
}

export default SelectCompany;
