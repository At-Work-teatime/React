import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';

function InputProfile() {
  const [file, setFile] = useState('');
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const setFileUrl = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append('file', e.target.files[0]);
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onload = function () {
        setFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      4
      <h3>
        프로필 사진을
        <br /> 등록해주세요!
      </h3>
      <Button
        icon={<UserAddOutlined id="input-file" />}
        onClick={handleClick}
      ></Button>
      <input
        type="file"
        id="input-file"
        onChange={(e) => setFileUrl(e)}
        style={{ display: 'none' }}
        ref={hiddenFileInput}
      />
      <div>
        {file ? <img className="profile_preview" src={file}></img> : ''}
      </div>
    </div>
  );
}

export default InputProfile;
