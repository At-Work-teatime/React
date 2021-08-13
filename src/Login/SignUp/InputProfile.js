import React from "react";
import '../../css/screen.css';

import img1 from "../../css/source/img_number_1.png";
import img2 from "../../css/source/img_profileUpload.png";
import iconA from "../../css/icon/arrow-right.svg";
import { Title } from '../../style/Text';
import { FloatingBtn } from '../../style/button';

function InputProfile({history}) {
  return (
    <div className = "NameTop">
      <img src={img1} width="36px" alt="Frip-logo" />
      <Title margin="36px 0px 0px 0px">
      프로필 사진을 등록해주세요!
      </Title>
      <img className="ProfileUpload" src={img2} width="148px" alt="Frip-logo" />
      <FloatingBtn
        onClick={() => history.push("./InputInterest")}>
        <img src={iconA} width="40px" height="40px" alt="icon" />
      </FloatingBtn>
    </div>
  );
}

export default InputProfile;
