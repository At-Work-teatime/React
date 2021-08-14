import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { UserAddOutlined, RightOutlined } from '@ant-design/icons';
import  img1 from '../../css/source/img1.png'
import  img2 from '../../css/source/img2.png'
import { ProfileBox ,  FloatingBtn, Title } from '../../style/style';
import { getTargetUrl }from './util'


function InputProfile({history,match}) {
  const [file, setFile] = useState('');
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const setFileUrl = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append('file', e.target.files[0]);
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onload = function () {
        setFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (

    <div className = "NameTop">
    <img src={img1} width="36px" alt="Frip-logo" />
    <Title margin="36px 0px 0px 0px">
    프로필 사진을 등록해주세요!
    </Title>

    <img className="ProfileUpload" src={img2} width="148px" alt="Frip-logo" />

    <Button icon={<UserAddOutlined id="input-file" />} onClick={handleClick} shape="circle" />
      <input
        type="file"
        id="input-file"
        onChange={(e) => setFileUrl(e)}
        style={{ display: 'none' }}
        ref={hiddenFileInput}
      />

<div>
        {file ? (
          <ProfileBox>
            <img shape="circle" src={file} width="100%" height="100%" object-fit="cover" />
          </ProfileBox>
        ) : (
          ''
        )}
      </div>
      <FloatingBtn onClick={()=>history.push(getTargetUrl(match.path))} />
  </div>
  )}
export default InputProfile;
