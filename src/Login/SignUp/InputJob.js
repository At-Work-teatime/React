import React, { useState } from 'react';
import {  FloatingBtn,ChipBtn,Title, Input } from '../../style/style';
import { getTargetUrl }from './util'
import  img1 from '../../css/source/img1.png'

function InputJob({history,match}) {
  const [job, setJob] = useState('');
  const onChangeJob = (e) => {
    const job = e.target.value;
    setJob(e.target.value);
  };
return (
    <div className = "NameTop">
      <img src={img1} width="36px" alt="Frip-logo" />
      <Title margin="36px 0px 0px 0px">
       입사일과 직무를 입력 및 선택해주세요!
      </Title>
      <Input allowClear placeholder="2020.11.16" margin="29px 0px 0px 0px"/>
      <h5 className="JobCategoryText">Designer</h5>
      <ChipBtn> 디자이너 </ChipBtn>
      <ChipBtn> 프로모션 디자이너 </ChipBtn>
      <ChipBtn> 프로덕트 디자이너 </ChipBtn>
      <ChipBtn> UX/UI 디자이너 </ChipBtn>
      <ChipBtn> 인터렉션 디자이너 </ChipBtn>
      <ChipBtn> 모션 그래픽 디자이너 </ChipBtn>
      <h5 className="JobCategoryText">Developer</h5>
      <ChipBtn background-color="F6F6F6"> 개발자 </ChipBtn>
      <ChipBtn background-color="F6F6F6"> 백엔드 개발자 </ChipBtn>
      <ChipBtn background-color="F6F6F6"> 프론트 개발자 </ChipBtn>
      <ChipBtn background-color="F6F6F6"> 안드로이드 개발자 </ChipBtn>
      <ChipBtn background-color="F6F6F6"> iOS 개발자 </ChipBtn>
      <ChipBtn background-color="F6F6F6"> 풀스텍 개발자 </ChipBtn>
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />
    </div>
  );
}

export default InputJob;
