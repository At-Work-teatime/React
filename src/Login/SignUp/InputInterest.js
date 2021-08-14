import React from 'react';

import img1 from "../../css/source/img_number_1.png";
import iconA from "../../css/icon/arrow-right.svg";
import { Title,FloatingBtn, ChipBtn, Chip2Btn} from '../../style/style'


function InputInterest({history}) {
    return (
      <div className = "NameTop">
        <img src={img1} width="36px" alt="Frip-logo" />
        <Title margin="36px 0px 0px 0px">
        입사일과 직무를 입력 및 선택해주세요!
        </Title>
          <h5 className="JobCategoryText">취미를 알려주세요!</h5>
          <Chip2Btn> 디자이너 </Chip2Btn>
          <Chip2Btn> 프로모션 디자이너 </Chip2Btn>
          <Chip2Btn> 프로덕트 디자이너 </Chip2Btn>
          <Chip2Btn> UX/UI 디자이너 </Chip2Btn>
          <Chip2Btn> 인터렉션 디자이너 </Chip2Btn>
          <Chip2Btn> 모션 그래픽 디자이너 </Chip2Btn>
          <h5 className="JobCategoryText">좋아하는 것을 알려주세요!</h5>
          <Chip2Btn> 디자이너 </Chip2Btn>
          <Chip2Btn> 프로모션 디자이너 </Chip2Btn>
          <Chip2Btn> 프로덕트 디자이너 </Chip2Btn>
          <Chip2Btn> UX/UI 디자이너 </Chip2Btn>
          <Chip2Btn> 인터렉션 디자이너 </Chip2Btn>
          <Chip2Btn> 모션 그래픽 디자이너 </Chip2Btn>
        <FloatingBtn onClick={() => history.push("/Users/hug.ing/Desktop/at-work-react/src/Profile/ProfilePage")}>
        <img src={iconA} width="40px" height="40px" alt="icon" />
        </FloatingBtn>
        </div>
      );
    }

export default InputInterest;